import React, {useMemo, useState} from 'preact/compat';
import * as A from '../dist/index.js';
import {CalendarDate, Time} from '@internationalized/date';
import {CalendarParts} from './priority';

const people = [
  {
    id: 'ava',
    name: 'Ava Thompson',
    email: 'ava@example.com',
    role: 'Designer',
    initials: 'AT',
    tone: 'violet'
  },
  {
    id: 'leo',
    name: 'Leo Chen',
    email: 'leo@example.com',
    role: 'Engineer',
    initials: 'LC',
    tone: 'blue'
  },
  {
    id: 'maya',
    name: 'Maya Patel',
    email: 'maya@example.com',
    role: 'Product lead',
    initials: 'MP',
    tone: 'rose'
  },
  {
    id: 'noah',
    name: 'Noah Williams',
    email: 'noah@example.com',
    role: 'Engineer',
    initials: 'NW',
    tone: 'green'
  }
];
function Avatar({person}) {
  return (
    <span className={`avatar ${person.tone}`} aria-hidden="true">
      {person.initials}
    </span>
  );
}
function Intro({eyebrow, title, children}) {
  return (
    <div className="showcase-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
function Feedback({children}) {
  return (
    <output className="showcase-feedback" aria-live="polite">
      {children}
    </output>
  );
}
function FieldSelect({label, items, value, onChange, description}) {
  return (
    <A.Select
      selectedKey={value}
      onSelectionChange={onChange}
      className="react-aria-Select showcase-select">
      <A.Label>{label}</A.Label>
      <A.Button>
        <A.SelectValue />
      </A.Button>
      {description && <A.Text slot="description">{description}</A.Text>}
      <A.Popover className="react-aria-Popover showcase-overlay">
        <A.ListBox items={items}>
          {item => <A.ListBoxItem id={item.id}>{item.name}</A.ListBoxItem>}
        </A.ListBox>
      </A.Popover>
    </A.Select>
  );
}

function DocumentWorkspace() {
  const [documents, setDocuments] = useState([
    {id: 'brief', title: 'Website redesign brief', detail: 'Updated today · 8 pages'},
    {id: 'research', title: 'Customer research', detail: 'Updated yesterday · 12 pages'},
    {id: 'notes', title: 'Sprint planning notes', detail: 'Updated Monday · 4 pages'}
  ]);
  const [message, setMessage] = useState('All changes are up to date.');
  const [rename, setRename] = useState(null);
  const [title, setTitle] = useState('');
  const act = (key, doc) => {
    if (key === 'rename') {
      setRename(doc);
      setTitle(doc.title);
    } else if (key === 'duplicate') {
      setDocuments([
        ...documents,
        {...doc, id: `${doc.id}-${Date.now()}`, title: `${doc.title} (copy)`}
      ]);
      setMessage(`Duplicated ${doc.title}.`);
    } else if (key === 'archive') {
      setDocuments(documents.filter(item => item.id !== doc.id));
      setMessage(`Archived ${doc.title}.`);
    } else {
      setDocuments(
        documents.map(item =>
          item.id === doc.id ? {...item, detail: `In ${key} · updated just now`} : item
        )
      );
      setMessage(`Moved ${doc.title} to ${key}.`);
    }
  };
  return (
    <>
      <Intro eyebrow="Your workspace" title="Documents">
        Keep your team's ideas in one place. Open an action menu to rename, duplicate or organize a
        document.
      </Intro>
      <div className="surface">
        <div className="surface-heading">
          <h3>Recent documents</h3>
          <span className="badge">{documents.length} documents</span>
        </div>
        {documents.map(doc => (
          <div className="document-row" key={doc.id}>
            <span className="document-icon" aria-hidden="true">
              ▤
            </span>
            <div className="row-copy">
              <strong>{doc.title}</strong>
              <span>{doc.detail}</span>
            </div>
            <A.MenuTrigger>
              <A.Button className="icon-button" aria-label={`Actions for ${doc.title}`}>
                •••
              </A.Button>
              <A.Popover className="react-aria-Popover showcase-overlay">
                <A.Menu
                  aria-label={`Document actions for ${doc.title}`}
                  onAction={key => act(key, doc)}>
                  <A.MenuSection>
                    <A.Header>Document</A.Header>
                    <A.MenuItem id="rename">Rename</A.MenuItem>
                    <A.MenuItem id="duplicate">Duplicate</A.MenuItem>
                  </A.MenuSection>
                  <A.Separator />
                  <A.SubmenuTrigger>
                    <A.MenuItem id="move">Move to</A.MenuItem>
                    <A.Popover className="react-aria-Popover showcase-overlay">
                      <A.Menu aria-label="Move document" onAction={key => act(key, doc)}>
                        <A.MenuItem id="Projects">Projects</A.MenuItem>
                        <A.MenuItem id="Ideas">Ideas</A.MenuItem>
                      </A.Menu>
                    </A.Popover>
                  </A.SubmenuTrigger>
                  <A.Separator />
                  <A.MenuItem id="archive" className="react-aria-MenuItem danger-item">
                    Archive document
                  </A.MenuItem>
                </A.Menu>
              </A.Popover>
            </A.MenuTrigger>
          </div>
        ))}
        {!documents.length && <p className="empty-state">Your workspace is clear.</p>}
      </div>
      <Feedback>{message}</Feedback>
      <A.ModalOverlay
        isOpen={!!rename}
        onOpenChange={open => !open && setRename(null)}
        isDismissable>
        <A.Modal>
          <A.Dialog>
            <A.Heading slot="title">Rename document</A.Heading>
            <A.Form
              onSubmit={e => {
                e.preventDefault();
                setDocuments(documents.map(doc => (doc.id === rename.id ? {...doc, title} : doc)));
                setMessage(`Renamed document to ${title}.`);
                setRename(null);
              }}>
              <A.TextField value={title} onChange={setTitle} isRequired>
                <A.Label>Document name</A.Label>
                <A.Input autoFocus />
                <A.FieldError />
              </A.TextField>
              <div className="form-actions">
                <A.Button onPress={() => setRename(null)}>Cancel</A.Button>
                <A.Button type="submit" className="primary-button">
                  Save name
                </A.Button>
              </div>
            </A.Form>
          </A.Dialog>
        </A.Modal>
      </A.ModalOverlay>
    </>
  );
}

function InviteTeam() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('member');
  const [invitations, setInvitations] = useState([]);
  return (
    <>
      <Intro eyebrow="People & access" title="Better together">
        A small team, a shared workspace. Prepare an invitation with the right permissions.
      </Intro>
      <div className="surface">
        <div className="surface-heading">
          <div>
            <h3>Team members</h3>
            <p>{people.length} active members</p>
          </div>
          <A.DialogTrigger>
            <A.Button className="primary-button">Invite teammate</A.Button>
            <A.Popover className="react-aria-Popover showcase-overlay invite-popover">
              <A.Dialog>
                {({close}) => (
                  <>
                    <A.Heading slot="title">Invite to your workspace</A.Heading>
                    <p className="muted">Choose who can join and what they can do.</p>
                    <A.Form
                      onSubmit={e => {
                        e.preventDefault();
                        setInvitations([...invitations, {email, role}]);
                        setEmail('');
                        close();
                      }}>
                      <A.TextField value={email} onChange={setEmail} type="email" isRequired>
                        <A.Label>Email address</A.Label>
                        <A.Input placeholder="teammate@example.com" />
                        <A.FieldError />
                      </A.TextField>
                      <FieldSelect
                        label="Workspace role"
                        value={role}
                        onChange={setRole}
                        items={[
                          {id: 'member', name: 'Member — can edit'},
                          {id: 'viewer', name: 'Viewer — can read'},
                          {id: 'admin', name: 'Admin — full access'}
                        ]}
                      />
                      <div className="form-actions">
                        <A.Button onPress={close}>Cancel</A.Button>
                        <A.Button type="submit" className="primary-button">
                          Prepare invitation
                        </A.Button>
                      </div>
                    </A.Form>
                  </>
                )}
              </A.Dialog>
            </A.Popover>
          </A.DialogTrigger>
        </div>
        {people.map(person => (
          <div className="member-row" key={person.id}>
            <Avatar person={person} />
            <div className="row-copy">
              <strong>{person.name}</strong>
              <span>{person.email}</span>
            </div>
            <span className="badge">{person.role}</span>
          </div>
        ))}
        {invitations.map((invite, i) => (
          <div className="member-row" key={i}>
            <span className="avatar neutral" aria-hidden="true">
              @
            </span>
            <div className="row-copy">
              <strong>{invite.email}</strong>
              <span>{invite.role} · invitation prepared</span>
            </div>
            <span className="badge amber">Pending</span>
          </div>
        ))}
      </div>
      <Feedback>
        {invitations.length
          ? `${invitations.length} invitation${invitations.length === 1 ? '' : 's'} prepared.`
          : 'Only admins can change workspace permissions.'}
      </Feedback>
    </>
  );
}

function WorkspacePreferences() {
  const [language, setLanguage] = useState('en');
  const [week, setWeek] = useState('monday');
  const [timezone, setTimezone] = useState('dubai');
  const [saved, setSaved] = useState(false);
  return (
    <>
      <Intro eyebrow="Workspace settings" title="Make it yours">
        Set the language, time zone and calendar defaults your team uses every day.
      </Intro>
      <div className="surface settings-surface">
        <div className="surface-heading">
          <h3>Regional preferences</h3>
          <span className="badge">Workspace defaults</span>
        </div>
        <div className="settings-grid">
          <FieldSelect
            label="Language"
            value={language}
            onChange={v => {
              setLanguage(v);
              setSaved(false);
            }}
            description="Used for dates, numbers and labels."
            items={[
              {id: 'en', name: 'English (United States)'},
              {id: 'fr', name: 'French'},
              {id: 'de', name: 'German'},
              {id: 'ja', name: 'Japanese'}
            ]}
          />
          <FieldSelect
            label="Time zone"
            value={timezone}
            onChange={v => {
              setTimezone(v);
              setSaved(false);
            }}
            items={[
              {id: 'dubai', name: 'Dubai · UTC+04:00'},
              {id: 'london', name: 'London'},
              {id: 'new-york', name: 'New York'},
              {id: 'tokyo', name: 'Tokyo · UTC+09:00'}
            ]}
          />
          <FieldSelect
            label="Start of week"
            value={week}
            onChange={v => {
              setWeek(v);
              setSaved(false);
            }}
            items={[
              {id: 'monday', name: 'Monday'},
              {id: 'sunday', name: 'Sunday'}
            ]}
          />
        </div>
        <div className="surface-footer">
          <span className="muted">Applies to this workspace.</span>
          <A.Button className="primary-button" onPress={() => setSaved(true)}>
            Save preferences
          </A.Button>
        </div>
      </div>
      <Feedback>{saved ? 'Preferences saved.' : 'Choose your preferred defaults.'}</Feedback>
    </>
  );
}

function TaskAssignment() {
  const [selected, setSelected] = useState('ava');
  const person = people.find(p => p.id === selected);
  return (
    <>
      <Intro eyebrow="Project / Website refresh" title="Find the right teammate">
        Search by name and assign the next piece of work without leaving your task.
      </Intro>
      <div className="assignment-layout">
        <div className="surface task-preview">
          <span className="badge violet">Design</span>
          <h3>Refresh the onboarding flow</h3>
          <p className="muted">
            Explore a simpler welcome experience and share the first prototype with the team.
          </p>
          <div className="task-meta">
            <span>Due October 9</span>
            <span className="badge amber">In progress</span>
          </div>
          <div className="assigned-person">
            {person && (
              <>
                <Avatar person={person} />
                <div>
                  <small className="muted">Assigned to</small>
                  <strong>{person.name}</strong>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="surface assignment-control">
          <A.ComboBox
            defaultItems={people}
            selectedKey={selected}
            onSelectionChange={setSelected}
            defaultFilter={(text, input) => text.toLowerCase().includes(input.toLowerCase())}>
            <A.Label>Assign teammate</A.Label>
            <A.Input placeholder="Search team members…" />
            <A.Button aria-label="Browse teammates">Browse</A.Button>
            <A.Text slot="description">Type a name, then use the arrow keys to choose.</A.Text>
            <A.Popover className="react-aria-Popover showcase-overlay">
              <A.ListBox>
                {item => (
                  <A.ListBoxItem
                    id={item.id}
                    textValue={item.name}
                    className="react-aria-ListBoxItem person-option">
                    <Avatar person={item} />
                    <div className="row-copy">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </A.ListBoxItem>
                )}
              </A.ListBox>
            </A.Popover>
          </A.ComboBox>
          <Feedback>{person ? `${person.name} owns this task.` : 'Choose an assignee.'}</Feedback>
        </div>
      </div>
    </>
  );
}

const initialTasks = [
  {
    id: 'design',
    title: 'Design the welcome screen',
    team: 'Design',
    detail: 'Ava Thompson · Oct 5',
    tone: 'violet'
  },
  {
    id: 'build',
    title: 'Build the account flow',
    team: 'Engineering',
    detail: 'Leo Chen · Oct 7',
    tone: 'blue'
  },
  {
    id: 'review',
    title: 'Review the first prototype',
    team: 'Product',
    detail: 'Maya Patel · Oct 9',
    tone: 'rose'
  },
  {
    id: 'launch',
    title: 'Prepare launch notes',
    team: 'Product',
    detail: 'Noah Williams · Oct 12',
    tone: 'green'
  }
];
function Roadmap() {
  const list = A.useListData({initialItems: initialTasks});
  const [archived, setArchived] = useState([]);
  const {dragAndDropHooks} = A.useDragAndDrop({
    getItems: keys => [...keys].map(key => ({'text/plain': String(key)})),
    onReorder: e =>
      e.target.dropPosition === 'before'
        ? list.moveBefore(e.target.key, e.keys)
        : list.moveAfter(e.target.key, e.keys),
    renderDropIndicator: target => <A.DropIndicator target={target} />
  });
  return (
    <>
      <Intro eyebrow="Project planning" title="What comes next?">
        Arrange tasks by priority. Drag a handle, or press Enter on a handle and use the arrow keys
        to choose a new position.
      </Intro>
      <div className="surface roadmap-surface">
        <div className="surface-heading">
          <h3>Upcoming work</h3>
          <span className="badge">{list.items.length} tasks</span>
        </div>
        <A.GridList
          aria-label="Project priority"
          items={list.items}
          dragAndDropHooks={dragAndDropHooks}
          selectionMode="multiple"
          className="react-aria-GridList roadmap-list">
          {task => (
            <A.GridListItem id={task.id} textValue={task.title}>
              <A.Button slot="drag" aria-label={`Move ${task.title}`}>
                ⠿
              </A.Button>
              <A.Checkbox slot="selection" />
              <div className="row-copy">
                <strong>{task.title}</strong>
                <span>{task.detail}</span>
              </div>
              <span className={`badge ${task.tone}`}>{task.team}</span>
            </A.GridListItem>
          )}
        </A.GridList>
      </div>
      <A.DropZone
        aria-label="Archive tasks"
        className="react-aria-DropZone archive-zone"
        onDrop={async e => {
          const keys = await Promise.all(
            e.items.filter(A.isTextDropItem).map(item => item.getText('text/plain'))
          );
          const tasks = keys.map(key => list.getItem(key)).filter(Boolean);
          setArchived([...archived, ...tasks]);
          list.remove(...keys);
        }}>
        <span className="archive-icon" aria-hidden="true">
          ↓
        </span>
        <A.Text slot="label">Drop tasks here to archive</A.Text>
        <p>Keep finished work out of your upcoming list.</p>
      </A.DropZone>
      <Feedback>
        {archived.length
          ? `${archived.length} task${archived.length === 1 ? '' : 's'} archived.`
          : `${list.items[0]?.title || 'No tasks'} is first in the queue.`}
      </Feedback>
    </>
  );
}

function Scheduler() {
  const [date, setDate] = useState(new CalendarDate(2026, 10, 5));
  const [time, setTime] = useState(new Time(10, 0));
  const [duration, setDuration] = useState('30');
  const [reminder, setReminder] = useState(true);
  const [scheduled, setScheduled] = useState(false);
  return (
    <>
      <Intro eyebrow="Team calendar" title="Make time to connect">
        Plan a design review with a date, time and duration that work for your team.
      </Intro>
      <div className="scheduler-layout">
        <div className="surface settings-surface">
          <div className="surface-heading">
            <h3>Meeting details</h3>
            <span className="badge violet">Design review</span>
          </div>
          <A.DatePicker
            value={date}
            onChange={value => {
              setDate(value);
              setScheduled(false);
            }}>
            <A.Label>Meeting date</A.Label>
            <A.Group>
              <A.DateInput>{segment => <A.DateSegment segment={segment} />}</A.DateInput>
              <A.Button>Choose date</A.Button>
            </A.Group>
            <A.Popover className="react-aria-Popover showcase-overlay">
              <A.Dialog>
                <A.Calendar>
                  <CalendarParts />
                </A.Calendar>
              </A.Dialog>
            </A.Popover>
          </A.DatePicker>
          <div className="settings-grid">
            <A.TimeField
              value={time}
              onChange={value => {
                setTime(value);
                setScheduled(false);
              }}>
              <A.Label>Start time</A.Label>
              <A.DateInput>{segment => <A.DateSegment segment={segment} />}</A.DateInput>
            </A.TimeField>
            <FieldSelect
              label="Duration"
              value={duration}
              onChange={value => {
                setDuration(value);
                setScheduled(false);
              }}
              items={[
                {id: '15', name: '15 minutes'},
                {id: '30', name: '30 minutes'},
                {id: '60', name: '1 hour'}
              ]}
            />
          </div>
          <A.Checkbox
            isSelected={reminder}
            onChange={value => {
              setReminder(value);
              setScheduled(false);
            }}>
            Remind me 10 minutes before
          </A.Checkbox>
          <div className="form-actions">
            <A.Button className="primary-button" onPress={() => setScheduled(true)}>
              Schedule review
            </A.Button>
          </div>
        </div>
        <div className="meeting-summary">
          <span className="eyebrow">Your meeting</span>
          <h3>Design review</h3>
          <div className="date-tile">
            <strong>{date?.day}</strong>
            <span>
              {date?.toDate('UTC').toLocaleDateString('en-US', {month: 'long', timeZone: 'UTC'})}
            </span>
          </div>
          <p>
            {date?.toString()} at {time?.toString().slice(0, 5)}
          </p>
          <span className="badge">{duration} minutes</span>
          <div className="avatar-stack">
            {people.slice(0, 3).map(p => (
              <Avatar key={p.id} person={p} />
            ))}
          </div>
          <p className="muted">3 teammates · Dubai time</p>
        </div>
      </div>
      <Feedback>
        {scheduled
          ? `Review scheduled for ${date} at ${time}. ${reminder ? 'Reminder enabled.' : 'No reminder.'}`
          : 'Pick a date to plan your next review.'}
      </Feedback>
    </>
  );
}
function TripPlanner() {
  const [range, setRange] = useState({
    start: new CalendarDate(2026, 10, 12),
    end: new CalendarDate(2026, 10, 16)
  });
  const [guests, setGuests] = useState(2);
  const [flexible, setFlexible] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <>
      <Intro eyebrow="A little time away" title="Plan your next escape">
        Choose a stay, bring your favorite people and leave room for a change of plans.
      </Intro>
      <div className="surface travel-surface">
        <div className="travel-banner">
          <span className="eyebrow">Quiet mornings. New places.</span>
          <h3>Somewhere worth slowing down.</h3>
        </div>
        <div className="travel-fields">
          <A.DateRangePicker
            value={range}
            onChange={value => {
              setRange(value);
              setSaved(false);
            }}>
            <A.Label>Your stay</A.Label>
            <A.Group>
              <A.DateInput slot="start">{s => <A.DateSegment segment={s} />}</A.DateInput>
              <span>–</span>
              <A.DateInput slot="end">{s => <A.DateSegment segment={s} />}</A.DateInput>
              <A.Button>Choose dates</A.Button>
            </A.Group>
            <A.Popover className="react-aria-Popover showcase-overlay">
              <A.Dialog>
                <A.RangeCalendar>
                  <CalendarParts />
                </A.RangeCalendar>
              </A.Dialog>
            </A.Popover>
          </A.DateRangePicker>
          <A.NumberField
            value={guests}
            onChange={value => {
              setGuests(value);
              setSaved(false);
            }}
            minValue={1}
            maxValue={8}>
            <A.Label>Guests</A.Label>
            <A.Group>
              <A.Button slot="decrement">−</A.Button>
              <A.Input />
              <A.Button slot="increment">+</A.Button>
            </A.Group>
          </A.NumberField>
          <A.Switch
            isSelected={flexible}
            onChange={value => {
              setFlexible(value);
              setSaved(false);
            }}>
            My dates are flexible
          </A.Switch>
          <div className="surface-footer">
            <span className="muted">
              {range?.start?.toString()} → {range?.end?.toString()} · {guests} guests
            </span>
            <A.Button className="primary-button" onPress={() => setSaved(true)}>
              Save trip
            </A.Button>
          </div>
        </div>
      </div>
      <Feedback>
        {saved
          ? `Trip saved for ${guests} guests. ${flexible ? 'Flexible dates.' : 'Exact dates.'}`
          : 'Your next adventure starts with a date.'}
      </Feedback>
    </>
  );
}

function Notifications() {
  const [channels, setChannels] = useState(['mentions', 'reviews']);
  const [digest, setDigest] = useState(true);
  const [quiet, setQuiet] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <>
      <Intro eyebrow="Personal settings" title="Stay in the loop">
        Choose what reaches you, and make a little space for focused work.
      </Intro>
      <div className="surface settings-surface">
        <A.CheckboxGroup
          value={channels}
          onChange={value => {
            setChannels(value);
            setSaved(false);
          }}>
          <A.Label>Email notifications</A.Label>
          {[
            ['mentions', 'Mentions & replies', 'When someone needs your input.'],
            ['reviews', 'Review requests', 'When a teammate shares work for feedback.'],
            ['updates', 'Project updates', 'Progress, milestones and launch notes.']
          ].map(([value, label, description]) => (
            <A.Checkbox key={value} value={value}>
              <div className="row-copy">
                <strong>{label}</strong>
                <span>{description}</span>
              </div>
            </A.Checkbox>
          ))}
        </A.CheckboxGroup>
        <div className="settings-divider" />
        <A.Switch
          isSelected={digest}
          onChange={value => {
            setDigest(value);
            setSaved(false);
          }}>
          <div className="row-copy">
            <strong>Weekly digest</strong>
            <span>A calm summary every Monday morning.</span>
          </div>
        </A.Switch>
        <A.Switch
          isSelected={quiet}
          onChange={value => {
            setQuiet(value);
            setSaved(false);
          }}>
          <div className="row-copy">
            <strong>Quiet hours</strong>
            <span>Pause notifications outside working hours.</span>
          </div>
        </A.Switch>
        <div className="surface-footer">
          <span className="muted">You can change these anytime.</span>
          <A.Button className="primary-button" onPress={() => setSaved(true)}>
            Save notifications
          </A.Button>
        </div>
      </div>
      <Feedback>
        {saved
          ? `Saved ${channels.length} email categories. Digest ${digest ? 'on' : 'off'}; quiet hours ${quiet ? 'on' : 'off'}.`
          : 'Find the balance that works for you.'}
      </Feedback>
    </>
  );
}

function PlanPicker() {
  const [plan, setPlan] = useState('team');
  const [annual, setAnnual] = useState(true);
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 9,
      detail: 'A little room to get started.',
      features: ['3 projects', 'Basic sharing']
    },
    {
      id: 'team',
      name: 'Team',
      price: 19,
      detail: 'For teams building together.',
      features: ['Unlimited projects', 'Team collaboration']
    },
    {
      id: 'business',
      name: 'Business',
      price: 39,
      detail: 'More control as you grow.',
      features: ['Advanced permissions', 'Priority support']
    }
  ];
  return (
    <>
      <Intro eyebrow="A plan for every stage" title="Room to grow">
        Compare plans and choose the workspace that fits your team.
      </Intro>
      <A.Switch isSelected={annual} onChange={setAnnual}>
        Annual billing <span className="badge green">Save 20%</span>
      </A.Switch>
      <A.RadioGroup
        aria-label="Workspace plan"
        value={plan}
        onChange={setPlan}
        className="plan-grid">
        {plans.map(item => (
          <A.Radio key={item.id} value={item.id} className="plan-card">
            <span className="radio-indicator" aria-hidden="true" />
            <span className="plan-name">{item.name}</span>
            {item.id === 'team' && <span className="badge violet">Popular</span>}
            <span className="plan-price">
              ${annual ? item.price : Math.round(item.price / 0.8)}
              <small>/ person / month</small>
            </span>
            <span className="muted">{item.detail}</span>
            <span className="plan-features">
              {item.features.map(feature => (
                <span key={feature}>
                  <span aria-hidden="true">✓ </span>
                  {feature}
                </span>
              ))}
            </span>
          </A.Radio>
        ))}
      </A.RadioGroup>
      <Feedback>
        {plans.find(p => p.id === plan).name} plan selected · billed{' '}
        {annual ? 'annually' : 'monthly'}.
      </Feedback>
    </>
  );
}

function WritingStudio() {
  const [formats, setFormats] = useState(new Set(['bold']));
  const [align, setAlign] = useState(new Set(['left']));
  const [text, setText] = useState('Good ideas start with a little space to think.');
  return (
    <>
      <Intro eyebrow="A small writing studio" title="Find your words">
        Shape a short note with formatting controls and a live preview.
      </Intro>
      <div className="surface editor-surface">
        <div className="editor-toolbar">
          <A.ToggleButtonGroup
            aria-label="Text formatting"
            selectionMode="multiple"
            selectedKeys={formats}
            onSelectionChange={setFormats}>
            <A.ToggleButton id="bold" aria-label="Bold">
              <strong>B</strong>
            </A.ToggleButton>
            <A.ToggleButton id="italic" aria-label="Italic">
              <em>I</em>
            </A.ToggleButton>
            <A.ToggleButton id="underline" aria-label="Underline">
              <u>U</u>
            </A.ToggleButton>
          </A.ToggleButtonGroup>
          <span className="toolbar-divider" />
          <A.ToggleButtonGroup
            aria-label="Text alignment"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={align}
            onSelectionChange={setAlign}>
            <A.ToggleButton id="left">Left</A.ToggleButton>
            <A.ToggleButton id="center">Center</A.ToggleButton>
            <A.ToggleButton id="right">Right</A.ToggleButton>
          </A.ToggleButtonGroup>
        </div>
        <A.TextField value={text} onChange={setText}>
          <A.Label>Your note</A.Label>
          <A.TextArea />
        </A.TextField>
        <div
          className="writing-preview"
          style={{
            fontWeight: formats.has('bold') ? 700 : 400,
            fontStyle: formats.has('italic') ? 'italic' : 'normal',
            textDecoration: formats.has('underline') ? 'underline' : 'none',
            textAlign: [...align][0]
          }}>
          {text || 'Your words will appear here.'}
        </div>
        <div className="editor-footer">
          <span>{text.length} characters</span>
          <span>Preview updates as you type</span>
        </div>
      </div>
    </>
  );
}

function TeamDirectory() {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState({column: 'name', direction: 'ascending'});
  const [selected, setSelected] = useState(new Set());
  const rows = useMemo(
    () =>
      people
        .filter(p => `${p.name} ${p.role}`.toLowerCase().includes(filter.toLowerCase()))
        .sort(
          (a, b) =>
            a[sort.column].localeCompare(b[sort.column]) * (sort.direction === 'ascending' ? 1 : -1)
        ),
    [filter, sort]
  );
  const person = people.find(p => selected.has(p.id));
  return (
    <>
      <Intro eyebrow="People in your workspace" title="The team behind the work">
        Find a teammate, sort the directory or select a row to see their profile.
      </Intro>
      <div className="surface directory-surface">
        <div className="directory-toolbar">
          <A.SearchField value={filter} onChange={setFilter}>
            <A.Label>Search members</A.Label>
            <A.Input placeholder="Name or role…" />
            <A.Button>Clear</A.Button>
          </A.SearchField>
          <span className="badge">
            {rows.length} {rows.length === 1 ? 'member' : 'members'}
          </span>
        </div>
        <A.Table
          aria-label="Team directory"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          sortDescriptor={sort}
          onSortChange={setSort}>
          <A.TableHeader>
            <A.Column id="name" isRowHeader allowsSorting>
              Name
            </A.Column>
            <A.Column id="role" allowsSorting>
              Role
            </A.Column>
            <A.Column id="status">Status</A.Column>
          </A.TableHeader>
          <A.TableBody items={rows} renderEmptyState={() => 'No teammates match your search.'}>
            {p => (
              <A.Row id={p.id} textValue={p.name}>
                <A.Cell>
                  <div className="member-cell">
                    <Avatar person={p} />
                    <div className="row-copy">
                      <strong>{p.name}</strong>
                      <span>{p.email}</span>
                    </div>
                  </div>
                </A.Cell>
                <A.Cell>{p.role}</A.Cell>
                <A.Cell>
                  <span className="badge green">Active</span>
                </A.Cell>
              </A.Row>
            )}
          </A.TableBody>
        </A.Table>
      </div>
      {person && (
        <div className="profile-preview">
          <Avatar person={person} />
          <div>
            <strong>{person.name}</strong>
            <p>
              {person.role} · {person.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function WorkspaceOverview() {
  const [annual, setAnnual] = useState(false);
  const [keys, setKeys] = useState(new Set(['website']));
  const projects = [
    {
      id: 'website',
      name: 'Website refresh',
      detail: 'Design · 8 tasks',
      percent: 72,
      tone: 'violet'
    },
    {
      id: 'mobile',
      name: 'Mobile onboarding',
      detail: 'Product · 12 tasks',
      percent: 45,
      tone: 'blue'
    },
    {id: 'launch', name: 'Autumn launch', detail: 'Marketing · 6 tasks', percent: 90, tone: 'green'}
  ];
  return (
    <>
      <Intro eyebrow="Good morning, Ava" title="A little overview">
        Your projects, your people and the progress you are making together.
      </Intro>
      <A.Tabs>
        <A.TabList aria-label="Workspace sections">
          <A.Tab id="projects">Projects</A.Tab>
          <A.Tab id="activity">Activity</A.Tab>
          <A.Tab id="billing">Billing</A.Tab>
        </A.TabList>
        <A.TabPanel id="projects">
          <div className="metrics-grid">
            <div>
              <span>Active projects</span>
              <strong>3</strong>
              <small>Across 2 teams</small>
            </div>
            <div>
              <span>Tasks completed</span>
              <strong>24</strong>
              <small className="positive">↑ 8 this week</small>
            </div>
            <div>
              <span>Team members</span>
              <strong>4</strong>
              <small>Working together</small>
            </div>
          </div>
          <A.ListBox
            aria-label="Projects"
            items={projects}
            selectionMode="single"
            selectedKeys={keys}
            onSelectionChange={setKeys}
            className="project-list">
            {p => (
              <A.ListBoxItem id={p.id} textValue={p.name} className="project-card">
                <span className={`project-symbol ${p.tone}`} aria-hidden="true">
                  ◈
                </span>
                <strong>{p.name}</strong>
                <span className="muted">{p.detail}</span>
                <div className="meter-track">
                  <div className="meter-fill" style={{width: `${p.percent}%`}} />
                </div>
                <span className="project-progress">{p.percent}% complete</span>
              </A.ListBoxItem>
            )}
          </A.ListBox>
        </A.TabPanel>
        <A.TabPanel id="activity">
          <div className="surface activity-list">
            {[
              ['ava', 'shared a new prototype', '12 minutes ago'],
              ['leo', 'completed the account flow', '48 minutes ago'],
              ['maya', 'added feedback to the brief', '2 hours ago']
            ].map(([id, action, time]) => {
              const p = people.find(p => p.id === id);
              return (
                <div className="member-row" key={id}>
                  <Avatar person={p} />
                  <div className="row-copy">
                    <strong>
                      {p.name} {action}
                    </strong>
                    <span>{time}</span>
                  </div>
                  <span className="activity-dot" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </A.TabPanel>
        <A.TabPanel id="billing">
          <div className="surface billing-card">
            <span className="badge violet">Team plan</span>
            <h3>Everything your team needs.</h3>
            <A.Switch isSelected={annual} onChange={setAnnual}>
              Bill annually
            </A.Switch>
            <div className="plan-price">
              ${annual ? 19 : 24}
              <small>/ person / month</small>
            </div>
            <p className="muted">
              4 seats · ${annual ? 76 : 96} per month{annual ? ' equivalent, billed annually' : ''}
            </p>
            <span className="badge green">Your plan is active</span>
          </div>
        </A.TabPanel>
      </A.Tabs>
    </>
  );
}

function ColorStudio() {
  const [color, setColor] = useState(A.parseColor('hsb(220, 75%, 90%)'));
  const updateColor = value => value && setColor(value.toFormat('hsb'));
  const palette = ['#245edb', '#8b5cf6', '#e65a87', '#16a085', '#f59e0b'];
  return (
    <>
      <Intro eyebrow="A little color goes a long way" title="Build your next palette">
        Fine-tune an accent color and see it in a small product preview.
      </Intro>
      <div className="color-studio">
        <div className="surface color-controls">
          <A.ColorArea
            value={color}
            onChange={updateColor}
            xChannel="saturation"
            yChannel="brightness">
            <A.ColorThumb />
          </A.ColorArea>
          <A.ColorSlider channel="hue" value={color} onChange={updateColor}>
            <A.Label>Hue</A.Label>
            <A.SliderOutput />
            <A.SliderTrack>
              <A.ColorThumb />
            </A.SliderTrack>
          </A.ColorSlider>
          <A.ColorField value={color} onChange={updateColor}>
            <A.Label>Accent color</A.Label>
            <A.Input />
          </A.ColorField>
          <A.ColorSwatchPicker aria-label="Suggested accents" value={color} onChange={updateColor}>
            {palette.map(hex => (
              <A.ColorSwatchPickerItem key={hex} color={hex}>
                <A.ColorSwatch />
              </A.ColorSwatchPickerItem>
            ))}
          </A.ColorSwatchPicker>
        </div>
        <div className="color-preview" style={{'--preview-accent': color.toString('css')}}>
          <span className="eyebrow">Live preview</span>
          <div className="preview-card">
            <span className="preview-icon" aria-hidden="true">
              ✦
            </span>
            <h3>Make something good.</h3>
            <p>A small idea can become your next favorite project.</p>
            <span className="preview-tag">Your new accent</span>
            <div className="preview-button">Accent preview</div>
          </div>
        </div>
      </div>
      <Feedback>{color.toString('hex')} · your current accent color.</Feedback>
    </>
  );
}

export const showcases = {
  menu: DocumentWorkspace,
  popover: InviteTeam,
  select: WorkspacePreferences,
  combobox: TaskAssignment,
  dnd: Roadmap,
  datepicker: Scheduler,
  daterange: TripPlanner,
  checkbox: Notifications,
  switch: Notifications,
  radio: PlanPicker,
  toggle: WritingStudio,
  toolbar: WritingStudio,
  table: TeamDirectory,
  tabs: WorkspaceOverview,
  listbox: WorkspaceOverview,
  colorarea: ColorStudio,
  colorslider: ColorStudio,
  colorfield: ColorStudio,
  colorswatch: ColorStudio
};
