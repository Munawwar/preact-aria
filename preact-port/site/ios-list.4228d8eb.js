// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"iobxA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "createScopedAnimate", ()=>createScopedAnimate);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _sequenceMjs = require("./sequence.mjs");
var _subjectMjs = require("./subject.mjs");
function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(options = {}) {
    const { scope, reduceMotion, skipAnimations } = options;
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        let animationOnComplete;
        const inherited = {};
        if (reduceMotion !== undefined) inherited.reduceMotion = reduceMotion;
        if (skipAnimations !== undefined) inherited.skipAnimations = skipAnimations;
        if (isSequence(subjectOrSequence)) {
            const { onComplete, ...sequenceOptions } = optionsOrKeyframes || {};
            if (typeof onComplete === "function") animationOnComplete = onComplete;
            animations = (0, _sequenceMjs.animateSequence)(subjectOrSequence, {
                ...inherited,
                ...sequenceOptions
            }, scope);
        } else {
            // Extract top-level onComplete so it doesn't get applied per-value
            const { onComplete, ...rest } = options || {};
            if (typeof onComplete === "function") animationOnComplete = onComplete;
            animations = (0, _subjectMjs.animateSubject)(subjectOrSequence, optionsOrKeyframes, {
                ...inherited,
                ...rest
            }, scope);
        }
        const animation = new (0, _motionDom.GroupAnimationWithThen)(animations);
        if (animationOnComplete) animation.finished.then(animationOnComplete);
        if (scope) {
            scope.animations.push(animation);
            animation.finished.then(()=>{
                (0, _motionUtils.removeItem)(scope.animations, animation);
            });
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();

},{"motion-dom":"7VfSN","motion-utils":"9bOuG","./sequence.mjs":"ktnkE","./subject.mjs":"bwiBb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7VfSN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupAnimationWithThen", ()=>GroupAnimationWithThen);
var _groupAnimationMjs = require("./GroupAnimation.mjs");
class GroupAnimationWithThen extends (0, _groupAnimationMjs.GroupAnimation) {
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(()=>{});
    }
}

},{"./GroupAnimation.mjs":"3phO0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3phO0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupAnimation", ()=>GroupAnimation);
class GroupAnimation {
    constructor(animations){
        // Bound to accomadate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        return Promise.all(this.animations.map((animation)=>animation.finished));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++)this.animations[i][propName] = newValue;
    }
    attachTimeline(timeline) {
        const subscriptions = this.animations.map((animation)=>animation.attachTimeline(timeline));
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get state() {
        return this.getAll("state");
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        return getMax(this.animations, "duration");
    }
    get iterationDuration() {
        return getMax(this.animations, "iterationDuration");
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
function getMax(animations, propName) {
    let max = 0;
    for(let i = 0; i < animations.length; i++){
        const value = animations[i][propName];
        if (value !== null && value > max) max = value;
    }
    return max;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9bOuG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "moveItem", ()=>moveItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ktnkE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSequence", ()=>animateSequence);
var _motionDom = require("motion-dom");
var _createMjs = require("../sequence/create.mjs");
var _subjectMjs = require("./subject.mjs");
function animateSequence(sequence, options, scope) {
    const animations = [];
    /**
     * Pre-process: replace function segments with MotionValue segments,
     * subscribe callbacks immediately
     */ const processedSequence = sequence.map((segment)=>{
        if (Array.isArray(segment) && typeof segment[0] === "function") {
            const callback = segment[0];
            const mv = (0, _motionDom.motionValue)(0);
            mv.on("change", callback);
            if (segment.length === 1) return [
                mv,
                [
                    0,
                    1
                ]
            ];
            else if (segment.length === 2) return [
                mv,
                [
                    0,
                    1
                ],
                segment[1]
            ];
            else return [
                mv,
                segment[1],
                segment[2]
            ];
        }
        return segment;
    });
    const animationDefinitions = (0, _createMjs.createAnimationsFromSequence)(processedSequence, options, scope, {
        spring: (0, _motionDom.spring)
    });
    animationDefinitions.forEach(({ keyframes, transition }, subject)=>{
        animations.push(...(0, _subjectMjs.animateSubject)(subject, keyframes, transition));
    });
    return animations;
}

},{"motion-dom":[["motionValue","c1jKT"],["spring","a9nd4"]],"../sequence/create.mjs":"f4ZRA","./subject.mjs":"bwiBb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c1jKT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
parcelHelpers.export(exports, "collectMotionValues", ()=>collectMotionValues);
parcelHelpers.export(exports, "motionValue", ()=>motionValue);
var _motionUtils = require("motion-utils");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */ const MAX_VELOCITY_DELTA = 30;
const isFloat = (value)=>{
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */ class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */ constructor(init, options = {}){
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */ this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        this.updateAndNotify = (v)=>{
            const currentTime = (0, _syncTimeMjs.time).now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */ if (this.updatedAt !== currentTime) this.setPrevFrameValue();
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev) {
                this.events.change?.notify(this.current);
                if (this.dependents) for (const dependent of this.dependents)dependent.dirty();
            }
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = (0, _syncTimeMjs.time).now();
        if (this.canTrackVelocity === null && current !== undefined) this.canTrackVelocity = isFloat(this.current);
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */ onChange(subscription) {
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _motionUtils.SubscriptionManager)();
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") return ()=>{
            unsubscribe();
            /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */ (0, _frameMjs.frame).read(()=>{
                if (!this.events.change.getSize()) this.stop();
            });
        };
        return unsubscribe;
    }
    clearListeners() {
        for(const eventManagers in this.events)this.events[eventManagers].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */ attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */ set(v) {
        if (!this.passiveEffect) this.updateAndNotify(v);
        else this.passiveEffect(v, this.updateAndNotify);
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */ jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
    dirty() {
        this.events.change?.notify(this.current);
    }
    addDependent(dependent) {
        if (!this.dependents) this.dependents = new Set();
        this.dependents.add(dependent);
    }
    removeDependent(dependent) {
        if (this.dependents) this.dependents.delete(dependent);
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */ get() {
        if (collectMotionValues.current) collectMotionValues.current.push(this);
        return this.current;
    }
    /**
     * @public
     */ getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */ getVelocity() {
        const currentTime = (0, _syncTimeMjs.time).now();
        if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0, _motionUtils.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */ start(startAnimation) {
        this.stop();
        return new Promise((resolve)=>{
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) this.events.animationStart.notify();
        }).then(()=>{
            if (this.events.animationComplete) this.events.animationComplete.notify();
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */ stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) this.events.animationCancel.notify();
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */ isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */ destroy() {
        this.dependents?.clear();
        this.events.destroy?.notify();
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}

},{"motion-utils":[["SubscriptionManager","9fEBk"],["velocityPerSecond","j8PY0"]],"../frameloop/sync-time.mjs":"c5O7T","../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9fEBk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriptionManager", ()=>SubscriptionManager);
var _arrayMjs = require("./array.mjs");
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, _arrayMjs.addUniqueItem)(this.subscriptions, handler);
        return ()=>(0, _arrayMjs.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        else for(let i = 0; i < numSubscriptions; i++){
            /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
            handler && handler(a, b, c);
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

},{"./array.mjs":"9bOuG","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j8PY0":[function(require,module,exports,__globalThis) {
/*
  Convert velocity into velocity per second
*/ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
const velocityPerSecond = (velocity, frameDuration)=>frameDuration ? velocity * (1000 / frameDuration) : 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c5O7T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
var _motionUtils = require("motion-utils");
var _frameMjs = require("./frame.mjs");
let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */ const time = {
    now: ()=>{
        if (now === undefined) time.set((0, _frameMjs.frameData).isProcessing || (0, _motionUtils.MotionGlobalConfig).useManualTiming ? (0, _frameMjs.frameData).timestamp : performance.now());
        return now;
    },
    set: (newTime)=>{
        now = newTime;
        queueMicrotask(clearTime);
    }
};

},{"motion-utils":"82hsq","./frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"82hsq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionGlobalConfig", ()=>MotionGlobalConfig);
const MotionGlobalConfig = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3rwlg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelFrame", ()=>cancelFrame);
parcelHelpers.export(exports, "frame", ()=>frame);
parcelHelpers.export(exports, "frameData", ()=>frameData);
parcelHelpers.export(exports, "frameSteps", ()=>frameSteps);
var _motionUtils = require("motion-utils");
var _batcherMjs = require("./batcher.mjs");
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ (0, _batcherMjs.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : (0, _motionUtils.noop), true);

},{"motion-utils":"7MDWX","./batcher.mjs":"2AAcH","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7MDWX":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
const noop = (any)=>any;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2AAcH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderBatcher", ()=>createRenderBatcher);
var _motionUtils = require("motion-utils");
var _orderMjs = require("./order.mjs");
var _renderStepMjs = require("./render-step.mjs");
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    const flagRunNextFrame = ()=>runNextFrame = true;
    const steps = (0, _orderMjs.stepsOrder).reduce((acc, key)=>{
        acc[key] = (0, _renderStepMjs.createRenderStep)(flagRunNextFrame);
        return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
    const processBatch = ()=>{
        const useManualTiming = (0, _motionUtils.MotionGlobalConfig).useManualTiming;
        const timestamp = useManualTiming ? state.timestamp : performance.now();
        runNextFrame = false;
        if (!useManualTiming) state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        setup.process(state);
        read.process(state);
        resolveKeyframes.process(state);
        preUpdate.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = ()=>{
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) scheduleNextBatch(processBatch);
    };
    const schedule = (0, _orderMjs.stepsOrder).reduce((acc, key)=>{
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false)=>{
            if (!runNextFrame) wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process)=>{
        for(let i = 0; i < (0, _orderMjs.stepsOrder).length; i++)steps[(0, _orderMjs.stepsOrder)[i]].cancel(process);
    };
    return {
        schedule,
        cancel,
        state,
        steps
    };
}

},{"motion-utils":"82hsq","./order.mjs":"EBPja","./render-step.mjs":"9eTxj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"EBPja":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stepsOrder", ()=>stepsOrder);
const stepsOrder = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9eTxj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderStep", ()=>createRenderStep);
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */ let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */ let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */ const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */ schedule: (callback, keepAlive = false, immediate = false)=>{
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */ cancel: (callback)=>{
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */ process: (frameData)=>{
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */ if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            // Swap this frame and the next to avoid GC
            const prevFrame = thisFrame;
            thisFrame = nextFrame;
            nextFrame = prevFrame;
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        }
    };
    return step;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a9nd4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _motionUtils = require("motion-utils");
var _linearMjs = require("../waapi/utils/linear.mjs");
var _calcDurationMjs = require("./utils/calc-duration.mjs");
var _createGeneratorEasingMjs = require("./utils/create-generator-easing.mjs");
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 0.005,
        default: 0.5
    },
    // Limits
    minDuration: 0.01,
    maxDuration: 10.0,
    minDamping: 0.05,
    maxDamping: 1
};
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for(let i = 1; i < rootIterations; i++)result = result - envelope(result) / derivative(result);
    return result;
}
/**
 * This is ported from the Framer implementation of duration-based spring resolution.
 */ const safeMin = 0.001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
    let envelope;
    let derivative;
    (0, _motionUtils.warning)(duration <= (0, _motionUtils.secondsToMilliseconds)(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */ dampingRatio = (0, _motionUtils.clamp)(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = (0, _motionUtils.clamp)(springDefaults.minDuration, springDefaults.maxDuration, (0, _motionUtils.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */ envelope = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        /**
         * Critically-damped spring
         */ envelope = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0, _motionUtils.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) return {
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        duration
    };
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration
        };
    }
}
const durationKeys = [
    "duration",
    "bounce"
];
const physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some((key)=>options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: springDefaults.velocity,
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        mass: springDefaults.mass,
        isResolvedFromDuration: false,
        ...options
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        // Time-defined springs should ignore inherited velocity.
        // Velocity from interrupted animations can cause findSpring()
        // to compute wildly different spring parameters, leading to
        // massive oscillation on small-range animations.
        springOptions.velocity = 0;
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = 2 * Math.PI / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 * (0, _motionUtils.clamp)(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: springDefaults.mass,
                stiffness,
                damping
            };
        } else {
            const derived = findSpring({
                ...options,
                velocity: 0
            });
            springOptions = {
                ...springOptions,
                ...derived,
                mass: springDefaults.mass
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
        visualDuration: optionsOrVisualDuration,
        keyframes: [
            0,
            1
        ],
        bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: origin
    };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
        ...options,
        velocity: -(0, _motionUtils.millisecondsToSeconds)(options.velocity || 0)
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0, _motionUtils.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */ const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    let resolveSpring;
    let resolveVelocity;
    // Underdamped coefficients, hoisted for use in the inlined next() hot path
    let angularFreq;
    let A;
    let sinCoeff;
    let cosCoeff;
    if (dampingRatio < 1) {
        angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
        // Underdamped spring
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return target - envelope * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
        // Analytical derivative of underdamped spring (px/ms)
        sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
        cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
        resolveVelocity = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return envelope * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
        };
    } else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t)=>target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
        // Analytical derivative of critically damped spring (px/ms)
        const C = initialVelocity + undampedAngularFreq * initialDelta;
        resolveVelocity = (t)=>Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
    } else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
        // Analytical derivative of overdamped spring (px/ms)
        const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
        const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
        const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
        resolveVelocity = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        velocity: (t)=>(0, _motionUtils.secondsToMilliseconds)(resolveVelocity(t)),
        next: (t)=>{
            /**
             * For underdamped physics springs we need both position and
             * velocity each tick. Compute shared trig values once to avoid
             * duplicate Math.exp/sin/cos calls on the hot path.
             */ if (!isResolvedFromDuration && dampingRatio < 1) {
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const sin = Math.sin(angularFreq * t);
                const cos = Math.cos(angularFreq * t);
                const current = target - envelope * (A * sin + initialDelta * cos);
                const currentVelocity = (0, _motionUtils.secondsToMilliseconds)(envelope * (sinCoeff * sin + cosCoeff * cos));
                state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
                state.value = state.done ? target : current;
                return state;
            }
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = (0, _motionUtils.secondsToMilliseconds)(resolveVelocity(t));
                state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
            } else state.done = t >= duration;
            state.value = state.done ? target : current;
            return state;
        },
        toString: ()=>{
            const calculatedDuration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
            const easing = (0, _linearMjs.generateLinearEasing)((progress)=>generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        },
        toTransition: ()=>{}
    };
    return generator;
}
spring.applyToOptions = (options)=>{
    const generatorOptions = (0, _createGeneratorEasingMjs.createGeneratorEasing)(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = (0, _motionUtils.secondsToMilliseconds)(generatorOptions.duration);
    options.type = "keyframes";
    return options;
};

},{"motion-utils":[["clamp","2BS9B"],["millisecondsToSeconds","k1haA"],["secondsToMilliseconds","k1haA"],["warning","e5pKF"]],"../waapi/utils/linear.mjs":"baZ17","./utils/calc-duration.mjs":"dMH6d","./utils/create-generator-easing.mjs":"8GRpC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2BS9B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k1haA":[function(require,module,exports,__globalThis) {
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>millisecondsToSeconds);
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>secondsToMilliseconds);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e5pKF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var _formatErrorMessageMjs = require("./format-error-message.mjs");
let warning = ()=>{};
let invariant = ()=>{};
var check, message, errorCode, check1, message1, errorCode1;

},{"./format-error-message.mjs":"7K3dS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7K3dS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatErrorMessage", ()=>formatErrorMessage);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"baZ17":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateLinearEasing", ()=>generateLinearEasing);
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++)points += Math.round(easing(i / (numPoints - 1)) * 10000) / 10000 + ", ";
    return `linear(${points.substring(0, points.length - 2)})`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dMH6d":[function(require,module,exports,__globalThis) {
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorDuration", ()=>calcGeneratorDuration);
parcelHelpers.export(exports, "maxGeneratorDuration", ()=>maxGeneratorDuration);
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8GRpC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createGeneratorEasing", ()=>createGeneratorEasing);
var _motionUtils = require("motion-utils");
var _calcDurationMjs = require("./calc-duration.mjs");
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({
        ...options,
        keyframes: [
            0,
            scale
        ]
    });
    const duration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
    return {
        type: "keyframes",
        ease: (progress)=>{
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, _motionUtils.millisecondsToSeconds)(duration)
    };
}

},{"motion-utils":"k1haA","./calc-duration.mjs":"dMH6d","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f4ZRA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimationsFromSequence", ()=>createAnimationsFromSequence);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _resolveSubjectsMjs = require("../animate/resolve-subjects.mjs");
var _calcRepeatDurationMjs = require("./utils/calc-repeat-duration.mjs");
var _calcTimeMjs = require("./utils/calc-time.mjs");
var _editMjs = require("./utils/edit.mjs");
var _normalizeTimesMjs = require("./utils/normalize-times.mjs");
var _sortMjs = require("./utils/sort.mjs");
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, _calcTimeMjs.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) currentTime = (0, _calcTimeMjs.calcNextTime)(currentTime, transition.at, prevTime, timeLabels);
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, _motionDom.defaultOffset)(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0, _motionDom.isGenerator)(type) ? type : generators?.[type || "keyframes"];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...defaultTransition,
                    ...remainingTransition
                };
                if (duration !== undefined) springTransition.duration = (0, _motionUtils.secondsToMilliseconds)(duration);
                const springEasing = (0, _motionDom.createGeneratorEasing)(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration ?? (duration = defaultDuration);
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) times[1] = 1;
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, _motionDom.fillOffset)(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Segments can't express `repeat: Infinity` or very large
             * counts — they'd leave dead time after the segment or
             * explode the keyframe array. Ignore with a warning.
             */ if (repeat) (0, _motionUtils.warning)(repeat < MAX_REPEAT, `Sequence segments can't repeat ${repeat} times \u{2014} ignoring repeat option. Use a value below ${MAX_REPEAT} or apply repeat at the sequence level instead.`);
            if (repeat && repeat < MAX_REPEAT) {
                /**
                 * Express repeatDelay in units of a single iteration's duration
                 * so it can be added to the per-iteration time offsets below
                 * before they're normalized to 0-1.
                 */ const repeatDelayUnits = duration > 0 ? repeatDelay / duration : 0;
                duration = (0, _calcRepeatDurationMjs.calculateRepeatDuration)(duration, repeat, repeatDelay);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                /**
                 * For reverse/mirror, alternate iterations play the segment
                 * backwards. mirror matches JSAnimation's mirroredGenerator:
                 * reversed keyframes, easings unchanged. reverse matches
                 * JSAnimation's iterationProgress = 1 - p: reversed
                 * keyframes, easing array reversed AND each function easing
                 * mapped through reverseEasing (string easings unchanged —
                 * they're resolved later by the keyframes engine).
                 */ const isFlipping = repeatType === "reverse" || repeatType === "mirror";
                let flippedKeyframes = originalKeyframes;
                let flippedEases = originalEase;
                if (isFlipping) {
                    flippedKeyframes = [
                        ...originalKeyframes
                    ].reverse();
                    if (repeatType === "reverse") flippedEases = [
                        ...originalEase
                    ].reverse().map((e)=>typeof e === "function" ? (0, _motionUtils.reverseEasing)(e) : e);
                }
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    const isFlipped = isFlipping && repeatIndex % 2 === 0;
                    const iterKeyframes = isFlipped ? flippedKeyframes : originalKeyframes;
                    const iterEase = isFlipped ? flippedEases : originalEase;
                    const iterStartOffset = (repeatIndex + 1) * (1 + repeatDelayUnits);
                    /**
                     * If repeatDelay is set, hold the previous iteration's
                     * final value through the delay by inserting a keyframe
                     * at the moment the next iteration begins.
                     */ if (repeatDelayUnits > 0) {
                        valueKeyframesAsList.push(valueKeyframesAsList[valueKeyframesAsList.length - 1]);
                        times.push(iterStartOffset);
                        ease.push("linear");
                    }
                    valueKeyframesAsList.push(...iterKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < iterKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + iterStartOffset);
                        ease.push(keyframeIndex === 0 ? "linear" : (0, _motionUtils.getEasingForSegment)(iterEase, keyframeIndex - 1));
                    }
                }
                (0, _normalizeTimesMjs.normalizeTimes)(times, repeat, repeatDelayUnits);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, _editMjs.addKeyframes)(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, _motionDom.isMotionValue)(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = (0, _resolveSubjectsMjs.resolveSubjects)(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes;
                transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes)resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort((0, _sortMjs.compareByTime));
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, _motionUtils.progress)(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) animationDefinitions.set(element, {
                keyframes: {},
                transition: {}
            });
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            /**
             * Exclude `type` from defaultTransition since springs have been
             * converted to duration-based easing functions in resolveValueSequence.
             * Including `type: "spring"` would cause JSAnimation to error when
             * the merged keyframes array has more than 2 keyframes.
             */ const { type: _type, ...remainingDefaultTransition } = defaultTransition;
            definition.transition[key] = {
                ...remainingDefaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);

},{"motion-dom":[["createGeneratorEasing","8GRpC"],["defaultOffset","2pWfY"],["fillOffset","40qn3"],["isGenerator","1wDLA"],["isMotionValue","75Nnh"]],"motion-utils":[["getEasingForSegment","aOoW7"],["progress","3Q4mc"],["reverseEasing","e2sIK"],["secondsToMilliseconds","k1haA"],["warning","e5pKF"]],"../animate/resolve-subjects.mjs":"lHcaC","./utils/calc-repeat-duration.mjs":"30oo2","./utils/calc-time.mjs":"ayVN5","./utils/edit.mjs":"1bF6R","./utils/normalize-times.mjs":"fkPrD","./utils/sort.mjs":"1CwHz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2pWfY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
var _fillMjs = require("./fill.mjs");
function defaultOffset(arr) {
    const offset = [
        0
    ];
    (0, _fillMjs.fillOffset)(offset, arr.length - 1);
    return offset;
}

},{"./fill.mjs":"40qn3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"40qn3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _motionUtils = require("motion-utils");
var _numberMjs = require("../../../utils/mix/number.mjs");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _motionUtils.progress)(0, remaining, i);
        offset.push((0, _numberMjs.mixNumber)(min, 1, offsetProgress));
    }
}

},{"motion-utils":"3Q4mc","../../../utils/mix/number.mjs":"eSNQQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3Q4mc":[function(require,module,exports,__globalThis) {
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.
*/ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (from, to, value)=>{
    const range = to - from;
    return range ? (value - from) / range : 1;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eSNQQ":[function(require,module,exports,__globalThis) {
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixNumber", ()=>mixNumber);
const mixNumber = (from, to, progress)=>{
    return from + (to - from) * progress;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1wDLA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isGenerator", ()=>isGenerator);
function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"75Nnh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMotionValue", ()=>isMotionValue);
const isMotionValue = (value)=>Boolean(value && value.getVelocity);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aOoW7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _wrapMjs = require("../../wrap.mjs");
var _isEasingArrayMjs = require("./is-easing-array.mjs");
/*#__NO_SIDE_EFFECTS__*/ function getEasingForSegment(easing, i) {
    return (0, _isEasingArrayMjs.isEasingArray)(easing) ? easing[(0, _wrapMjs.wrap)(0, easing.length, i)] : easing;
}

},{"../../wrap.mjs":"dFVhY","./is-easing-array.mjs":"2SeRN","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dFVhY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2SeRN":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingArray", ()=>isEasingArray);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e2sIK":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseEasing", ()=>reverseEasing);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lHcaC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveSubjects", ()=>resolveSubjects);
var _motionDom = require("motion-dom");
var _isDomKeyframesMjs = require("../utils/is-dom-keyframes.mjs");
function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (subject == null) return [];
    if (typeof subject === "string" && (0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes)) return (0, _motionDom.resolveElements)(subject, scope, selectorCache);
    else if (subject instanceof NodeList) return Array.from(subject);
    else if (Array.isArray(subject)) return subject.filter((s)=>s != null);
    else return [
        subject
    ];
}

},{"motion-dom":"lqtyu","../utils/is-dom-keyframes.mjs":"3zABh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lqtyu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector == null) return [];
    if (elementOrSelector instanceof EventTarget) return [
        elementOrSelector
    ];
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) root = scope.current;
        const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector).filter((element)=>element != null);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3zABh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDOMKeyframes", ()=>isDOMKeyframes);
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"30oo2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateRepeatDuration", ()=>calculateRepeatDuration);
function calculateRepeatDuration(duration, repeat, repeatDelay) {
    return duration * (repeat + 1) + repeatDelay * repeat;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ayVN5":[function(require,module,exports,__globalThis) {
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcNextTime", ()=>calcNextTime);
function calcNextTime(current, next, prev, labels) {
    if (typeof next === "number") return next;
    else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
    else if (next === "<") return prev;
    else if (next.startsWith("<")) return Math.max(0, prev + parseFloat(next.slice(1)));
    else return labels.get(next) ?? current;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1bF6R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addKeyframes", ()=>addKeyframes);
parcelHelpers.export(exports, "eraseKeyframes", ()=>eraseKeyframes);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, _motionUtils.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++)sequence.push({
        value: keyframes[i],
        at: (0, _motionDom.mixNumber)(startTime, endTime, offset[i]),
        easing: (0, _motionUtils.getEasingForSegment)(easing, i)
    });
}

},{"motion-dom":"eSNQQ","motion-utils":[["getEasingForSegment","aOoW7"],["removeItem","9bOuG"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fkPrD":[function(require,module,exports,__globalThis) {
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 *
 * `repeatDelayUnits` is the repeatDelay expressed in units of a single
 * iteration's duration, so the total span equals `(repeat + 1) + repeat * repeatDelayUnits`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeTimes", ()=>normalizeTimes);
function normalizeTimes(times, repeat, repeatDelayUnits = 0) {
    const totalUnits = repeat + 1 + repeat * repeatDelayUnits;
    for(let i = 0; i < times.length; i++)times[i] = times[i] / totalUnits;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1CwHz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByTime", ()=>compareByTime);
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else return a.at - b.at;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bwiBb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSubject", ()=>animateSubject);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _createVisualElementMjs = require("../utils/create-visual-element.mjs");
var _isDomKeyframesMjs = require("../utils/is-dom-keyframes.mjs");
var _resolveSubjectsMjs = require("./resolve-subjects.mjs");
function isSingleValue(subject, keyframes) {
    return (0, _motionDom.isMotionValue)(subject) || typeof subject === "number" || typeof subject === "string" && !(0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) animations.push((0, _motionDom.animateSingleValue)(subject, (0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    else {
        // Gracefully handle null/undefined subjects (e.g., from querySelector returning null)
        if (subject == null) return animations;
        const subjects = (0, _resolveSubjectsMjs.resolveSubjects)(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0, _motionUtils.invariant)(Boolean(numSubjects), "No valid elements provided.", "no-valid-elements");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element ? (0, _createVisualElementMjs.createDOMVisualElement) : (0, _createVisualElementMjs.createObjectVisualElement);
            if (!(0, _motionDom.visualElementStore).has(thisSubject)) createVisualElement(thisSubject);
            const visualElement = (0, _motionDom.visualElementStore).get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") transition.delay = transition.delay(i, numSubjects);
            animations.push(...(0, _motionDom.animateTarget)(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}

},{"motion-dom":[["animateSingleValue","7SfpZ"],["animateTarget","hYEz3"],["isMotionValue","75Nnh"],["visualElementStore","mujCZ"]],"motion-utils":"e5pKF","../utils/create-visual-element.mjs":"vtTMy","../utils/is-dom-keyframes.mjs":"3zABh","./resolve-subjects.mjs":"lHcaC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7SfpZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSingleValue", ()=>animateSingleValue);
var _motionValueMjs = require("../interfaces/motion-value.mjs");
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0, _isMotionValueMjs.isMotionValue)(value) ? value : (0, _indexMjs.motionValue)(value);
    motionValue$1.start((0, _motionValueMjs.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}

},{"../interfaces/motion-value.mjs":"jreNm","../../value/index.mjs":"c1jKT","../../value/utils/is-motion-value.mjs":"75Nnh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jreNm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateMotionValue", ()=>animateMotionValue);
var _motionUtils = require("motion-utils");
var _asyncMotionValueAnimationMjs = require("../AsyncMotionValueAnimation.mjs");
var _jsanimationMjs = require("../JSAnimation.mjs");
var _getValueTransitionMjs = require("../utils/get-value-transition.mjs");
var _makeAnimationInstantMjs = require("../utils/make-animation-instant.mjs");
var _defaultTransitionsMjs = require("../utils/default-transitions.mjs");
var _getFinalMjs = require("../keyframes/get-final.mjs");
var _isTransitionDefinedMjs = require("../utils/is-transition-defined.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff)=>(onComplete)=>{
        const valueTransition = (0, _getValueTransitionMjs.getValueTransition)(transition, name) || {};
        /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */ const delay = valueTransition.delay || transition.delay || 0;
        /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */ let { elapsed = 0 } = transition;
        elapsed = elapsed - (0, _motionUtils.secondsToMilliseconds)(delay);
        const options = {
            keyframes: Array.isArray(target) ? target : [
                null,
                target
            ],
            ease: "easeOut",
            velocity: value.getVelocity(),
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v)=>{
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: ()=>{
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
            name,
            motionValue: value,
            element: isHandoff ? undefined : element
        };
        /**
     * If there's no transition defined for this value, we can generate
     * unique transition settings for this value.
     */ if (!(0, _isTransitionDefinedMjs.isTransitionDefined)(valueTransition)) Object.assign(options, (0, _defaultTransitionsMjs.getDefaultTransition)(name, options));
        /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */ options.duration && (options.duration = (0, _motionUtils.secondsToMilliseconds)(options.duration));
        options.repeatDelay && (options.repeatDelay = (0, _motionUtils.secondsToMilliseconds)(options.repeatDelay));
        /**
     * Support deprecated way to set initial value. Prefer keyframe syntax.
     */ if (options.from !== undefined) options.keyframes[0] = options.from;
        let shouldSkip = false;
        if (options.type === false || options.duration === 0 && !options.repeatDelay) {
            (0, _makeAnimationInstantMjs.makeAnimationInstant)(options);
            if (options.delay === 0) shouldSkip = true;
        }
        if ((0, _motionUtils.MotionGlobalConfig).instantAnimations || (0, _motionUtils.MotionGlobalConfig).skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
            shouldSkip = true;
            (0, _makeAnimationInstantMjs.makeAnimationInstant)(options);
            options.delay = 0;
        }
        /**
     * If the transition type or easing has been explicitly set by the user
     * then we don't want to allow flattening the animation.
     */ options.allowFlatten = !valueTransition.type && !valueTransition.ease;
        /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */ if (shouldSkip && !isHandoff && value.get() !== undefined) {
            const finalKeyframe = (0, _getFinalMjs.getFinalKeyframe)(options.keyframes, valueTransition);
            if (finalKeyframe !== undefined) {
                (0, _frameMjs.frame).update(()=>{
                    options.onUpdate(finalKeyframe);
                    options.onComplete();
                });
                return;
            }
        }
        return valueTransition.isSync ? new (0, _jsanimationMjs.JSAnimation)(options) : new (0, _asyncMotionValueAnimationMjs.AsyncMotionValueAnimation)(options);
    };

},{"motion-utils":[["MotionGlobalConfig","82hsq"],["secondsToMilliseconds","k1haA"]],"../AsyncMotionValueAnimation.mjs":"iq8Tb","../JSAnimation.mjs":"eeqfR","../utils/get-value-transition.mjs":"jlH9x","../utils/make-animation-instant.mjs":"8rE8V","../utils/default-transitions.mjs":"d1KKw","../keyframes/get-final.mjs":"gcv7j","../utils/is-transition-defined.mjs":"127jx","../../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iq8Tb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncMotionValueAnimation", ()=>AsyncMotionValueAnimation);
var _motionUtils = require("motion-utils");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _jsanimationMjs = require("./JSAnimation.mjs");
var _getFinalMjs = require("./keyframes/get-final.mjs");
var _keyframesResolverMjs = require("./keyframes/KeyframesResolver.mjs");
var _nativeAnimationExtendedMjs = require("./NativeAnimationExtended.mjs");
var _canAnimateMjs = require("./utils/can-animate.mjs");
var _makeAnimationInstantMjs = require("./utils/make-animation-instant.mjs");
var _withPromiseMjs = require("./utils/WithPromise.mjs");
var _waapiMjs = require("./waapi/supports/waapi.mjs");
/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */ const MAX_RESOLVE_DELAY = 40;
class AsyncMotionValueAnimation extends (0, _withPromiseMjs.WithPromise) {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }){
        super();
        /**
         * Bound to support return animation.stop pattern
         */ this.stop = ()=>{
            if (this._animation) {
                this._animation.stop();
                this.stopTimeline?.();
            }
            this.keyframeResolver?.cancel();
        };
        this.createdAt = (0, _syncTimeMjs.time).now();
        const optionsWithDefaults = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            name,
            motionValue,
            element,
            ...options
        };
        const KeyframeResolver$1 = element?.KeyframeResolver || (0, _keyframesResolverMjs.KeyframeResolver);
        this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
        this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
        this.keyframeResolver = undefined;
        const { name, type, velocity, delay, isHandoff, onUpdate } = options;
        this.resolvedAt = (0, _syncTimeMjs.time).now();
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */ let canAnimateValue = true;
        if (!(0, _canAnimateMjs.canAnimate)(keyframes, name, type, velocity)) {
            canAnimateValue = false;
            if ((0, _motionUtils.MotionGlobalConfig).instantAnimations || !delay) onUpdate?.((0, _getFinalMjs.getFinalKeyframe)(keyframes, options, finalKeyframe));
            keyframes[0] = keyframes[keyframes.length - 1];
            (0, _makeAnimationInstantMjs.makeAnimationInstant)(options);
            options.repeat = 0;
        }
        /**
         * Resolve startTime for the animation.
         *
         * This method uses the createdAt and resolvedAt to calculate the
         * animation startTime. *Ideally*, we would use the createdAt time as t=0
         * as the following frame would then be the first frame of the animation in
         * progress, which would feel snappier.
         *
         * However, if there's a delay (main thread work) between the creation of
         * the animation and the first committed frame, we prefer to use resolvedAt
         * to avoid a sudden jump into the animation.
         */ const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : undefined;
        const resolvedOptions = {
            startTime,
            finalKeyframe,
            ...options,
            keyframes
        };
        /**
         * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
         * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
         * optimised animation.
         *
         * Also skip WAAPI when keyframes aren't animatable, as the resolved
         * values may not be valid CSS and would trigger browser warnings.
         */ const useWaapi = canAnimateValue && !isHandoff && (0, _waapiMjs.supportsBrowserAnimation)(resolvedOptions);
        const element = resolvedOptions.motionValue?.owner?.current;
        let animation;
        if (useWaapi) try {
            animation = new (0, _nativeAnimationExtendedMjs.NativeAnimationExtended)({
                ...resolvedOptions,
                element
            });
        } catch  {
            animation = new (0, _jsanimationMjs.JSAnimation)(resolvedOptions);
        }
        else animation = new (0, _jsanimationMjs.JSAnimation)(resolvedOptions);
        animation.finished.then(()=>{
            this.notifyFinished();
        }).catch((0, _motionUtils.noop));
        if (this.pendingTimeline) {
            this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        this._animation = animation;
    }
    get finished() {
        if (!this._animation) return this._finished;
        else return this.animation.finished;
    }
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(()=>{});
    }
    get animation() {
        if (!this._animation) {
            this.keyframeResolver?.resume();
            (0, _keyframesResolverMjs.flushKeyframeResolvers)();
        }
        return this._animation;
    }
    get duration() {
        return this.animation.duration;
    }
    get iterationDuration() {
        return this.animation.iterationDuration;
    }
    get time() {
        return this.animation.time;
    }
    set time(newTime) {
        this.animation.time = newTime;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(newSpeed) {
        this.animation.speed = newSpeed;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(timeline) {
        if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
        else this.pendingTimeline = timeline;
        return ()=>this.stop();
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        if (this._animation) this.animation.cancel();
        this.keyframeResolver?.cancel();
    }
}

},{"motion-utils":[["MotionGlobalConfig","82hsq"],["noop","7MDWX"]],"../frameloop/sync-time.mjs":"c5O7T","./JSAnimation.mjs":"eeqfR","./keyframes/get-final.mjs":"gcv7j","./keyframes/KeyframesResolver.mjs":"i94G6","./NativeAnimationExtended.mjs":"l8LhY","./utils/can-animate.mjs":"1QiXm","./utils/make-animation-instant.mjs":"8rE8V","./utils/WithPromise.mjs":"jG93b","./waapi/supports/waapi.mjs":"j5IC6","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eeqfR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JSAnimation", ()=>JSAnimation);
parcelHelpers.export(exports, "animateValue", ()=>animateValue);
var _motionUtils = require("motion-utils");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _indexMjs = require("../utils/mix/index.mjs");
var _frameMjs = require("./drivers/frame.mjs");
var _inertiaMjs = require("./generators/inertia.mjs");
var _keyframesMjs = require("./generators/keyframes.mjs");
var _calcDurationMjs = require("./generators/utils/calc-duration.mjs");
var _velocityMjs = require("./generators/utils/velocity.mjs");
var _getFinalMjs = require("./keyframes/get-final.mjs");
var _replaceTransitionTypeMjs = require("./utils/replace-transition-type.mjs");
var _withPromiseMjs = require("./utils/WithPromise.mjs");
const percentToProgress = (percent)=>percent / 100;
class JSAnimation extends (0, _withPromiseMjs.WithPromise) {
    constructor(options){
        super();
        this.state = "idle";
        this.startTime = null;
        this.isStopped = false;
        /**
         * The current time of the animation.
         */ this.currentTime = 0;
        /**
         * The time at which the animation was paused.
         */ this.holdTime = null;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */ this.playbackSpeed = 1;
        /**
         * Reusable state object for the delay phase to avoid
         * allocating a new object every frame.
         */ this.delayState = {
            done: false,
            value: undefined
        };
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */ this.stop = ()=>{
            const { motionValue } = this.options;
            if (motionValue && motionValue.updatedAt !== (0, _syncTimeMjs.time).now()) this.tick((0, _syncTimeMjs.time).now());
            this.isStopped = true;
            if (this.state === "idle") return;
            this.teardown();
            this.options.onStop?.();
        };
        this.options = options;
        this.initAnimation();
        this.play();
        if (options.autoplay === false) this.pause();
    }
    initAnimation() {
        const { options } = this;
        (0, _replaceTransitionTypeMjs.replaceTransitionType)(options);
        const { type = (0, _keyframesMjs.keyframes), repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
        let { keyframes: keyframes$1 } = options;
        const generatorFactory = type || (0, _keyframesMjs.keyframes);
        if (generatorFactory !== (0, _keyframesMjs.keyframes) && typeof keyframes$1[0] !== "number") {
            this.mixKeyframes = (0, _motionUtils.pipe)(percentToProgress, (0, _indexMjs.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [
                0,
                100
            ];
        }
        const generator = generatorFactory({
            ...options,
            keyframes: keyframes$1
        });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */ if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
            ...options,
            keyframes: [
                ...keyframes$1
            ].reverse(),
            velocity: -velocity
        });
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */ if (generator.calculatedDuration === null) generator.calculatedDuration = (0, _calcDurationMjs.calcGeneratorDuration)(generator);
        const { calculatedDuration } = generator;
        this.calculatedDuration = calculatedDuration;
        this.resolvedDuration = calculatedDuration + repeatDelay;
        this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
        this.generator = generator;
    }
    updateTime(timestamp) {
        const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
        // Update currentTime
        if (this.holdTime !== null) this.currentTime = this.holdTime;
        else // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
        // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
        // example.
        this.currentTime = animationTime;
    }
    tick(timestamp, sample = false) {
        const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
        if (this.startTime === null) return generator.next(0);
        const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */ if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
        else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        if (sample) this.currentTime = timestamp;
        else this.updateTime(timestamp);
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
        const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ if (!iterationProgress && progress >= 1) iterationProgress = 1;
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
                } else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
            }
            elapsed = (0, _motionUtils.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */ let state;
        if (isInDelayPhase) {
            this.delayState.value = keyframes[0];
            state = this.delayState;
        } else state = frameGenerator.next(elapsed);
        if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
        const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
        // TODO: The exception for inertia could be cleaner here
        if (isAnimationFinished && type !== (0, _inertiaMjs.inertia)) state.value = (0, _getFinalMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe, this.speed);
        if (onUpdate) onUpdate(state.value);
        if (isAnimationFinished) this.finish();
        return state;
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */ then(resolve, reject) {
        return this.finished.then(resolve, reject);
    }
    get duration() {
        return (0, _motionUtils.millisecondsToSeconds)(this.calculatedDuration);
    }
    get iterationDuration() {
        const { delay = 0 } = this.options || {};
        return this.duration + (0, _motionUtils.millisecondsToSeconds)(delay);
    }
    get time() {
        return (0, _motionUtils.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0, _motionUtils.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
        else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
        if (this.driver) this.driver.start(false);
        else {
            this.startTime = 0;
            this.state = "paused";
            this.holdTime = newTime;
            this.tick(newTime);
        }
    }
    /**
     * Returns the generator's velocity at the current time in units/second.
     * Uses the analytical derivative when available (springs), avoiding
     * the MotionValue's frame-dependent velocity estimation.
     */ getGeneratorVelocity() {
        const t = this.currentTime;
        if (t <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(t);
        // Fallback: finite difference
        const current = this.generator.next(t).value;
        return (0, _velocityMjs.getGeneratorVelocity)((s)=>this.generator.next(s).value, t, current);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        if (hasChanged && this.driver) this.updateTime((0, _syncTimeMjs.time).now());
        this.playbackSpeed = newSpeed;
        if (hasChanged && this.driver) this.time = (0, _motionUtils.millisecondsToSeconds)(this.currentTime);
    }
    play() {
        if (this.isStopped) return;
        const { driver = (0, _frameMjs.frameloopDriver), startTime } = this.options;
        if (!this.driver) this.driver = driver((timestamp)=>this.tick(timestamp));
        this.options.onPlay?.();
        const now = this.driver.now();
        if (this.state === "finished") {
            this.updateFinished();
            this.startTime = now;
        } else if (this.holdTime !== null) this.startTime = now - this.holdTime;
        else if (!this.startTime) this.startTime = startTime ?? now;
        if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */ this.state = "running";
        this.driver.start();
    }
    pause() {
        this.state = "paused";
        this.updateTime((0, _syncTimeMjs.time).now());
        this.holdTime = this.currentTime;
    }
    complete() {
        if (this.state !== "running") this.play();
        this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.notifyFinished();
        this.teardown();
        this.state = "finished";
        this.options.onComplete?.();
    }
    cancel() {
        this.holdTime = null;
        this.startTime = 0;
        this.tick(0);
        this.teardown();
        this.options.onCancel?.();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.startTime = this.holdTime = null;
    }
    stopDriver() {
        if (!this.driver) return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(sampleTime) {
        this.startTime = 0;
        return this.tick(sampleTime, true);
    }
    attachTimeline(timeline) {
        if (this.options.allowFlatten) {
            this.options.type = "keyframes";
            this.options.ease = "linear";
            this.initAnimation();
        }
        this.driver?.stop();
        return timeline.observe(this);
    }
}
// Legacy function support
function animateValue(options) {
    return new JSAnimation(options);
}

},{"motion-utils":[["clamp","2BS9B"],["millisecondsToSeconds","k1haA"],["secondsToMilliseconds","k1haA"],["pipe","cCPPw"]],"../frameloop/sync-time.mjs":"c5O7T","../utils/mix/index.mjs":"jWgxC","./drivers/frame.mjs":"kbPum","./generators/inertia.mjs":"lJO1B","./generators/keyframes.mjs":"emfPF","./generators/utils/calc-duration.mjs":"dMH6d","./generators/utils/velocity.mjs":"cdr82","./keyframes/get-final.mjs":"gcv7j","./utils/replace-transition-type.mjs":"1z8sQ","./utils/WithPromise.mjs":"jG93b","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cCPPw":[function(require,module,exports,__globalThis) {
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
const pipe = (...transformers)=>transformers.reduce((a, b)=>(v)=>b(a(v)));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jWgxC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
var _complexMjs = require("./complex.mjs");
var _numberMjs = require("./number.mjs");
function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") return (0, _numberMjs.mixNumber)(from, to, p);
    const mixer = (0, _complexMjs.getMixer)(from);
    return mixer(from, to);
}

},{"./complex.mjs":"5r5NP","./number.mjs":"eSNQQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5r5NP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMixer", ()=>getMixer);
parcelHelpers.export(exports, "mixArray", ()=>mixArray);
parcelHelpers.export(exports, "mixComplex", ()=>mixComplex);
parcelHelpers.export(exports, "mixObject", ()=>mixObject);
var _motionUtils = require("motion-utils");
var _isCssVariableMjs = require("../../animation/utils/is-css-variable.mjs");
var _indexMjs = require("../../value/types/color/index.mjs");
var _indexMjs1 = require("../../value/types/complex/index.mjs");
var _colorMjs = require("./color.mjs");
var _immediateMjs = require("./immediate.mjs");
var _numberMjs = require("./number.mjs");
var _visibilityMjs = require("./visibility.mjs");
function mixNumber(a, b) {
    return (p)=>(0, _numberMjs.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") return mixNumber;
    else if (typeof a === "string") return (0, _isCssVariableMjs.isCSSVariableToken)(a) ? (0, _immediateMjs.mixImmediate) : (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixComplex;
    else if (Array.isArray(a)) return mixArray;
    else if (typeof a === "object") return (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixObject;
    return 0, _immediateMjs.mixImmediate;
}
function mixArray(a, b) {
    const output = [
        ...a
    ];
    const numValues = output.length;
    const blendValue = a.map((v, i)=>getMixer(v)(v, b[i]));
    return (p)=>{
        for(let i = 0; i < numValues; i++)output[i] = blendValue[i](p);
        return output;
    };
}
function mixObject(a, b) {
    const output = {
        ...a,
        ...b
    };
    const blendValue = {};
    for(const key in output)if (a[key] !== undefined && b[key] !== undefined) blendValue[key] = getMixer(a[key])(a[key], b[key]);
    return (v)=>{
        for(const key in blendValue)output[key] = blendValue[key](v);
        return output;
    };
}
function matchOrder(origin, target) {
    const orderedOrigin = [];
    const pointers = {
        color: 0,
        var: 0,
        number: 0
    };
    for(let i = 0; i < target.values.length; i++){
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = origin.values[originIndex] ?? 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target)=>{
    const template = (0, _indexMjs1.complex).createTransformer(target);
    const originStats = (0, _indexMjs1.analyseComplexValue)(origin);
    const targetStats = (0, _indexMjs1.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((0, _visibilityMjs.invisibleValues).has(origin) && !targetStats.values.length || (0, _visibilityMjs.invisibleValues).has(target) && !originStats.values.length) return (0, _visibilityMjs.mixVisibility)(origin, target);
        return (0, _motionUtils.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
        (0, _motionUtils.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
        return (0, _immediateMjs.mixImmediate)(origin, target);
    }
};

},{"motion-utils":[["pipe","cCPPw"],["warning","e5pKF"]],"../../animation/utils/is-css-variable.mjs":"gaLfK","../../value/types/color/index.mjs":"gSiiB","../../value/types/complex/index.mjs":"l9HIB","./color.mjs":"3vJ7U","./immediate.mjs":"EIJux","./number.mjs":"eSNQQ","./visibility.mjs":"4QviQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gaLfK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "containsCSSVariable", ()=>containsCSSVariable);
parcelHelpers.export(exports, "isCSSVariableName", ()=>isCSSVariableName);
parcelHelpers.export(exports, "isCSSVariableToken", ()=>isCSSVariableToken);
const checkStringStartsWith = (token)=>(key)=>typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value)=>{
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken) return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
 * Check if a value contains a CSS variable anywhere (e.g. inside calc()).
 * Unlike isCSSVariableToken which checks if the value IS a var() token,
 * this checks if the value CONTAINS var() somewhere in the string.
 */ function containsCSSVariable(value) {
    if (typeof value !== "string") return false;
    // Strip comments to avoid false positives
    return value.split("/*")[0].includes("var(--");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gSiiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
var _hexMjs = require("./hex.mjs");
var _hslaMjs = require("./hsla.mjs");
var _rgbaMjs = require("./rgba.mjs");
const color = {
    test: (v)=>(0, _rgbaMjs.rgba).test(v) || (0, _hexMjs.hex).test(v) || (0, _hslaMjs.hsla).test(v),
    parse: (v)=>{
        if ((0, _rgbaMjs.rgba).test(v)) return (0, _rgbaMjs.rgba).parse(v);
        else if ((0, _hslaMjs.hsla).test(v)) return (0, _hslaMjs.hsla).parse(v);
        else return (0, _hexMjs.hex).parse(v);
    },
    transform: (v)=>{
        return typeof v === "string" ? v : v.hasOwnProperty("red") ? (0, _rgbaMjs.rgba).transform(v) : (0, _hslaMjs.hsla).transform(v);
    },
    getAnimatableNone: (v)=>{
        const parsed = color.parse(v);
        parsed.alpha = 0;
        return color.transform(parsed);
    }
};

},{"./hex.mjs":"3L78C","./hsla.mjs":"jmiM6","./rgba.mjs":"jrEUc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3L78C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hex", ()=>hex);
var _rgbaMjs = require("./rgba.mjs");
var _utilsMjs = require("./utils.mjs");
function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
    } else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
const hex = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("#"),
    parse: parseHex,
    transform: (0, _rgbaMjs.rgba).transform
};

},{"./rgba.mjs":"jrEUc","./utils.mjs":"3l2mZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jrEUc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit);
parcelHelpers.export(exports, "rgba", ()=>rgba);
var _motionUtils = require("motion-utils");
var _indexMjs = require("../numbers/index.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const clampRgbUnit = (v)=>(0, _motionUtils.clamp)(0, 255, v);
const rgbUnit = {
    ...(0, _indexMjs.number),
    transform: (v)=>Math.round(clampRgbUnit(v))
};
const rgba = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 })=>"rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")"
};

},{"motion-utils":"2BS9B","../numbers/index.mjs":"2uUit","../utils/sanitize.mjs":"8ofNV","./utils.mjs":"3l2mZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2uUit":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>alpha);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "scale", ()=>scale);
var _motionUtils = require("motion-utils");
const number = {
    test: (v)=>typeof v === "number",
    parse: parseFloat,
    transform: (v)=>v
};
const alpha = {
    ...number,
    transform: (v)=>(0, _motionUtils.clamp)(0, 1, v)
};
const scale = {
    ...number,
    default: 1
};

},{"motion-utils":"2BS9B","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8ofNV":[function(require,module,exports,__globalThis) {
// If this number is a decimal, make it just five decimal places
// to avoid exponents
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitize", ()=>sanitize);
const sanitize = (v)=>Math.round(v * 100000) / 100000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3l2mZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isColorString", ()=>isColorString);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _isNullishMjs = require("../utils/is-nullish.mjs");
var _singleColorRegexMjs = require("../utils/single-color-regex.mjs");
/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */ const isColorString = (type, testProp)=>(v)=>{
        return Boolean(typeof v === "string" && (0, _singleColorRegexMjs.singleColorRegex).test(v) && v.startsWith(type) || testProp && !(0, _isNullishMjs.isNullish)(v) && Object.prototype.hasOwnProperty.call(v, testProp));
    };
const splitColor = (aName, bName, cName)=>(v)=>{
        if (typeof v !== "string") return v;
        const [a, b, c, alpha] = v.match((0, _floatRegexMjs.floatRegex));
        return {
            [aName]: parseFloat(a),
            [bName]: parseFloat(b),
            [cName]: parseFloat(c),
            alpha: alpha !== undefined ? parseFloat(alpha) : 1
        };
    };

},{"../utils/float-regex.mjs":"lUP9R","../utils/is-nullish.mjs":"4Ah5k","../utils/single-color-regex.mjs":"iY0Wk","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lUP9R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "floatRegex", ()=>floatRegex);
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4Ah5k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNullish", ()=>isNullish);
function isNullish(v) {
    return v == null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iY0Wk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "singleColorRegex", ()=>singleColorRegex);
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jmiM6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsla", ()=>hsla);
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const hsla = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 })=>{
        return "hsla(" + Math.round(hue) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(saturation)) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(lightness)) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")";
    }
};

},{"../numbers/index.mjs":"2uUit","../numbers/units.mjs":"JFyVd","../utils/sanitize.mjs":"8ofNV","./utils.mjs":"3l2mZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"JFyVd":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "progressPercentage", ()=>progressPercentage);
parcelHelpers.export(exports, "px", ()=>px);
parcelHelpers.export(exports, "vh", ()=>vh);
parcelHelpers.export(exports, "vw", ()=>vw);
const createUnitType = (unit)=>({
        test: (v)=>typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
        parse: parseFloat,
        transform: (v)=>`${v}${unit}`
    });
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = /*@__PURE__*/ (()=>({
        ...percent,
        parse: (v)=>percent.parse(v) / 100,
        transform: (v)=>percent.transform(v * 100)
    }))();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l9HIB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyseComplexValue", ()=>analyseComplexValue);
parcelHelpers.export(exports, "complex", ()=>complex);
var _indexMjs = require("../color/index.mjs");
var _colorRegexMjs = require("../utils/color-regex.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
function test(v) {
    return isNaN(v) && typeof v === "string" && (v.match((0, _floatRegexMjs.floatRegex))?.length || 0) + (v.match((0, _colorRegexMjs.colorRegex))?.length || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue)=>{
        if ((0, _indexMjs.color).test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push((0, _indexMjs.color).parse(parsedValue));
        } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        } else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return {
        values,
        split,
        indexes,
        types
    };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
    const numSections = split.length;
    return (v)=>{
        let output = "";
        for(let i = 0; i < numSections; i++){
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) output += (0, _sanitizeMjs.sanitize)(v[i]);
                else if (type === COLOR_TOKEN) output += (0, _indexMjs.color).transform(v[i]);
                else output += v[i];
            }
        }
        return output;
    };
}
function createTransformer(source) {
    return buildTransformer(analyseComplexValue(source));
}
const convertNumbersToZero = (v)=>typeof v === "number" ? 0 : (0, _indexMjs.color).test(v) ? (0, _indexMjs.color).getAnimatableNone(v) : v;
/**
 * Convert a parsed value to its zero equivalent, but preserve numbers
 * that act as divisors in CSS calc() expressions.
 *
 * analyseComplexValue extracts numbers from CSS strings and puts the
 * surrounding text into a `split` template array. For example:
 *   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
 *                               split:  ["calc(", " / ", ")"]
 *
 * When building a zero-equivalent for animation, naively zeroing all
 * numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
 * We detect this by checking whether the text preceding a number
 * (split[i]) ends with "/" — the CSS calc division operator.
 */ const convertToZero = (value, splitBefore)=>{
    if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
    return convertNumbersToZero(value);
};
function getAnimatableNone(v) {
    const info = analyseComplexValue(v);
    const transformer = buildTransformer(info);
    return transformer(info.values.map((value, i)=>convertToZero(value, info.split[i])));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
};

},{"../color/index.mjs":"gSiiB","../utils/color-regex.mjs":"e0bsm","../utils/float-regex.mjs":"lUP9R","../utils/sanitize.mjs":"8ofNV","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e0bsm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorRegex", ()=>colorRegex);
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3vJ7U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixColor", ()=>mixColor);
parcelHelpers.export(exports, "mixLinearColor", ()=>mixLinearColor);
var _motionUtils = require("motion-utils");
var _hexMjs = require("../../value/types/color/hex.mjs");
var _hslaMjs = require("../../value/types/color/hsla.mjs");
var _hslaToRgbaMjs = require("../../value/types/color/hsla-to-rgba.mjs");
var _rgbaMjs = require("../../value/types/color/rgba.mjs");
var _immediateMjs = require("./immediate.mjs");
var _numberMjs = require("./number.mjs");
// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v)=>{
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [
    (0, _hexMjs.hex),
    (0, _rgbaMjs.rgba),
    (0, _hslaMjs.hsla)
];
const getColorType = (v)=>colorTypes.find((type)=>type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0, _motionUtils.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
    if (!Boolean(type)) return false;
    let model = type.parse(color);
    if (type === (0, _hslaMjs.hsla)) // TODO Remove this cast - needed since Motion's stricter typing
    model = (0, _hslaToRgbaMjs.hslaToRgba)(model);
    return model;
}
const mixColor = (from, to)=>{
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) return (0, _immediateMjs.mixImmediate)(from, to);
    const blended = {
        ...fromRGBA
    };
    return (v)=>{
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0, _numberMjs.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return (0, _rgbaMjs.rgba).transform(blended);
    };
};

},{"motion-utils":"e5pKF","../../value/types/color/hex.mjs":"3L78C","../../value/types/color/hsla.mjs":"jmiM6","../../value/types/color/hsla-to-rgba.mjs":"bNdiM","../../value/types/color/rgba.mjs":"jrEUc","./immediate.mjs":"EIJux","./number.mjs":"eSNQQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bNdiM":[function(require,module,exports,__globalThis) {
// Adapted from https://gist.github.com/mjackson/5311256
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslaToRgba", ()=>hslaToRgba);
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) red = green = blue = lightness;
    else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"EIJux":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixImmediate", ()=>mixImmediate);
function mixImmediate(a, b) {
    return (p)=>p > 0 ? b : a;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4QviQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invisibleValues", ()=>invisibleValues);
parcelHelpers.export(exports, "mixVisibility", ()=>mixVisibility);
const invisibleValues = new Set([
    "none",
    "hidden"
]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */ function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) return (p)=>p <= 0 ? origin : target;
    else return (p)=>p >= 1 ? target : origin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kbPum":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "frameloopDriver", ()=>frameloopDriver);
var _syncTimeMjs = require("../../frameloop/sync-time.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const frameloopDriver = (update)=>{
    const passTimestamp = ({ timestamp })=>update(timestamp);
    return {
        start: (keepAlive = true)=>(0, _frameMjs.frame).update(passTimestamp, keepAlive),
        stop: ()=>(0, _frameMjs.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */ now: ()=>(0, _frameMjs.frameData).isProcessing ? (0, _frameMjs.frameData).timestamp : (0, _syncTimeMjs.time).now()
    };
};

},{"../../frameloop/sync-time.mjs":"c5O7T","../../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lJO1B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inertia", ()=>inertia);
var _springMjs = require("./spring.mjs");
var _velocityMjs = require("./utils/velocity.mjs");
function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin
    };
    const isOutOfBounds = (v)=>min !== undefined && v < min || max !== undefined && v > max;
    const nearestBoundary = (v)=>{
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - origin;
    const calcDelta = (t)=>-amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t)=>target + calcDelta(t);
    const applyFriction = (t)=>{
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t)=>{
        if (!isOutOfBounds(state.value)) return;
        timeReachedBoundary = t;
        spring$1 = (0, _springMjs.spring)({
            keyframes: [
                state.value,
                nearestBoundary(state.value)
            ],
            velocity: (0, _velocityMjs.getGeneratorVelocity)(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t)=>{
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */ let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */ if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        }
    };
}

},{"./spring.mjs":"a9nd4","./utils/velocity.mjs":"cdr82","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cdr82":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGeneratorVelocity", ()=>getGeneratorVelocity);
var _motionUtils = require("motion-utils");
const velocitySampleDuration = 5; // ms
function getGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0, _motionUtils.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

},{"motion-utils":"j8PY0","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"emfPF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultEasing", ()=>defaultEasing);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
var _motionUtils = require("motion-utils");
var _interpolateMjs = require("../../utils/interpolate.mjs");
var _defaultMjs = require("../keyframes/offsets/default.mjs");
var _timeMjs = require("../keyframes/offsets/time.mjs");
function defaultEasing(values, easing) {
    return values.map(()=>easing || (0, _motionUtils.easeInOut)).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */ const easingFunctions = (0, _motionUtils.isEasingArray)(ease) ? ease.map((0, _motionUtils.easingDefinitionToFunction)) : (0, _motionUtils.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: keyframeValues[0]
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */ const absoluteTimes = (0, _timeMjs.convertOffsetToTimes)(// Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : (0, _defaultMjs.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0, _interpolateMjs.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
        calculatedDuration: duration,
        next: (t)=>{
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        }
    };
}

},{"motion-utils":[["easeInOut","a80JG"],["easingDefinitionToFunction","4RYV8"],["isEasingArray","2SeRN"]],"../../utils/interpolate.mjs":"jDxKi","../keyframes/offsets/default.mjs":"2pWfY","../keyframes/offsets/time.mjs":"3rvEs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"a80JG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
parcelHelpers.export(exports, "easeInOut", ()=>easeInOut);
parcelHelpers.export(exports, "easeOut", ()=>easeOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
const easeIn = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 0.58, 1);

},{"./cubic-bezier.mjs":"bmKE5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bmKE5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _noopMjs = require("../noop.mjs");
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
/*#__NO_SIDE_EFFECTS__*/ function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _noopMjs.noop;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"../noop.mjs":"7MDWX","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4RYV8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easingDefinitionToFunction", ()=>easingDefinitionToFunction);
var _errorsMjs = require("../../errors.mjs");
var _noopMjs = require("../../noop.mjs");
var _anticipateMjs = require("../anticipate.mjs");
var _backMjs = require("../back.mjs");
var _circMjs = require("../circ.mjs");
var _cubicBezierMjs = require("../cubic-bezier.mjs");
var _easeMjs = require("../ease.mjs");
var _isBezierDefinitionMjs = require("./is-bezier-definition.mjs");
const easingLookup = {
    linear: (0, _noopMjs.noop),
    easeIn: (0, _easeMjs.easeIn),
    easeInOut: (0, _easeMjs.easeInOut),
    easeOut: (0, _easeMjs.easeOut),
    circIn: (0, _circMjs.circIn),
    circInOut: (0, _circMjs.circInOut),
    circOut: (0, _circMjs.circOut),
    backIn: (0, _backMjs.backIn),
    backInOut: (0, _backMjs.backInOut),
    backOut: (0, _backMjs.backOut),
    anticipate: (0, _anticipateMjs.anticipate)
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, _isBezierDefinitionMjs.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, _errorsMjs.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, _cubicBezierMjs.cubicBezier)(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, _errorsMjs.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};

},{"../../errors.mjs":"e5pKF","../../noop.mjs":"7MDWX","../anticipate.mjs":"dKxvF","../back.mjs":"eAcoE","../circ.mjs":"hLwRh","../cubic-bezier.mjs":"bmKE5","../ease.mjs":"a80JG","./is-bezier-definition.mjs":"6gPET","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dKxvF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anticipate", ()=>anticipate);
var _backMjs = require("./back.mjs");
const anticipate = (p)=>p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * (0, _backMjs.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

},{"./back.mjs":"eAcoE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eAcoE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backIn", ()=>backIn);
parcelHelpers.export(exports, "backInOut", ()=>backInOut);
parcelHelpers.export(exports, "backOut", ()=>backOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const backOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, _reverseMjs.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0, _mirrorMjs.mirrorEasing)(backIn);

},{"./cubic-bezier.mjs":"bmKE5","./modifiers/mirror.mjs":"cIHfz","./modifiers/reverse.mjs":"e2sIK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cIHfz":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mirrorEasing", ()=>mirrorEasing);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hLwRh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circIn", ()=>circIn);
parcelHelpers.export(exports, "circInOut", ()=>circInOut);
parcelHelpers.export(exports, "circOut", ()=>circOut);
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, _reverseMjs.reverseEasing)(circIn);
const circInOut = (0, _mirrorMjs.mirrorEasing)(circIn);

},{"./modifiers/mirror.mjs":"cIHfz","./modifiers/reverse.mjs":"e2sIK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6gPET":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBezierDefinition", ()=>isBezierDefinition);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jDxKi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _motionUtils = require("motion-utils");
var _indexMjs = require("./mix/index.mjs");
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || (0, _motionUtils.MotionGlobalConfig).mix || (0, _indexMjs.mix);
    const numMixers = output.length - 1;
    for(let i = 0; i < numMixers; i++){
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || (0, _motionUtils.noop) : ease;
            mixer = (0, _motionUtils.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revisit this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */ function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0, _motionUtils.invariant)(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */ if (inputLength === 1) return ()=>output[0];
    if (inputLength === 2 && output[0] === output[1]) return ()=>output[1];
    const isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [
            ...input
        ].reverse();
        output = [
            ...output
        ].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v)=>{
        if (isZeroDeltaRange && v < input[0]) return output[0];
        let i = 0;
        if (numMixers > 1) for(; i < input.length - 2; i++){
            if (v < input[i + 1]) break;
        }
        const progressInRange = (0, _motionUtils.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp ? (v)=>interpolator((0, _motionUtils.clamp)(input[0], input[inputLength - 1], v)) : interpolator;
}

},{"motion-utils":[["clamp","2BS9B"],["invariant","e5pKF"],["MotionGlobalConfig","82hsq"],["noop","7MDWX"],["pipe","cCPPw"],["progress","3Q4mc"]],"./mix/index.mjs":"jWgxC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3rvEs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertOffsetToTimes", ()=>convertOffsetToTimes);
function convertOffsetToTimes(offset, duration) {
    return offset.map((o)=>o * duration);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gcv7j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFinalKeyframe", ()=>getFinalKeyframe);
const isNotNull = (value)=>value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
    const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1z8sQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "replaceTransitionType", ()=>replaceTransitionType);
var _inertiaMjs = require("../generators/inertia.mjs");
var _keyframesMjs = require("../generators/keyframes.mjs");
var _springMjs = require("../generators/spring.mjs");
const transitionTypeMap = {
    decay: (0, _inertiaMjs.inertia),
    inertia: (0, _inertiaMjs.inertia),
    tween: (0, _keyframesMjs.keyframes),
    keyframes: (0, _keyframesMjs.keyframes),
    spring: (0, _springMjs.spring)
};
function replaceTransitionType(transition) {
    if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}

},{"../generators/inertia.mjs":"lJO1B","../generators/keyframes.mjs":"emfPF","../generators/spring.mjs":"a9nd4","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jG93b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WithPromise", ()=>WithPromise);
class WithPromise {
    constructor(){
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((resolve)=>{
            this.resolve = resolve;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */ then(onResolve, onReject) {
        return this.finished.then(onResolve, onReject);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i94G6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyframeResolver", ()=>KeyframeResolver);
parcelHelpers.export(exports, "flushKeyframeResolvers", ()=>flushKeyframeResolvers);
var _fillWildcardsMjs = require("./utils/fill-wildcards.mjs");
var _unitConversionMjs = require("./utils/unit-conversion.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver)=>resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver)=>resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */ elementsToMeasure.forEach((element)=>{
            const removedTransforms = (0, _unitConversionMjs.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length) return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element)=>{
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) restore.forEach(([key, value])=>{
                element.getValue(key)?.set(value);
            });
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver)=>{
            if (resolver.suspendedScrollY !== undefined) window.scrollTo(0, resolver.suspendedScrollY);
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver)=>resolver.complete(isForced));
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver)=>{
        resolver.readKeyframes();
        if (resolver.needsMeasurement) anyNeedsMeasurement = true;
    });
}
function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false){
        this.state = "pending";
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */ this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */ this.needsMeasurement = false;
        this.unresolvedKeyframes = [
            ...unresolvedKeyframes
        ];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.state = "scheduled";
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                (0, _frameMjs.frame).read(readAllKeyframes);
                (0, _frameMjs.frame).resolveKeyframes(measureAllKeyframes);
            }
        } else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        // If initial keyframe is null we need to read it from the DOM
        if (unresolvedKeyframes[0] === null) {
            const currentValue = motionValue?.get();
            // TODO: This doesn't work if the final keyframe is a wildcard
            const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
            if (currentValue !== undefined) unresolvedKeyframes[0] = currentValue;
            else if (element && name) {
                const valueAsRead = element.readValue(name, finalKeyframe);
                if (valueAsRead !== undefined && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
            }
            if (unresolvedKeyframes[0] === undefined) unresolvedKeyframes[0] = finalKeyframe;
            if (motionValue && currentValue === undefined) motionValue.set(unresolvedKeyframes[0]);
        }
        (0, _fillWildcardsMjs.fillWildcards)(unresolvedKeyframes);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(isForcedComplete = false) {
        this.state = "complete";
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
        toResolve.delete(this);
    }
    cancel() {
        if (this.state === "scheduled") {
            toResolve.delete(this);
            this.state = "pending";
        }
    }
    resume() {
        if (this.state === "pending") this.scheduleResolve();
    }
}

},{"./utils/fill-wildcards.mjs":"7Oyhl","./utils/unit-conversion.mjs":"3j57i","../../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Oyhl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillWildcards", ()=>fillWildcards);
function fillWildcards(keyframes) {
    for(let i = 1; i < keyframes.length; i++)keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3j57i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumOrPxType", ()=>isNumOrPxType);
parcelHelpers.export(exports, "positionalValues", ()=>positionalValues);
parcelHelpers.export(exports, "removeNonTranslationalTransform", ()=>removeNonTranslationalTransform);
var _parseTransformMjs = require("../../../render/dom/parse-transform.mjs");
var _keysTransformMjs = require("../../../render/utils/keys-transform.mjs");
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const isNumOrPxType = (v)=>v === (0, _indexMjs.number) || v === (0, _unitsMjs.px);
const transformKeys = new Set([
    "x",
    "y",
    "z"
]);
const nonTranslationalTransformKeys = (0, _keysTransformMjs.transformPropOrder).filter((key)=>!transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key)=>{
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([
                key,
                value.get()
            ]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing })=>{
        const width = x.max - x.min;
        return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing })=>{
        const height = y.max - y.min;
        return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: (_bbox, { top })=>parseFloat(top),
    left: (_bbox, { left })=>parseFloat(left),
    bottom: ({ y }, { top })=>parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left })=>parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform })=>(0, _parseTransformMjs.parseValueFromTransform)(transform, "x"),
    y: (_bbox, { transform })=>(0, _parseTransformMjs.parseValueFromTransform)(transform, "y")
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

},{"../../../render/dom/parse-transform.mjs":"gZIf2","../../../render/utils/keys-transform.mjs":"3EaJv","../../../value/types/numbers/index.mjs":"2uUit","../../../value/types/numbers/units.mjs":"JFyVd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gZIf2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultTransformValue", ()=>defaultTransformValue);
parcelHelpers.export(exports, "parseValueFromTransform", ()=>parseValueFromTransform);
parcelHelpers.export(exports, "readTransformValue", ()=>readTransformValue);
const radToDeg = (rad)=>rad * 180 / Math.PI;
const rotate = (v)=>{
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
};
const matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v)=>(Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v)=>radToDeg(Math.atan(v[1])),
    skewY: (v)=>radToDeg(Math.atan(v[2])),
    skew: (v)=>(Math.abs(v[1]) + Math.abs(v[2])) / 2
};
const rebaseAngle = (angle)=>{
    angle = angle % 360;
    if (angle < 0) angle += 360;
    return angle;
};
const rotateZ = rotate;
const scaleX = (v)=>Math.sqrt(v[0] * v[0] + v[1] * v[1]);
const scaleY = (v)=>Math.sqrt(v[4] * v[4] + v[5] * v[5]);
const matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v)=>(scaleX(v) + scaleY(v)) / 2,
    rotateX: (v)=>rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v)=>rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v)=>radToDeg(Math.atan(v[4])),
    skewY: (v)=>radToDeg(Math.atan(v[1])),
    skew: (v)=>(Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") return defaultTransformValue(name);
    const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
        parsers = matrix3dParsers;
        match = matrix3dMatch;
    } else {
        const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        parsers = matrix2dParsers;
        match = matrix2dMatch;
    }
    if (!match) return defaultTransformValue(name);
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
const readTransformValue = (instance, name)=>{
    const { transform = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
    return parseFloat(value.trim());
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3EaJv":[function(require,module,exports,__globalThis) {
/**
 * Generate a list of every possible transform key.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformPropOrder", ()=>transformPropOrder);
parcelHelpers.export(exports, "transformProps", ()=>transformProps);
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
];
/**
 * A quick lookup for transform props.
 *
 * `pathRotation` is a transform for routing purposes (skipped from raw
 * style application, wired to the transform composite, flags transform
 * dirty) but is intentionally NOT in `transformPropOrder` — it is
 * composed onto `rotate` at the build sites, not serialized in its own
 * slot, and must stay out of the order-array consumers (parse-transform,
 * unit-conversion, keys-position).
 */ const transformProps = /*@__PURE__*/ (()=>new Set([
        ...transformPropOrder,
        "pathRotation"
    ]))();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l8LhY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeAnimationExtended", ()=>NativeAnimationExtended);
var _motionUtils = require("motion-utils");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _styleSetMjs = require("../render/dom/style-set.mjs");
var _jsanimationMjs = require("./JSAnimation.mjs");
var _nativeAnimationMjs = require("./NativeAnimation.mjs");
var _replaceTransitionTypeMjs = require("./utils/replace-transition-type.mjs");
var _unsupportedEasingMjs = require("./waapi/utils/unsupported-easing.mjs");
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */ const sampleDelta = 10; //ms
class NativeAnimationExtended extends (0, _nativeAnimationMjs.NativeAnimation) {
    constructor(options){
        /**
         * The base NativeAnimation function only supports a subset
         * of Motion easings, and WAAPI also only supports some
         * easing functions via string/cubic-bezier definitions.
         *
         * This function replaces those unsupported easing functions
         * with a JS easing function. This will later get compiled
         * to a linear() easing function.
         */ (0, _unsupportedEasingMjs.replaceStringEasing)(options);
        /**
         * Ensure we replace the transition type with a generator function
         * before passing to WAAPI.
         *
         * TODO: Does this have a better home? It could be shared with
         * JSAnimation.
         */ (0, _replaceTransitionTypeMjs.replaceTransitionType)(options);
        super(options);
        /**
         * Only set startTime when the animation should autoplay.
         * Setting startTime on a paused WAAPI animation unpauses it
         * (per the WAAPI spec), which breaks autoplay: false.
         */ if (options.startTime !== undefined && options.autoplay !== false) this.startTime = options.startTime;
        this.options = options;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read committed styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */ updateMotionValue(value) {
        const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
        if (!motionValue) return;
        if (value !== undefined) {
            motionValue.set(value);
            return;
        }
        const sampleAnimation = new (0, _jsanimationMjs.JSAnimation)({
            ...options,
            autoplay: false
        });
        /**
         * Use wall-clock elapsed time for sampling.
         * Under CPU load, WAAPI's currentTime may not reflect actual
         * elapsed time, causing incorrect sampling and visual jumps.
         */ const sampleTime = Math.max(sampleDelta, (0, _syncTimeMjs.time).now() - this.startTime);
        const delta = (0, _motionUtils.clamp)(0, sampleDelta, sampleTime - sampleDelta);
        const current = sampleAnimation.sample(sampleTime).value;
        /**
         * Write the estimated value to inline style so it persists
         * after cancel(), covering the async gap before the next
         * animation starts.
         */ const { name } = this.options;
        if (element && name) (0, _styleSetMjs.setStyle)(element, name, current);
        motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
        sampleAnimation.stop();
    }
}

},{"motion-utils":"2BS9B","../frameloop/sync-time.mjs":"c5O7T","../render/dom/style-set.mjs":"j21rE","./JSAnimation.mjs":"eeqfR","./NativeAnimation.mjs":"dek1a","./utils/replace-transition-type.mjs":"1z8sQ","./waapi/utils/unsupported-easing.mjs":"4g67H","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j21rE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
var _isCssVarMjs = require("./is-css-var.mjs");
function setStyle(element, name, value) {
    (0, _isCssVarMjs.isCSSVar)(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}

},{"./is-css-var.mjs":"gQk8C","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gQk8C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCSSVar", ()=>isCSSVar);
const isCSSVar = (name)=>name.startsWith("--");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dek1a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeAnimation", ()=>NativeAnimation);
var _motionUtils = require("motion-utils");
var _styleSetMjs = require("../render/dom/style-set.mjs");
var _scrollTimelineMjs = require("../utils/supports/scroll-timeline.mjs");
var _getFinalMjs = require("./keyframes/get-final.mjs");
var _withPromiseMjs = require("./utils/WithPromise.mjs");
var _startWaapiAnimationMjs = require("./waapi/start-waapi-animation.mjs");
var _applyGeneratorMjs = require("./waapi/utils/apply-generator.mjs");
/**
 * NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
 */ class NativeAnimation extends (0, _withPromiseMjs.WithPromise) {
    constructor(options){
        super();
        this.finishedTime = null;
        this.isStopped = false;
        /**
         * Tracks a manually-set start time that takes precedence over WAAPI's
         * dynamic startTime. This is cleared when play() or time setter is called,
         * allowing WAAPI to take over timing.
         */ this.manualStartTime = null;
        if (!options) return;
        const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
        this.isPseudoElement = Boolean(pseudoElement);
        this.allowFlatten = allowFlatten;
        this.options = options;
        (0, _motionUtils.invariant)(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const transition = (0, _applyGeneratorMjs.applyGeneratorOptions)(options);
        this.animation = (0, _startWaapiAnimationMjs.startWaapiAnimation)(element, name, keyframes, transition, pseudoElement);
        if (transition.autoplay === false) this.animation.pause();
        this.animation.onfinish = ()=>{
            this.finishedTime = this.time;
            if (!pseudoElement) {
                const keyframe = (0, _getFinalMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe, this.speed);
                if (this.updateMotionValue) this.updateMotionValue(keyframe);
                /**
                 * If we can, we want to commit the final style as set by the user,
                 * rather than the computed keyframe value supplied by the animation.
                 * We always do this, even when a motion value is present, to prevent
                 * a visual flash in Firefox where the WAAPI animation's fill is removed
                 * during cancel() before the scheduled render can apply the correct value.
                 */ (0, _styleSetMjs.setStyle)(element, name, keyframe);
                this.animation.cancel();
            }
            onComplete?.();
            this.notifyFinished();
        };
    }
    play() {
        if (this.isStopped) return;
        this.manualStartTime = null;
        this.animation.play();
        if (this.state === "finished") this.updateFinished();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.finish?.();
    }
    cancel() {
        try {
            this.animation.cancel();
        } catch (e) {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = true;
        const { state } = this;
        if (state === "idle" || state === "finished") return;
        if (this.updateMotionValue) this.updateMotionValue();
        else this.commitStyles();
        if (!this.isPseudoElement) this.cancel();
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */ commitStyles() {
        const element = this.options?.element;
        if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
    }
    get duration() {
        const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
        return (0, _motionUtils.millisecondsToSeconds)(Number(duration));
    }
    get iterationDuration() {
        const { delay = 0 } = this.options || {};
        return this.duration + (0, _motionUtils.millisecondsToSeconds)(delay);
    }
    get time() {
        return (0, _motionUtils.millisecondsToSeconds)(Number(this.animation.currentTime) || 0);
    }
    set time(newTime) {
        const wasFinished = this.finishedTime !== null;
        this.manualStartTime = null;
        this.finishedTime = null;
        this.animation.currentTime = (0, _motionUtils.secondsToMilliseconds)(newTime);
        if (wasFinished) this.animation.pause();
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */ get speed() {
        return this.animation.playbackRate;
    }
    set speed(newSpeed) {
        // Allow backwards playback after finishing
        if (newSpeed < 0) this.finishedTime = null;
        this.animation.playbackRate = newSpeed;
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(newStartTime) {
        this.manualStartTime = this.animation.startTime = newStartTime;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */ attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
        if (this.allowFlatten) this.animation.effect?.updateTiming({
            easing: "linear"
        });
        this.animation.onfinish = null;
        if (timeline && (0, _scrollTimelineMjs.supportsScrollTimeline)()) {
            this.animation.timeline = timeline;
            if (rangeStart) this.animation.rangeStart = rangeStart;
            if (rangeEnd) this.animation.rangeEnd = rangeEnd;
            return 0, _motionUtils.noop;
        } else return observe(this);
    }
}

},{"motion-utils":[["invariant","e5pKF"],["millisecondsToSeconds","k1haA"],["secondsToMilliseconds","k1haA"],["noop","7MDWX"]],"../render/dom/style-set.mjs":"j21rE","../utils/supports/scroll-timeline.mjs":"ezgAO","./keyframes/get-final.mjs":"gcv7j","./utils/WithPromise.mjs":"jG93b","./waapi/start-waapi-animation.mjs":"byvJw","./waapi/utils/apply-generator.mjs":"iH54I","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ezgAO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsScrollTimeline", ()=>supportsScrollTimeline);
parcelHelpers.export(exports, "supportsViewTimeline", ()=>supportsViewTimeline);
var _memoMjs = require("./memo.mjs");
const supportsScrollTimeline = /* @__PURE__ */ (0, _memoMjs.memoSupports)(()=>window.ScrollTimeline !== undefined, "scrollTimeline");
const supportsViewTimeline = /* @__PURE__ */ (0, _memoMjs.memoSupports)(()=>window.ViewTimeline !== undefined, "viewTimeline");

},{"./memo.mjs":"5Fv9a","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5Fv9a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoSupports", ()=>memoSupports);
var _motionUtils = require("motion-utils");
var _flagsMjs = require("./flags.mjs");
function memoSupports(callback, supportsFlag) {
    const memoized = (0, _motionUtils.memo)(callback);
    return ()=>(0, _flagsMjs.supportsFlags)[supportsFlag] ?? memoized();
}

},{"motion-utils":"idExm","./flags.mjs":"6TmSQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"idExm":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6TmSQ":[function(require,module,exports,__globalThis) {
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsFlags", ()=>supportsFlags);
const supportsFlags = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"byvJw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWaapiAnimation", ()=>startWaapiAnimation);
var _mapEasingMjs = require("./easing/map-easing.mjs");
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement) {
    const keyframeOptions = {
        [valueName]: keyframes
    };
    if (times) keyframeOptions.offset = times;
    const easing = (0, _mapEasingMjs.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) keyframeOptions.easing = easing;
    const options = {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    };
    if (pseudoElement) options.pseudoElement = pseudoElement;
    return element.animate(keyframeOptions, options);
}

},{"./easing/map-easing.mjs":"Ddx7M","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"Ddx7M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapEasingToNativeEasing", ()=>mapEasingToNativeEasing);
var _motionUtils = require("motion-utils");
var _linearEasingMjs = require("../../../utils/supports/linear-easing.mjs");
var _linearMjs = require("../utils/linear.mjs");
var _cubicBezierMjs = require("./cubic-bezier.mjs");
var _supportedMjs = require("./supported.mjs");
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) return undefined;
    else if (typeof easing === "function") return (0, _linearEasingMjs.supportsLinearEasing)() ? (0, _linearMjs.generateLinearEasing)(easing, duration) : "ease-out";
    else if ((0, _motionUtils.isBezierDefinition)(easing)) return (0, _cubicBezierMjs.cubicBezierAsString)(easing);
    else if (Array.isArray(easing)) return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || (0, _supportedMjs.supportedWaapiEasing).easeOut);
    else return (0, _supportedMjs.supportedWaapiEasing)[easing];
}

},{"motion-utils":"6gPET","../../../utils/supports/linear-easing.mjs":"4mFyc","../utils/linear.mjs":"baZ17","./cubic-bezier.mjs":"euGQw","./supported.mjs":"5rdjC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4mFyc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsLinearEasing", ()=>supportsLinearEasing);
var _memoMjs = require("./memo.mjs");
const supportsLinearEasing = /*@__PURE__*/ (0, _memoMjs.memoSupports)(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");

},{"./memo.mjs":"5Fv9a","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"euGQw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5rdjC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportedWaapiEasing", ()=>supportedWaapiEasing);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezierAsString)([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezierAsString)([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezierAsString)([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezierAsString)([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};

},{"./cubic-bezier.mjs":"euGQw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iH54I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyGeneratorOptions", ()=>applyGeneratorOptions);
var _linearEasingMjs = require("../../../utils/supports/linear-easing.mjs");
var _isGeneratorMjs = require("../../generators/utils/is-generator.mjs");
function applyGeneratorOptions({ type, ...options }) {
    if ((0, _isGeneratorMjs.isGenerator)(type) && (0, _linearEasingMjs.supportsLinearEasing)()) return type.applyToOptions(options);
    else {
        options.duration ?? (options.duration = 300);
        options.ease ?? (options.ease = "easeOut");
    }
    return options;
}

},{"../../../utils/supports/linear-easing.mjs":"4mFyc","../../generators/utils/is-generator.mjs":"1wDLA","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4g67H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "replaceStringEasing", ()=>replaceStringEasing);
var _motionUtils = require("motion-utils");
const unsupportedEasingFunctions = {
    anticipate: (0, _motionUtils.anticipate),
    backInOut: (0, _motionUtils.backInOut),
    circInOut: (0, _motionUtils.circInOut)
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}

},{"motion-utils":[["anticipate","dKxvF"],["backInOut","eAcoE"],["circInOut","hLwRh"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1QiXm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canAnimate", ()=>canAnimate);
var _motionUtils = require("motion-utils");
var _isGeneratorMjs = require("../generators/utils/is-generator.mjs");
var _isAnimatableMjs = require("./is-animatable.mjs");
function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1) return true;
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] !== current) return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */ const originKeyframe = keyframes[0];
    if (originKeyframe === null) return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */ if (name === "display" || name === "visibility") return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0, _isAnimatableMjs.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0, _isAnimatableMjs.isAnimatable)(targetKeyframe, name);
    (0, _motionUtils.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) return false;
    return hasKeyframesChanged(keyframes) || (type === "spring" || (0, _isGeneratorMjs.isGenerator)(type)) && velocity;
}

},{"motion-utils":"e5pKF","../generators/utils/is-generator.mjs":"1wDLA","./is-animatable.mjs":"inHFH","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"inHFH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimatable", ()=>isAnimatable);
var _indexMjs = require("../../value/types/complex/index.mjs");
/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */ const isAnimatable = (value, name)=>{
    // If the list of keys that might be non-animatable grows, replace with Set
    if (name === "zIndex") return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value)) return true;
    if (typeof value === "string" && // It's animatable if we have a string
    ((0, _indexMjs.complex).test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(") // Unless it starts with "url("
    ) return true;
    return false;
};

},{"../../value/types/complex/index.mjs":"l9HIB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8rE8V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeAnimationInstant", ()=>makeAnimationInstant);
function makeAnimationInstant(options) {
    options.duration = 0;
    options.type = "keyframes";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j5IC6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsBrowserAnimation", ()=>supportsBrowserAnimation);
var _motionUtils = require("motion-utils");
var _acceleratedValuesMjs = require("../utils/accelerated-values.mjs");
var _isBrowserColorMjs = require("../utils/is-browser-color.mjs");
const colorProperties = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
]);
const supportsWaapi = /*@__PURE__*/ (0, _motionUtils.memo)(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
    const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
    const subject = motionValue?.owner?.current;
    /**
     * We use instanceof checks instead of isHTMLElement()/isSVGElement()
     * because we explicitly **don't** want elements in different timing
     * contexts (i.e. popups) to be accelerated, as it's not possible to sync
     * these animations properly with those driven from the main window
     * frameloop.
     */ if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) return false;
    const { onUpdate, transformTemplate } = motionValue.owner.getProps();
    return supportsWaapi() && name && /**
         * Force WAAPI for color properties with browser-only color formats
         * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
         */ ((0, _acceleratedValuesMjs.acceleratedValues).has(name) || colorProperties.has(name) && (0, _isBrowserColorMjs.hasBrowserOnlyColors)(keyframes)) && (name !== "transform" || !transformTemplate) && /**
         * If we're outputting values to onUpdate then we can't use WAAPI as there's
         * no way to read the value from WAAPI every frame.
         */ !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}

},{"motion-utils":"idExm","../utils/accelerated-values.mjs":"gEJ3G","../utils/is-browser-color.mjs":"llHx4","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gEJ3G":[function(require,module,exports,__globalThis) {
/**
 * A list of values that can be hardware-accelerated.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "acceleratedValues", ()=>acceleratedValues);
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"llHx4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasBrowserOnlyColors", ()=>hasBrowserOnlyColors);
const browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
    for(let i = 0; i < keyframes.length; i++){
        if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jlH9x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
var _resolveTransitionMjs = require("./resolve-transition.mjs");
function getValueTransition(transition, key) {
    const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
    if (valueTransition !== transition) return (0, _resolveTransitionMjs.resolveTransition)(valueTransition, transition);
    return valueTransition;
}

},{"./resolve-transition.mjs":"gOHB4","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gOHB4":[function(require,module,exports,__globalThis) {
/**
 * If `transition` has `inherit: true`, shallow-merge it with
 * `parentTransition` (child keys win) and strip the `inherit` key.
 * Otherwise return `transition` unchanged.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveTransition", ()=>resolveTransition);
function resolveTransition(transition, parentTransition) {
    if (transition?.inherit && parentTransition) {
        const { inherit: _, ...rest } = transition;
        return {
            ...parentTransition,
            ...rest
        };
    }
    return transition;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d1KKw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultTransition", ()=>getDefaultTransition);
var _keysTransformMjs = require("../../render/utils/keys-transform.mjs");
const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
const criticallyDampedSpring = (target)=>({
        type: "spring",
        stiffness: 550,
        damping: target === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    });
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */ const ease = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
const getDefaultTransition = (valueKey, { keyframes })=>{
    if (keyframes.length > 2) return keyframesTransition;
    else if ((0, _keysTransformMjs.transformProps).has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
    return ease;
};

},{"../../render/utils/keys-transform.mjs":"3EaJv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"127jx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTransitionDefined", ()=>isTransitionDefined);
const orchestrationKeys = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed"
]);
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */ function isTransitionDefined(transition) {
    for(const key in transition){
        if (!orchestrationKeys.has(key)) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hYEz3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateTarget", ()=>animateTarget);
var _getValueTransitionMjs = require("../utils/get-value-transition.mjs");
var _resolveTransitionMjs = require("../utils/resolve-transition.mjs");
var _keysPositionMjs = require("../../render/utils/keys-position.mjs");
var _settersMjs = require("../../render/utils/setters.mjs");
var _addWillChangeMjs = require("../../value/will-change/add-will-change.mjs");
var _getAppearIdMjs = require("../optimized-appear/get-appear-id.mjs");
var _motionValueMjs = require("./motion-value.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */ function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    let { transition, transitionEnd, ...target } = targetAndTransition;
    const defaultTransition = visualElement.getDefaultTransition();
    transition = transition ? (0, _resolveTransitionMjs.resolveTransition)(transition, defaultTransition) : defaultTransition;
    const reduceMotion = transition?.reduceMotion;
    const skipAnimations = transition?.skipAnimations;
    if (transitionOverride) transition = transitionOverride;
    const animations = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    const path = transition?.path;
    if (path) // path mutates `target` to claim x/y; loop below skips them.
    path.animateVisualElement(visualElement, target, transition, delay, animations);
    for(const key in target){
        const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
        const valueTarget = target[key];
        if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
        const valueTransition = {
            delay,
            ...(0, _getValueTransitionMjs.getValueTransition)(transition || {}, key)
        };
        if (skipAnimations) valueTransition.skipAnimations = true;
        /**
         * If the value is already at the defined target, skip the animation.
         * We still re-assert the value via frame.update to take precedence
         * over any stale transitionEnd callbacks from previous animations.
         */ const currentValue = value.get();
        if (currentValue !== undefined && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
            (0, _frameMjs.frame).update(()=>value.set(valueTarget));
            continue;
        }
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */ let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0, _getAppearIdMjs.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, (0, _frameMjs.frame));
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0, _addWillChangeMjs.addValueToWillChange)(visualElement, key);
        const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
        value.start((0, _motionValueMjs.animateMotionValue)(key, value, valueTarget, shouldReduceMotion && (0, _keysPositionMjs.positionalKeys).has(key) ? {
            type: false
        } : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) animations.push(animation);
    }
    if (transitionEnd) {
        const applyTransitionEnd = ()=>(0, _frameMjs.frame).update(()=>{
                transitionEnd && (0, _settersMjs.setTarget)(visualElement, transitionEnd);
            });
        if (animations.length) Promise.all(animations).then(applyTransitionEnd);
        else applyTransitionEnd();
    }
    return animations;
}

},{"../utils/get-value-transition.mjs":"jlH9x","../utils/resolve-transition.mjs":"gOHB4","../../render/utils/keys-position.mjs":"5yxWD","../../render/utils/setters.mjs":"bDr1V","../../value/will-change/add-will-change.mjs":"5XxCw","../optimized-appear/get-appear-id.mjs":"eZ2sD","./motion-value.mjs":"jreNm","../../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5yxWD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionalKeys", ()=>positionalKeys);
var _keysTransformMjs = require("./keys-transform.mjs");
const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...(0, _keysTransformMjs.transformPropOrder)
]);

},{"./keys-transform.mjs":"3EaJv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bDr1V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTarget", ()=>setTarget);
var _indexMjs = require("../../value/index.mjs");
var _resolveDynamicVariantsMjs = require("./resolve-dynamic-variants.mjs");
var _isKeyframesTargetMjs = require("./is-keyframes-target.mjs");
/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */ function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
    else visualElement.addValue(key, (0, _indexMjs.motionValue)(value));
}
function resolveFinalValueInKeyframes(v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0, _isKeyframesTargetMjs.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
    const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = {
        ...target,
        ...transitionEnd
    };
    for(const key in target){
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}

},{"../../value/index.mjs":"c1jKT","./resolve-dynamic-variants.mjs":"S4pyf","./is-keyframes-target.mjs":"4ke8d","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"S4pyf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariant", ()=>resolveVariant);
var _resolveVariantsMjs = require("./resolve-variants.mjs");
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0, _resolveVariantsMjs.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}

},{"./resolve-variants.mjs":"gtH2y","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gtH2y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariantFromProps", ()=>resolveVariantFromProps);
function getValueState(visualElement) {
    const state = [
        {},
        {}
    ];
    visualElement?.values.forEach((value, key)=>{
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */ if (typeof definition === "string") definition = props.variants && props.variants[definition];
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4ke8d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isKeyframesTarget", ()=>isKeyframesTarget);
const isKeyframesTarget = (v)=>{
    return Array.isArray(v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5XxCw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addValueToWillChange", ()=>addValueToWillChange);
var _motionUtils = require("motion-utils");
var _isMjs = require("./is.mjs");
function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */ if ((0, _isMjs.isWillChangeMotionValue)(willChange)) return willChange.add(key);
    else if (!willChange && (0, _motionUtils.MotionGlobalConfig).WillChange) {
        const newWillChange = new (0, _motionUtils.MotionGlobalConfig).WillChange("auto");
        visualElement.addValue("willChange", newWillChange);
        newWillChange.add(key);
    }
}

},{"motion-utils":"82hsq","./is.mjs":"b6nRr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"b6nRr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWillChangeMotionValue", ()=>isWillChangeMotionValue);
var _isMotionValueMjs = require("../utils/is-motion-value.mjs");
function isWillChangeMotionValue(value) {
    return Boolean((0, _isMotionValueMjs.isMotionValue)(value) && value.add);
}

},{"../utils/is-motion-value.mjs":"75Nnh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eZ2sD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptimisedAppearId", ()=>getOptimisedAppearId);
var _dataIdMjs = require("./data-id.mjs");
function getOptimisedAppearId(visualElement) {
    return visualElement.props[0, _dataIdMjs.optimizedAppearDataAttribute];
}

},{"./data-id.mjs":"gyrYR","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gyrYR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optimizedAppearDataAttribute", ()=>optimizedAppearDataAttribute);
parcelHelpers.export(exports, "optimizedAppearDataId", ()=>optimizedAppearDataId);
var _camelToDashMjs = require("../../render/dom/utils/camel-to-dash.mjs");
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0, _camelToDashMjs.camelToDash)(optimizedAppearDataId);

},{"../../render/dom/utils/camel-to-dash.mjs":"cd2hc","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cd2hc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelToDash", ()=>camelToDash);
function camelToDash(str) {
    return str.replace(/([A-Z])/g, (match)=>`-${match.toLowerCase()}`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"mujCZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "visualElementStore", ()=>visualElementStore);
const visualElementStore = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"vtTMy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDOMVisualElement", ()=>createDOMVisualElement);
parcelHelpers.export(exports, "createObjectVisualElement", ()=>createObjectVisualElement);
var _motionDom = require("motion-dom");
function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, _motionDom.isSVGElement)(element) && !(0, _motionDom.isSVGSVGElement)(element) ? new (0, _motionDom.SVGVisualElement)(options) : new (0, _motionDom.HTMLVisualElement)(options);
    node.mount(element);
    (0, _motionDom.visualElementStore).set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new (0, _motionDom.ObjectVisualElement)(options);
    node.mount(subject);
    (0, _motionDom.visualElementStore).set(subject, node);
}

},{"motion-dom":[["HTMLVisualElement","hgbUy"],["isSVGElement","71mHY"],["isSVGSVGElement","cF6lu"],["ObjectVisualElement","aJw3C"],["SVGVisualElement","628iK"],["visualElementStore","mujCZ"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hgbUy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLVisualElement", ()=>HTMLVisualElement);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
var _motionUtils = require("motion-utils");
var _isCssVariableMjs = require("../../animation/utils/is-css-variable.mjs");
var _keysTransformMjs = require("../utils/keys-transform.mjs");
var _parseTransformMjs = require("../dom/parse-transform.mjs");
var _measureMjs = require("../../projection/utils/measure.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _buildStylesMjs = require("./utils/build-styles.mjs");
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "html";
        this.renderInstance = (0, _renderMjs.renderHTML);
    }
    mount(instance) {
        /**
         * If a custom component forwards its ref to something other than a
         * HTML/SVG element (a class instance, an imperative handle) there's
         * nothing for Motion to style, measure or attach gestures to. #2777
         */ (0, _motionUtils.invariant)(Boolean(instance.style), "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref");
        super.mount(instance);
    }
    readValueFromInstance(instance, key) {
        if ((0, _keysTransformMjs.transformProps).has(key)) return this.projection?.isProjecting ? (0, _parseTransformMjs.defaultTransformValue)(key) : (0, _parseTransformMjs.readTransformValue)(instance, key);
        else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0, _isCssVariableMjs.isCSSVariableName)(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0, _measureMjs.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0, _buildStylesMjs.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
}

},{"motion-utils":"e5pKF","../../animation/utils/is-css-variable.mjs":"gaLfK","../utils/keys-transform.mjs":"3EaJv","../dom/parse-transform.mjs":"gZIf2","../../projection/utils/measure.mjs":"6TKnr","../dom/DOMVisualElement.mjs":"7JTbf","./utils/build-styles.mjs":"7loFt","./utils/render.mjs":"k6XQH","./utils/scrape-motion-values.mjs":"k4A6E","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6TKnr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measurePageBox", ()=>measurePageBox);
parcelHelpers.export(exports, "measureViewportBox", ()=>measureViewportBox);
var _conversionMjs = require("../geometry/conversion.mjs");
var _deltaApplyMjs = require("../geometry/delta-apply.mjs");
function measureViewportBox(instance, transformPoint) {
    return (0, _conversionMjs.convertBoundingBoxToBox)((0, _conversionMjs.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0, _deltaApplyMjs.translateAxis)(viewportBox.x, scroll.offset.x);
        (0, _deltaApplyMjs.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}

},{"../geometry/conversion.mjs":"8hG8z","../geometry/delta-apply.mjs":"kg4pP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8hG8z":[function(require,module,exports,__globalThis) {
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertBoundingBoxToBox", ()=>convertBoundingBoxToBox);
parcelHelpers.export(exports, "convertBoxToBoundingBox", ()=>convertBoxToBoundingBox);
parcelHelpers.export(exports, "transformBoxPoints", ()=>transformBoxPoints);
function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */ function transformBoxPoints(point, transformPoint) {
    if (!transformPoint) return point;
    const topLeft = transformPoint({
        x: point.left,
        y: point.top
    });
    const bottomRight = transformPoint({
        x: point.right,
        y: point.bottom
    });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kg4pP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyAxisDelta", ()=>applyAxisDelta);
parcelHelpers.export(exports, "applyBoxDelta", ()=>applyBoxDelta);
parcelHelpers.export(exports, "applyPointDelta", ()=>applyPointDelta);
parcelHelpers.export(exports, "applyTreeDeltas", ()=>applyTreeDeltas);
parcelHelpers.export(exports, "scalePoint", ()=>scalePoint);
parcelHelpers.export(exports, "transformAxis", ()=>transformAxis);
parcelHelpers.export(exports, "transformBox", ()=>transformBox);
parcelHelpers.export(exports, "translateAxis", ()=>translateAxis);
var _numberMjs = require("../../utils/mix/number.mjs");
var _hasTransformMjs = require("../utils/has-transform.mjs");
/**
 * Scales a point based on a factor and an originPoint
 */ function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */ function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) point = scalePoint(point, boxScale, originPoint);
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */ function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */ function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */ function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength) return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for(let i = 0; i < treeLength; i++){
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */ const { visualElement } = node.options;
        if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
        if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
            translateAxis(box.x, -node.scroll.offset.x);
            translateAxis(box.y, -node.scroll.offset.y);
        }
        if (delta) {
            // Incoporate each ancestor's scale into a cumulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0, _hasTransformMjs.hasTransform)(node.latestValues)) transformBox(box, node.latestValues, node.layout?.layoutBox);
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */ if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1.0;
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1.0;
}
function translateAxis(axis, distance) {
    axis.min += distance;
    axis.max += distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */ function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0, _numberMjs.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function resolveAxisTranslate(value, axis) {
    if (typeof value === "string") return parseFloat(value) / 100 * (axis.max - axis.min);
    return value;
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */ function transformBox(box, transform, sourceBox) {
    const resolveBox = sourceBox ?? box;
    transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}

},{"../../utils/mix/number.mjs":"eSNQQ","../utils/has-transform.mjs":"aDFUL","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aDFUL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "has2DTranslate", ()=>has2DTranslate);
parcelHelpers.export(exports, "hasScale", ()=>hasScale);
parcelHelpers.export(exports, "hasTransform", ()=>hasTransform);
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7JTbf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMVisualElement", ()=>DOMVisualElement);
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _domkeyframesResolverMjs = require("../../animation/keyframes/DOMKeyframesResolver.mjs");
var _visualElementMjs = require("../VisualElement.mjs");
class DOMVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.KeyframeResolver = (0, _domkeyframesResolverMjs.DOMKeyframesResolver);
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */ return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        const style = props.style;
        return style ? style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0, _isMotionValueMjs.isMotionValue)(children)) this.childSubscription = children.on("change", (latest)=>{
            if (this.current) this.current.textContent = `${latest}`;
        });
    }
}

},{"../../value/utils/is-motion-value.mjs":"75Nnh","../../animation/keyframes/DOMKeyframesResolver.mjs":"7KgAF","../VisualElement.mjs":"93dUM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7KgAF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMKeyframesResolver", ()=>DOMKeyframesResolver);
var _keysPositionMjs = require("../../render/utils/keys-position.mjs");
var _dimensionsMjs = require("../../value/types/dimensions.mjs");
var _cssVariablesConversionMjs = require("../utils/css-variables-conversion.mjs");
var _isCssVariableMjs = require("../utils/is-css-variable.mjs");
var _keyframesResolverMjs = require("./KeyframesResolver.mjs");
var _isNoneMjs = require("./utils/is-none.mjs");
var _makeNoneAnimatableMjs = require("./utils/make-none-animatable.mjs");
var _unitConversionMjs = require("./utils/unit-conversion.mjs");
class DOMKeyframesResolver extends (0, _keyframesResolverMjs.KeyframeResolver) {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element){
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current) return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */ for(let i = 0; i < unresolvedKeyframes.length; i++){
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0, _isCssVariableMjs.isCSSVariableToken)(keyframe)) {
                    const resolved = (0, _cssVariablesConversionMjs.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) unresolvedKeyframes[i] = resolved;
                    if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */ this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */ if (!(0, _keysPositionMjs.positionalKeys).has(name) || unresolvedKeyframes.length !== 2) return;
        const [origin, target] = unresolvedKeyframes;
        const originType = (0, _dimensionsMjs.findDimensionValueType)(origin);
        const targetType = (0, _dimensionsMjs.findDimensionValueType)(target);
        /**
         * If one keyframe contains embedded CSS variables (e.g. in calc()) and the other
         * doesn't, we need to measure to convert to pixels. This handles GitHub issue #3410.
         */ const originHasVar = (0, _isCssVariableMjs.containsCSSVariable)(origin);
        const targetHasVar = (0, _isCssVariableMjs.containsCSSVariable)(target);
        if (originHasVar !== targetHasVar && (0, _unitConversionMjs.positionalValues)[name]) {
            this.needsMeasurement = true;
            return;
        }
        /**
         * Either we don't recognise these value types or we can animate between them.
         */ if (originType === targetType) return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */ if ((0, _unitConversionMjs.isNumOrPxType)(originType) && (0, _unitConversionMjs.isNumOrPxType)(targetType)) for(let i = 0; i < unresolvedKeyframes.length; i++){
            const value = unresolvedKeyframes[i];
            if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
        }
        else if ((0, _unitConversionMjs.positionalValues)[name]) /**
             * Else, the only way to resolve this is by measuring the element.
             */ this.needsMeasurement = true;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for(let i = 0; i < unresolvedKeyframes.length; i++)if (unresolvedKeyframes[i] === null || (0, _isNoneMjs.isNone)(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
        if (noneKeyframeIndexes.length) (0, _makeNoneAnimatableMjs.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current) return;
        if (name === "height") this.suspendedScrollY = window.pageYOffset;
        this.measuredOrigin = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
    measureEndState() {
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current) return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) this.finalKeyframe = finalKeyframe;
        // If we removed transform values, reapply them before the next render
        if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue])=>{
            element.getValue(unsetTransformName).set(unsetTransformValue);
        });
        this.resolveNoneKeyframes();
    }
}

},{"../../render/utils/keys-position.mjs":"5yxWD","../../value/types/dimensions.mjs":"9247P","../utils/css-variables-conversion.mjs":"geYi8","../utils/is-css-variable.mjs":"gaLfK","./KeyframesResolver.mjs":"i94G6","./utils/is-none.mjs":"ji70V","./utils/make-none-animatable.mjs":"3shjK","./utils/unit-conversion.mjs":"3j57i","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9247P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dimensionValueTypes", ()=>dimensionValueTypes);
parcelHelpers.export(exports, "findDimensionValueType", ()=>findDimensionValueType);
var _autoMjs = require("./auto.mjs");
var _indexMjs = require("./numbers/index.mjs");
var _unitsMjs = require("./numbers/units.mjs");
var _testMjs = require("./test.mjs");
/**
 * A list of value types commonly used for dimensions
 */ const dimensionValueTypes = [
    (0, _indexMjs.number),
    (0, _unitsMjs.px),
    (0, _unitsMjs.percent),
    (0, _unitsMjs.degrees),
    (0, _unitsMjs.vw),
    (0, _unitsMjs.vh),
    (0, _autoMjs.auto)
];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */ const findDimensionValueType = (v)=>dimensionValueTypes.find((0, _testMjs.testValueType)(v));

},{"./auto.mjs":"5UkRZ","./numbers/index.mjs":"2uUit","./numbers/units.mjs":"JFyVd","./test.mjs":"caJOd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5UkRZ":[function(require,module,exports,__globalThis) {
/**
 * ValueType for "auto"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auto", ()=>auto);
const auto = {
    test: (v)=>v === "auto",
    parse: (v)=>v
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"caJOd":[function(require,module,exports,__globalThis) {
/**
 * Tests a provided value against a ValueType
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testValueType", ()=>testValueType);
const testValueType = (v)=>(type)=>type.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"geYi8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVariableValue", ()=>getVariableValue);
parcelHelpers.export(exports, "parseCSSVariable", ()=>parseCSSVariable);
var _motionUtils = require("motion-utils");
var _isCssVariableMjs = require("./is-css-variable.mjs");
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */ const splitCSSVariableRegex = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    const [, token1, token2, fallback] = match;
    return [
        `--${token1 ?? token2}`,
        fallback
    ];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0, _motionUtils.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token) return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0, _motionUtils.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0, _isCssVariableMjs.isCSSVariableToken)(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

},{"motion-utils":[["invariant","e5pKF"],["isNumericalString","3SchA"]],"./is-css-variable.mjs":"gaLfK","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3SchA":[function(require,module,exports,__globalThis) {
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumericalString", ()=>isNumericalString);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ji70V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNone", ()=>isNone);
var _motionUtils = require("motion-utils");
function isNone(value) {
    if (typeof value === "number") return value === 0;
    else if (value !== null) return value === "none" || value === "0" || (0, _motionUtils.isZeroValueString)(value);
    else return true;
}

},{"motion-utils":"65R6M","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"65R6M":[function(require,module,exports,__globalThis) {
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isZeroValueString", ()=>isZeroValueString);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3shjK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeNoneKeyframesAnimatable", ()=>makeNoneKeyframesAnimatable);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _animatableNoneMjs = require("../../../value/types/utils/animatable-none.mjs");
/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */ const invalidTemplates = new Set([
    "auto",
    "none",
    "0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while(i < unresolvedKeyframes.length && !animatableTemplate){
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && (0, _indexMjs.analyseComplexValue)(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
        i++;
    }
    if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes)unresolvedKeyframes[noneIndex] = (0, _animatableNoneMjs.getAnimatableNone)(name, animatableTemplate);
}

},{"../../../value/types/complex/index.mjs":"l9HIB","../../../value/types/utils/animatable-none.mjs":"7g8cX","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7g8cX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimatableNone", ()=>getAnimatableNone);
var _indexMjs = require("../complex/index.mjs");
var _filterMjs = require("../complex/filter.mjs");
var _maskMjs = require("../complex/mask.mjs");
var _defaultsMjs = require("../maps/defaults.mjs");
const customTypes = /*@__PURE__*/ new Set([
    (0, _filterMjs.filter),
    (0, _maskMjs.mask)
]);
function getAnimatableNone(key, value) {
    let defaultValueType = (0, _defaultsMjs.getDefaultValueType)(key);
    if (!customTypes.has(defaultValueType)) defaultValueType = (0, _indexMjs.complex);
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

},{"../complex/index.mjs":"l9HIB","../complex/filter.mjs":"8pbPM","../complex/mask.mjs":"cjIBp","../maps/defaults.mjs":"k9OiN","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8pbPM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter);
var _indexMjs = require("./index.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
/**
 * Properties that should default to 1 or 100%
 */ const maxDefaults = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow") return v;
    const [number] = value.match((0, _floatRegexMjs.floatRegex)) || [];
    if (!number) return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value) defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ...(0, _indexMjs.complex),
    getAnimatableNone: (v)=>{
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
};

},{"./index.mjs":"l9HIB","../utils/float-regex.mjs":"lUP9R","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cjIBp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mask", ()=>mask);
var _indexMjs = require("./index.mjs");
const mask = {
    ...(0, _indexMjs.complex),
    getAnimatableNone: (v)=>{
        const parsed = (0, _indexMjs.complex).parse(v);
        const transformer = (0, _indexMjs.complex).createTransformer(v);
        return transformer(parsed.map((v)=>typeof v === "number" ? 0 : typeof v === "object" ? {
                ...v,
                alpha: 1
            } : v));
    }
};

},{"./index.mjs":"l9HIB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k9OiN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultValueTypes", ()=>defaultValueTypes);
parcelHelpers.export(exports, "getDefaultValueType", ()=>getDefaultValueType);
var _indexMjs = require("../color/index.mjs");
var _filterMjs = require("../complex/filter.mjs");
var _maskMjs = require("../complex/mask.mjs");
var _numberMjs = require("./number.mjs");
/**
 * A map of default value types for common values
 */ const defaultValueTypes = {
    ...(0, _numberMjs.numberValueTypes),
    color: // Color props
    (0, _indexMjs.color),
    backgroundColor: (0, _indexMjs.color),
    outlineColor: (0, _indexMjs.color),
    fill: (0, _indexMjs.color),
    stroke: (0, _indexMjs.color),
    // Border props
    borderColor: (0, _indexMjs.color),
    borderTopColor: (0, _indexMjs.color),
    borderRightColor: (0, _indexMjs.color),
    borderBottomColor: (0, _indexMjs.color),
    borderLeftColor: (0, _indexMjs.color),
    filter: (0, _filterMjs.filter),
    WebkitFilter: (0, _filterMjs.filter),
    mask: (0, _maskMjs.mask),
    WebkitMask: (0, _maskMjs.mask)
};
/**
 * Gets the default ValueType for the provided value key
 */ const getDefaultValueType = (key)=>defaultValueTypes[key];

},{"../color/index.mjs":"gSiiB","../complex/filter.mjs":"8pbPM","../complex/mask.mjs":"cjIBp","./number.mjs":"k1ur4","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k1ur4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numberValueTypes", ()=>numberValueTypes);
var _intMjs = require("../int.mjs");
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
var _transformMjs = require("./transform.mjs");
const numberValueTypes = {
    // Border props
    borderWidth: (0, _unitsMjs.px),
    borderTopWidth: (0, _unitsMjs.px),
    borderRightWidth: (0, _unitsMjs.px),
    borderBottomWidth: (0, _unitsMjs.px),
    borderLeftWidth: (0, _unitsMjs.px),
    borderRadius: (0, _unitsMjs.px),
    borderTopLeftRadius: (0, _unitsMjs.px),
    borderTopRightRadius: (0, _unitsMjs.px),
    borderBottomRightRadius: (0, _unitsMjs.px),
    borderBottomLeftRadius: (0, _unitsMjs.px),
    // Positioning props
    width: (0, _unitsMjs.px),
    maxWidth: (0, _unitsMjs.px),
    height: (0, _unitsMjs.px),
    maxHeight: (0, _unitsMjs.px),
    top: (0, _unitsMjs.px),
    right: (0, _unitsMjs.px),
    bottom: (0, _unitsMjs.px),
    left: (0, _unitsMjs.px),
    inset: (0, _unitsMjs.px),
    insetBlock: (0, _unitsMjs.px),
    insetBlockStart: (0, _unitsMjs.px),
    insetBlockEnd: (0, _unitsMjs.px),
    insetInline: (0, _unitsMjs.px),
    insetInlineStart: (0, _unitsMjs.px),
    insetInlineEnd: (0, _unitsMjs.px),
    // Spacing props
    padding: (0, _unitsMjs.px),
    paddingTop: (0, _unitsMjs.px),
    paddingRight: (0, _unitsMjs.px),
    paddingBottom: (0, _unitsMjs.px),
    paddingLeft: (0, _unitsMjs.px),
    paddingBlock: (0, _unitsMjs.px),
    paddingBlockStart: (0, _unitsMjs.px),
    paddingBlockEnd: (0, _unitsMjs.px),
    paddingInline: (0, _unitsMjs.px),
    paddingInlineStart: (0, _unitsMjs.px),
    paddingInlineEnd: (0, _unitsMjs.px),
    margin: (0, _unitsMjs.px),
    marginTop: (0, _unitsMjs.px),
    marginRight: (0, _unitsMjs.px),
    marginBottom: (0, _unitsMjs.px),
    marginLeft: (0, _unitsMjs.px),
    marginBlock: (0, _unitsMjs.px),
    marginBlockStart: (0, _unitsMjs.px),
    marginBlockEnd: (0, _unitsMjs.px),
    marginInline: (0, _unitsMjs.px),
    marginInlineStart: (0, _unitsMjs.px),
    marginInlineEnd: (0, _unitsMjs.px),
    // Typography
    fontSize: (0, _unitsMjs.px),
    // Misc
    backgroundPositionX: (0, _unitsMjs.px),
    backgroundPositionY: (0, _unitsMjs.px),
    ...(0, _transformMjs.transformValueTypes),
    zIndex: (0, _intMjs.int),
    // SVG
    fillOpacity: (0, _indexMjs.alpha),
    strokeOpacity: (0, _indexMjs.alpha),
    numOctaves: (0, _intMjs.int)
};

},{"../int.mjs":"1fpLR","../numbers/index.mjs":"2uUit","../numbers/units.mjs":"JFyVd","./transform.mjs":"gzkmm","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1fpLR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "int", ()=>int);
var _indexMjs = require("./numbers/index.mjs");
const int = {
    ...(0, _indexMjs.number),
    transform: Math.round
};

},{"./numbers/index.mjs":"2uUit","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gzkmm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformValueTypes", ()=>transformValueTypes);
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
const transformValueTypes = {
    rotate: (0, _unitsMjs.degrees),
    /**
     * Internal channel for `transition.path` orientToPath. Composed onto
     * `rotate` at the transform-build sites so the user's `rotate` is
     * never read or overwritten. Not part of `transformPropOrder`.
     */ pathRotation: (0, _unitsMjs.degrees),
    rotateX: (0, _unitsMjs.degrees),
    rotateY: (0, _unitsMjs.degrees),
    rotateZ: (0, _unitsMjs.degrees),
    scale: (0, _indexMjs.scale),
    scaleX: (0, _indexMjs.scale),
    scaleY: (0, _indexMjs.scale),
    scaleZ: (0, _indexMjs.scale),
    skew: (0, _unitsMjs.degrees),
    skewX: (0, _unitsMjs.degrees),
    skewY: (0, _unitsMjs.degrees),
    distance: (0, _unitsMjs.px),
    translateX: (0, _unitsMjs.px),
    translateY: (0, _unitsMjs.px),
    translateZ: (0, _unitsMjs.px),
    x: (0, _unitsMjs.px),
    y: (0, _unitsMjs.px),
    z: (0, _unitsMjs.px),
    perspective: (0, _unitsMjs.px),
    transformPerspective: (0, _unitsMjs.px),
    opacity: (0, _indexMjs.alpha),
    originX: (0, _unitsMjs.progressPercentage),
    originY: (0, _unitsMjs.progressPercentage),
    originZ: (0, _unitsMjs.px)
};

},{"../numbers/index.mjs":"2uUit","../numbers/units.mjs":"JFyVd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"93dUM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualElement", ()=>VisualElement);
parcelHelpers.export(exports, "getFeatureDefinitions", ()=>getFeatureDefinitions);
parcelHelpers.export(exports, "setFeatureDefinitions", ()=>setFeatureDefinitions);
var _motionUtils = require("motion-utils");
var _keyframesResolverMjs = require("../animation/keyframes/KeyframesResolver.mjs");
var _nativeAnimationMjs = require("../animation/NativeAnimation.mjs");
var _acceleratedValuesMjs = require("../animation/waapi/utils/accelerated-values.mjs");
var _microtaskMjs = require("../frameloop/microtask.mjs");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _modelsMjs = require("../projection/geometry/models.mjs");
var _indexMjs = require("../value/index.mjs");
var _indexMjs1 = require("../value/types/complex/index.mjs");
var _animatableNoneMjs = require("../value/types/utils/animatable-none.mjs");
var _findMjs = require("../value/types/utils/find.mjs");
var _isMotionValueMjs = require("../value/utils/is-motion-value.mjs");
var _storeMjs = require("./store.mjs");
var _isControllingVariantsMjs = require("./utils/is-controlling-variants.mjs");
var _keysTransformMjs = require("./utils/keys-transform.mjs");
var _motionValuesMjs = require("./utils/motion-values.mjs");
var _indexMjs2 = require("./utils/reduced-motion/index.mjs");
var _resolveVariantsMjs = require("./utils/resolve-variants.mjs");
var _stateMjs = require("./utils/reduced-motion/state.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
/**
 * Static feature definitions - can be injected by framework layer
 */ let featureDefinitions = {};
/**
 * Set feature definitions for all VisualElements.
 * This should be called by the framework layer (e.g., framer-motion) during initialization.
 */ function setFeatureDefinitions(definitions) {
    featureDefinitions = definitions;
}
/**
 * Get the current feature definitions
 */ function getFeatureDefinitions() {
    return featureDefinitions;
}
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */ class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */ scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}){
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */ this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */ this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */ this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */ this.shouldReduceMotion = null;
        /**
         * Decides whether animations should be skipped for this VisualElement.
         * Useful for E2E tests and visual regression testing.
         */ this.shouldSkipAnimations = false;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */ this.values = new Map();
        this.KeyframeResolver = (0, _keyframesResolverMjs.KeyframeResolver);
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */ this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */ this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */ this.prevMotionValues = {};
        /**
         * Track whether this element has been mounted before, to detect
         * remounts after Suspense unmount/remount cycles.
         */ this.hasBeenMounted = false;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */ this.propEventSubscriptions = {};
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues);
        this.render = ()=>{
            if (!this.current) return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = ()=>{
            const now = (0, _syncTimeMjs.time).now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                (0, _frameMjs.frame).render(this.render, false, true);
            }
        };
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = {
            ...latestValues
        };
        this.initialValues = props.initial ? {
            ...latestValues
        } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.skipAnimationsConfig = skipAnimations;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0, _isControllingVariantsMjs.isControllingVariants)(props);
        this.isVariantNode = (0, _isControllingVariantsMjs.isVariantNode)(props);
        if (this.isVariantNode) this.variantChildren = new Set();
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */ const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for(const key in initialMotionValues){
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0, _isMotionValueMjs.isMotionValue)(value)) value.set(latestValues[key]);
        }
    }
    mount(instance) {
        /**
         * If this element has been mounted before (e.g. after a Suspense
         * unmount/remount), reset motion values to their initial state
         * so animations replay correctly from initial → animate.
         */ if (this.hasBeenMounted) for(const key in this.initialValues){
            this.values.get(key)?.jump(this.initialValues[key]);
            this.latestValues[key] = this.initialValues[key];
        }
        this.current = instance;
        (0, _storeMjs.visualElementStore).set(instance, this);
        if (this.projection && !this.projection.instance) this.projection.mount(instance);
        if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
        this.values.forEach((value, key)=>this.bindToMotionValue(key, value));
        /**
         * Determine reduced motion preference. Only initialize the matchMedia
         * listener if we actually need the dynamic value (i.e., when config
         * is neither "never" nor "always").
         */ if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
        else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
        else {
            if (!(0, _stateMjs.hasReducedMotionListener).current) (0, _indexMjs2.initPrefersReducedMotion)();
            this.shouldReduceMotion = (0, _stateMjs.prefersReducedMotion).current;
        }
        /**
         * Set whether animations should be skipped based on the config.
         */ this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
        this.parent?.addChild(this);
        this.update(this.props, this.presenceContext);
        this.hasBeenMounted = true;
    }
    unmount() {
        this.projection && this.projection.unmount();
        (0, _frameMjs.cancelFrame)(this.notifyUpdate);
        (0, _frameMjs.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove)=>remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent?.removeChild(this);
        for(const key in this.events)this.events[key].clear();
        for(const key in this.features){
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    addChild(child) {
        this.children.add(child);
        this.enteringChildren ?? (this.enteringChildren = new Set());
        this.enteringChildren.add(child);
    }
    removeChild(child) {
        this.children.delete(child);
        this.enteringChildren && this.enteringChildren.delete(child);
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
        if (value.accelerate && (0, _acceleratedValuesMjs.acceleratedValues).has(key) && this.current instanceof HTMLElement) {
            const { factory, keyframes, times, ease, duration } = value.accelerate;
            const animation = new (0, _nativeAnimationMjs.NativeAnimation)({
                element: this.current,
                name: key,
                keyframes,
                times,
                ease,
                duration: (0, _motionUtils.secondsToMilliseconds)(duration)
            });
            const cleanup = factory(animation);
            this.valueSubscriptions.set(key, ()=>{
                cleanup();
                animation.cancel();
            });
            return;
        }
        const valueIsTransform = (0, _keysTransformMjs.transformProps).has(key);
        if (valueIsTransform && this.onBindTransform) this.onBindTransform();
        const removeOnChange = value.on("change", (latestValue)=>{
            this.latestValues[key] = latestValue;
            this.props.onUpdate && (0, _frameMjs.frame).preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
            this.scheduleRender();
        });
        let removeSyncCheck;
        if (typeof window !== "undefined" && window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        this.valueSubscriptions.set(key, ()=>{
            removeOnChange();
            if (removeSyncCheck) removeSyncCheck();
        // Defer to MotionValue.on("change") auto-stop so React 19 remounts
        // can resubscribe before the animation is cancelled (#3315).
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */ if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for(key in featureDefinitions){
            const featureDefinition = featureDefinitions[key];
            if (!featureDefinition) continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */ if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
            /**
             * If we have a feature, mount or update it.
             */ if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) feature.update();
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */ measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, _modelsMjs.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */ update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */ for(let i = 0; i < propEventHandlers.length; i++){
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = "on" + key;
            const listener = props[listenerName];
            if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
        }
        this.prevMotionValues = (0, _motionValuesMjs.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
        if (this.handleChildMotionValue) this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */ getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */ getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */ addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
            return ()=>closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */ addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue) this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */ removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */ hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) return this.props.values[key];
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0, _indexMjs.motionValue)(defaultValue === null ? undefined : defaultValue, {
                owner: this
            });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */ readValue(key, target) {
        let value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" && ((0, _motionUtils.isNumericalString)(value) || (0, _motionUtils.isZeroValueString)(value))) // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
            else if (!(0, _findMjs.findValueType)(value) && (0, _indexMjs1.complex).test(target)) value = (0, _animatableNoneMjs.getAnimatableNone)(key, target);
            this.setBaseTarget(key, (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value);
        }
        return (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */ setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */ getBaseTarget(key) {
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0, _resolveVariantsMjs.resolveVariantFromProps)(this.props, initial, this.presenceContext?.custom);
            if (variant) valueFromInitial = variant[key];
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */ if (initial && valueFromInitial !== undefined) return valueFromInitial;
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */ const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0, _isMotionValueMjs.isMotionValue)(target)) return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */ return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _motionUtils.SubscriptionManager)();
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) this.events[eventName].notify(...args);
    }
    scheduleRenderMicrotask() {
        (0, _microtaskMjs.microtask).render(this.render);
    }
}

},{"motion-utils":[["isNumericalString","3SchA"],["isZeroValueString","65R6M"],["secondsToMilliseconds","k1haA"],["SubscriptionManager","9fEBk"]],"../animation/keyframes/KeyframesResolver.mjs":"i94G6","../animation/NativeAnimation.mjs":"dek1a","../animation/waapi/utils/accelerated-values.mjs":"gEJ3G","../frameloop/microtask.mjs":"fREU6","../frameloop/sync-time.mjs":"c5O7T","../projection/geometry/models.mjs":"4RI28","../value/index.mjs":"c1jKT","../value/types/complex/index.mjs":"l9HIB","../value/types/utils/animatable-none.mjs":"7g8cX","../value/types/utils/find.mjs":"f18Wf","../value/utils/is-motion-value.mjs":"75Nnh","./store.mjs":"mujCZ","./utils/is-controlling-variants.mjs":"iQHEB","./utils/keys-transform.mjs":"3EaJv","./utils/motion-values.mjs":"7KhBa","./utils/reduced-motion/index.mjs":"kLQhA","./utils/resolve-variants.mjs":"gtH2y","./utils/reduced-motion/state.mjs":"d7sOa","../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fREU6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelMicrotask", ()=>cancelMicrotask);
parcelHelpers.export(exports, "microtask", ()=>microtask);
var _batcherMjs = require("./batcher.mjs");
const { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ (0, _batcherMjs.createRenderBatcher)(queueMicrotask, false);

},{"./batcher.mjs":"2AAcH","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"4RI28":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAxis", ()=>createAxis);
parcelHelpers.export(exports, "createAxisDelta", ()=>createAxisDelta);
parcelHelpers.export(exports, "createBox", ()=>createBox);
parcelHelpers.export(exports, "createDelta", ()=>createDelta);
const createAxisDelta = ()=>({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    });
const createDelta = ()=>({
        x: createAxisDelta(),
        y: createAxisDelta()
    });
const createAxis = ()=>({
        min: 0,
        max: 0
    });
const createBox = ()=>({
        x: createAxis(),
        y: createAxis()
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"f18Wf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findValueType", ()=>findValueType);
var _indexMjs = require("../color/index.mjs");
var _indexMjs1 = require("../complex/index.mjs");
var _dimensionsMjs = require("../dimensions.mjs");
var _testMjs = require("../test.mjs");
/**
 * A list of all ValueTypes
 */ const valueTypes = [
    ...(0, _dimensionsMjs.dimensionValueTypes),
    (0, _indexMjs.color),
    (0, _indexMjs1.complex)
];
/**
 * Tests a value against the list of ValueTypes
 */ const findValueType = (v)=>valueTypes.find((0, _testMjs.testValueType)(v));

},{"../color/index.mjs":"gSiiB","../complex/index.mjs":"l9HIB","../dimensions.mjs":"9247P","../test.mjs":"caJOd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iQHEB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isControllingVariants", ()=>isControllingVariants);
parcelHelpers.export(exports, "isVariantNode", ()=>isVariantNode);
var _isAnimationControlsMjs = require("./is-animation-controls.mjs");
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
function isControllingVariants(props) {
    return (0, _isAnimationControlsMjs.isAnimationControls)(props.animate) || (0, _variantPropsMjs.variantProps).some((name)=>(0, _isVariantLabelMjs.isVariantLabel)(props[name]));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

},{"./is-animation-controls.mjs":"6fKNU","./is-variant-label.mjs":"j6Abg","./variant-props.mjs":"16oQs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6fKNU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimationControls", ()=>isAnimationControls);
function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j6Abg":[function(require,module,exports,__globalThis) {
/**
 * Decides if the supplied variable is variant label
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVariantLabel", ()=>isVariantLabel);
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"16oQs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "variantPriorityOrder", ()=>variantPriorityOrder);
parcelHelpers.export(exports, "variantProps", ()=>variantProps);
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
];
const variantProps = [
    "initial",
    ...variantPriorityOrder
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7KhBa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateMotionValuesFromProps", ()=>updateMotionValuesFromProps);
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
/**
 * Updates motion values from props changes.
 * Uses `any` type for element to avoid circular dependencies with VisualElement.
 */ function updateMotionValuesFromProps(element, next, prev) {
    for(const key in next){
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0, _isMotionValueMjs.isMotionValue)(nextValue)) /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */ element.addValue(key, nextValue);
        else if ((0, _isMotionValueMjs.isMotionValue)(prevValue)) /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */ element.addValue(key, (0, _indexMjs.motionValue)(nextValue, {
            owner: element
        }));
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */ if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) existingValue.jump(nextValue);
                else if (!existingValue.hasAnimated) existingValue.set(nextValue);
            } else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0, _indexMjs.motionValue)(latestValue !== undefined ? latestValue : nextValue, {
                    owner: element
                }));
            }
        }
    }
    // Handle removed values
    for(const key in prev)if (next[key] === undefined) element.removeValue(key);
    return next;
}

},{"../../value/index.mjs":"c1jKT","../../value/utils/is-motion-value.mjs":"75Nnh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kLQhA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReducedMotionListener", ()=>(0, _stateMjs.hasReducedMotionListener));
parcelHelpers.export(exports, "initPrefersReducedMotion", ()=>initPrefersReducedMotion);
parcelHelpers.export(exports, "prefersReducedMotion", ()=>(0, _stateMjs.prefersReducedMotion));
var _stateMjs = require("./state.mjs");
const isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
    (0, _stateMjs.hasReducedMotionListener).current = true;
    if (!isBrowser) return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = ()=>(0, _stateMjs.prefersReducedMotion).current = motionMediaQuery.matches;
        motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else (0, _stateMjs.prefersReducedMotion).current = false;
}

},{"./state.mjs":"d7sOa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"d7sOa":[function(require,module,exports,__globalThis) {
// Does this device prefer reduced motion? Returns `null` server-side.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReducedMotionListener", ()=>hasReducedMotionListener);
parcelHelpers.export(exports, "prefersReducedMotion", ()=>prefersReducedMotion);
const prefersReducedMotion = {
    current: null
};
const hasReducedMotionListener = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7loFt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHTMLStyles", ()=>buildHTMLStyles);
var _getAsTypeMjs = require("../../../value/types/utils/get-as-type.mjs");
var _numberMjs = require("../../../value/types/maps/number.mjs");
var _keysTransformMjs = require("../../utils/keys-transform.mjs");
var _isCssVariableMjs = require("../../../animation/utils/is-css-variable.mjs");
var _buildTransformMjs = require("./build-transform.mjs");
function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */ for(const key in latestValues){
        const value = latestValues[key];
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        } else if ((0, _isCssVariableMjs.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        } else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] = valueAsType;
            } else style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) style.transform = (0, _buildTransformMjs.buildTransform)(latestValues, state.transform, transformTemplate);
        else if (style.transform) /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */ style.transform = "none";
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */ if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

},{"../../../value/types/utils/get-as-type.mjs":"iiuJ5","../../../value/types/maps/number.mjs":"k1ur4","../../utils/keys-transform.mjs":"3EaJv","../../../animation/utils/is-css-variable.mjs":"gaLfK","./build-transform.mjs":"dkWxQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iiuJ5":[function(require,module,exports,__globalThis) {
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueAsType", ()=>getValueAsType);
const getValueAsType = (value, type)=>{
    return type && typeof value === "number" ? type.transform(value) : value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dkWxQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTransform", ()=>buildTransform);
var _getAsTypeMjs = require("../../../value/types/utils/get-as-type.mjs");
var _numberMjs = require("../../../value/types/maps/number.mjs");
var _keysTransformMjs = require("../../utils/keys-transform.mjs");
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
const numTransforms = (0, _keysTransformMjs.transformPropOrder).length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */ function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < numTransforms; i++){
        const key = (0, _keysTransformMjs.transformPropOrder)[i];
        const value = latestValues[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        else {
            const parsed = parseFloat(value);
            valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) transform[key] = valueAsType;
        }
    }
    // `pathRotation` composes onto `rotate` as a separate additive term so
    // the user's `rotate` is never clobbered. Deliberately not a slot in
    // `transformPropOrder`.
    const pathRotation = latestValues.pathRotation;
    if (pathRotation) {
        transformIsDefault = false;
        transformString += `rotate(${(0, _getAsTypeMjs.getValueAsType)(pathRotation, (0, _numberMjs.numberValueTypes).pathRotation)}) `;
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    else if (transformIsDefault) transformString = "none";
    return transformString;
}

},{"../../../value/types/utils/get-as-type.mjs":"iiuJ5","../../../value/types/maps/number.mjs":"k1ur4","../../utils/keys-transform.mjs":"3EaJv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k6XQH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHTML", ()=>renderHTML);
function renderHTML(element, { style, vars }, styleProp, projection) {
    const elementStyle = element.style;
    let key;
    for(key in style)// CSSStyleDeclaration has [index: number]: string; in the types, so we use that as key type.
    elementStyle[key] = style[key];
    // Write projection styles directly to element style
    projection?.applyProjectionStyles(elementStyle, styleProp);
    for(key in vars)// Loop over any CSS variables and assign those.
    // They can only be assigned using `setProperty`.
    elementStyle.setProperty(key, vars[key]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"k4A6E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
var _isForcedMotionValueMjs = require("../../utils/is-forced-motion-value.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const style = props.style;
    const prevStyle = prevProps?.style;
    const newValues = {};
    if (!style) return newValues;
    for(const key in style)if ((0, _isMotionValueMjs.isMotionValue)(style[key]) || prevStyle && (0, _isMotionValueMjs.isMotionValue)(prevStyle[key]) || (0, _isForcedMotionValueMjs.isForcedMotionValue)(key, props) || visualElement?.getValue(key)?.liveStyle !== undefined) newValues[key] = style[key];
    return newValues;
}

},{"../../../value/utils/is-motion-value.mjs":"75Nnh","../../utils/is-forced-motion-value.mjs":"ctj7z","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ctj7z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addScaleCorrector", ()=>(0, _scaleCorrectionMjs.addScaleCorrector));
parcelHelpers.export(exports, "isForcedMotionValue", ()=>isForcedMotionValue);
parcelHelpers.export(exports, "scaleCorrectors", ()=>(0, _scaleCorrectionMjs.scaleCorrectors));
var _keysTransformMjs = require("./keys-transform.mjs");
var _scaleCorrectionMjs = require("../../projection/styles/scale-correction.mjs");
function isForcedMotionValue(key, { layout, layoutId }) {
    return (0, _keysTransformMjs.transformProps).has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!(0, _scaleCorrectionMjs.scaleCorrectors)[key] || key === "opacity");
}

},{"./keys-transform.mjs":"3EaJv","../../projection/styles/scale-correction.mjs":"7HdIu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7HdIu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addScaleCorrector", ()=>addScaleCorrector);
parcelHelpers.export(exports, "scaleCorrectors", ()=>scaleCorrectors);
var _isCssVariableMjs = require("../../animation/utils/is-css-variable.mjs");
var _borderRadiusMjs = require("../../utils/border-radius.mjs");
var _scaleBorderRadiusMjs = require("./scale-border-radius.mjs");
var _scaleBoxShadowMjs = require("./scale-box-shadow.mjs");
const scaleCorrectors = {
    borderRadius: {
        ...(0, _scaleBorderRadiusMjs.correctBorderRadius),
        applyTo: [
            ...(0, _borderRadiusMjs.cornerRadiusProps)
        ]
    },
    borderTopLeftRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    borderTopRightRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    borderBottomLeftRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    borderBottomRightRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    boxShadow: (0, _scaleBoxShadowMjs.correctBoxShadow)
};
function addScaleCorrector(correctors) {
    for(const key in correctors){
        scaleCorrectors[key] = correctors[key];
        if ((0, _isCssVariableMjs.isCSSVariableName)(key)) scaleCorrectors[key].isCSSVariable = true;
    }
}

},{"../../animation/utils/is-css-variable.mjs":"gaLfK","../../utils/border-radius.mjs":"iRJWe","./scale-border-radius.mjs":"12Izw","./scale-box-shadow.mjs":"lx3W2","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iRJWe":[function(require,module,exports,__globalThis) {
/**
 * The four corner-radius longhands. Shared so the projection mixer, scale
 * corrector, WAAPI px-value set and view-transition crop pass don't each carry
 * their own copy. Order is irrelevant - every consumer mixes/corrects/animates
 * each corner independently.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cornerRadiusProps", ()=>cornerRadiusProps);
const cornerRadiusProps = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"12Izw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "correctBorderRadius", ()=>correctBorderRadius);
parcelHelpers.export(exports, "pixelsToPercent", ()=>pixelsToPercent);
var _unitsMjs = require("../../value/types/numbers/units.mjs");
function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min) return 0;
    return pixels / (axis.max - axis.min) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */ const correctBorderRadius = {
    correct: (latest, node)=>{
        if (!node.target) return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */ if (typeof latest === "string") {
            if ((0, _unitsMjs.px).test(latest)) latest = parseFloat(latest);
            else return latest;
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */ const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    }
};

},{"../../value/types/numbers/units.mjs":"JFyVd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lx3W2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "correctBoxShadow", ()=>correctBoxShadow);
var _indexMjs = require("../../value/types/complex/index.mjs");
var _numberMjs = require("../../utils/mix/number.mjs");
const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta })=>{
        const original = latest;
        const shadow = (0, _indexMjs.complex).parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5) return original;
        const template = (0, _indexMjs.complex).createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */ const averageScale = (0, _numberMjs.mixNumber)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
        return template(shadow);
    }
};

},{"../../value/types/complex/index.mjs":"l9HIB","../../utils/mix/number.mjs":"eSNQQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"71mHY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGElement", ()=>isSVGElement);
var _motionUtils = require("motion-utils");
/**
 * Checks if an element is an SVG element in a way
 * that works across iframes
 */ function isSVGElement(element) {
    return (0, _motionUtils.isObject)(element) && "ownerSVGElement" in element;
}

},{"motion-utils":"6yvpd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6yvpd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
const isObject = (value)=>typeof value === "object" && value !== null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cF6lu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGSVGElement", ()=>isSVGSVGElement);
var _isSvgElementMjs = require("./is-svg-element.mjs");
/**
 * Checks if an element is specifically an SVGSVGElement (the root SVG element)
 * in a way that works across iframes
 */ function isSVGSVGElement(element) {
    return (0, _isSvgElementMjs.isSVGElement)(element) && element.tagName === "svg";
}

},{"./is-svg-element.mjs":"71mHY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aJw3C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectVisualElement", ()=>ObjectVisualElement);
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _visualElementMjs = require("../VisualElement.mjs");
function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") return value;
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0, _modelsMjs.createBox)();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}

},{"../../projection/geometry/models.mjs":"4RI28","../VisualElement.mjs":"93dUM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"628iK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SVGVisualElement", ()=>SVGVisualElement);
var _keysTransformMjs = require("../utils/keys-transform.mjs");
var _defaultsMjs = require("../../value/types/maps/defaults.mjs");
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _camelToDashMjs = require("../dom/utils/camel-to-dash.mjs");
var _buildAttrsMjs = require("./utils/build-attrs.mjs");
var _camelCaseAttrsMjs = require("./utils/camel-case-attrs.mjs");
var _isSvgTagMjs = require("./utils/is-svg-tag.mjs");
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
class SVGVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = (0, _modelsMjs.createBox);
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        (0, _buildAttrsMjs.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0, _renderMjs.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0, _isSvgTagMjs.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}

},{"../utils/keys-transform.mjs":"3EaJv","../../value/types/maps/defaults.mjs":"k9OiN","../../projection/geometry/models.mjs":"4RI28","../dom/DOMVisualElement.mjs":"7JTbf","../dom/utils/camel-to-dash.mjs":"cd2hc","./utils/build-attrs.mjs":"lFfRc","./utils/camel-case-attrs.mjs":"htGzo","./utils/is-svg-tag.mjs":"j8mRD","./utils/render.mjs":"1ZAXa","./utils/scrape-motion-values.mjs":"j1yaa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lFfRc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGAttrs", ()=>buildSVGAttrs);
var _buildStylesMjs = require("../../html/utils/build-styles.mjs");
var _pathMjs = require("./path.mjs");
/**
 * CSS Motion Path properties that should remain as CSS styles on SVG elements.
 */ const cssMotionPathProperties = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
];
/**
 * Build SVG visual attributes, like cx and style.transform
 */ function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, // This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate, styleProp) {
    (0, _buildStylesMjs.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */ if (isSVGTag) {
        if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style } = state;
    /**
     * However, we apply transforms as CSS transforms.
     * So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
     */ if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
        style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
        delete attrs.transformOrigin;
    }
    if (style.transform) {
        /**
         * SVG's element transform-origin uses its own median as a reference.
         * Therefore, transformBox becomes a fill-box
         */ style.transformBox = styleProp?.transformBox ?? "fill-box";
        delete attrs.transformBox;
    }
    for (const key of cssMotionPathProperties)if (attrs[key] !== undefined) {
        style[key] = attrs[key];
        delete attrs[key];
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (attrScale !== undefined) attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) (0, _pathMjs.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
}

},{"../../html/utils/build-styles.mjs":"7loFt","./path.mjs":"kK2Hh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kK2Hh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGPath", ()=>buildSVGPath);
const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 *
 * Note: We use unitless values for stroke-dasharray and stroke-dashoffset
 * because Safari incorrectly scales px values when the page is zoomed.
 */ function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset (unitless to avoid Safari zoom bug)
    attrs[keys.offset] = `${-offset}`;
    // Build the dash array (unitless to avoid Safari zoom bug)
    attrs[keys.array] = `${length} ${spacing}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"htGzo":[function(require,module,exports,__globalThis) {
/**
 * A set of attribute names that are always read/written as camel case.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelCaseAttributes", ()=>camelCaseAttributes);
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j8mRD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
const isSVGTag = (tag)=>typeof tag === "string" && tag.toLowerCase() === "svg";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ZAXa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSVG", ()=>renderSVG);
var _camelToDashMjs = require("../../dom/utils/camel-to-dash.mjs");
var _renderMjs = require("../../html/utils/render.mjs");
var _camelCaseAttrsMjs = require("./camel-case-attrs.mjs");
function renderSVG(element, renderState, _styleProp, projection) {
    (0, _renderMjs.renderHTML)(element, renderState, undefined, projection);
    for(const key in renderState.attrs)element.setAttribute(!(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key, renderState.attrs[key]);
}

},{"../../dom/utils/camel-to-dash.mjs":"cd2hc","../../html/utils/render.mjs":"k6XQH","./camel-case-attrs.mjs":"htGzo","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j1yaa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
var _keysTransformMjs = require("../../utils/keys-transform.mjs");
var _scrapeMotionValuesMjs = require("../../html/utils/scrape-motion-values.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for(const key in props)if ((0, _isMotionValueMjs.isMotionValue)(props[key]) || (0, _isMotionValueMjs.isMotionValue)(prevProps[key])) {
        const targetKey = (0, _keysTransformMjs.transformPropOrder).indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
    }
    return newValues;
}

},{"../../../value/utils/is-motion-value.mjs":"75Nnh","../../utils/keys-transform.mjs":"3EaJv","../../html/utils/scrape-motion-values.mjs":"k4A6E","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Fs1Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimatePresence", ()=>AnimatePresence);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _layoutGroupContextMjs = require("../../context/LayoutGroupContext.mjs");
var _useConstantMjs = require("../../utils/use-constant.mjs");
var _useIsomorphicEffectMjs = require("../../utils/use-isomorphic-effect.mjs");
var _presenceChildMjs = require("./PresenceChild.mjs");
var _usePresenceMjs = require("./use-presence.mjs");
var _utilsMjs = require("./utils.mjs");
"use client";
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */ const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root })=>{
    const [isParentPresent, safeToRemove] = (0, _usePresenceMjs.usePresence)(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */ const presentChildren = (0, _react.useMemo)(()=>(0, _utilsMjs.onlyElements)(children), [
        children
    ]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */ const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map((0, _utilsMjs.getChildKey));
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */ const isInitialRender = (0, _react.useRef)(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */ const pendingPresentChildren = (0, _react.useRef)(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */ const exitComplete = (0, _useConstantMjs.useConstant)(()=>new Map());
    /**
     * Track which components are currently processing exit to prevent duplicate processing.
     */ const exitingComponents = (0, _react.useRef)(new Set());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */ const [diffedChildren, setDiffedChildren] = (0, _react.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, _react.useState)(presentChildren);
    (0, _useIsomorphicEffectMjs.useIsomorphicLayoutEffect)(()=>{
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const key = (0, _utilsMjs.getChildKey)(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) exitComplete.set(key, false);
            } else {
                exitComplete.delete(key);
                exitingComponents.current.delete(key);
            }
        }
    }, [
        renderedChildren,
        presentKeys.length,
        presentKeys.join("-")
    ]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [
            ...presentChildren
        ];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const child = renderedChildren[i];
            const key = (0, _utilsMjs.getChildKey)(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */ if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
        setRenderedChildren((0, _utilsMjs.onlyElements)(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */ return null;
    }
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */ const { forceRender } = (0, _react.useContext)((0, _layoutGroupContextMjs.LayoutGroupContext));
    return (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: renderedChildren.map((child)=>{
            const key = (0, _utilsMjs.getChildKey)(child);
            const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
            const onExit = ()=>{
                if (exitingComponents.current.has(key)) return;
                if (exitComplete.has(key)) {
                    exitingComponents.current.add(key);
                    exitComplete.set(key, true);
                } else return;
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete)=>{
                    if (!isExitComplete) isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && safeToRemove?.();
                    onExitComplete && onExitComplete();
                }
            };
            return (0, _jsxRuntime.jsx)((0, _presenceChildMjs.PresenceChild), {
                isPresent: isPresent,
                initial: !isInitialRender.current || initial ? undefined : false,
                custom: custom,
                presenceAffectsLayout: presenceAffectsLayout,
                mode: mode,
                root: root,
                onExitComplete: isPresent ? undefined : onExit,
                anchorX: anchorX,
                anchorY: anchorY,
                children: child
            }, key);
        })
    });
};

},{"react/jsx-runtime":"b2Fbn","react":"gOP0N","../../context/LayoutGroupContext.mjs":"6uliG","../../utils/use-constant.mjs":"bFn8i","../../utils/use-isomorphic-effect.mjs":"CyVnr","./PresenceChild.mjs":"2iVGE","./use-presence.mjs":"je6VE","./utils.mjs":"eQsKz","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6uliG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LayoutGroupContext", ()=>LayoutGroupContext);
var _react = require("react");
"use client";
const LayoutGroupContext = (0, _react.createContext)({});

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bFn8i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useConstant", ()=>useConstant);
var _react = require("react");
"use client";
/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */ function useConstant(init) {
    const ref = (0, _react.useRef)(null);
    if (ref.current === null) ref.current = init();
    return ref.current;
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"CyVnr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useIsomorphicLayoutEffect", ()=>useIsomorphicLayoutEffect);
var _react = require("react");
var _isBrowserMjs = require("./is-browser.mjs");
"use client";
const useIsomorphicLayoutEffect = (0, _isBrowserMjs.isBrowser) ? (0, _react.useLayoutEffect) : (0, _react.useEffect);

},{"react":"gOP0N","./is-browser.mjs":"206D2","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"206D2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
const isBrowser = typeof window !== "undefined";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2iVGE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PresenceChild", ()=>PresenceChild);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
var _useConstantMjs = require("../../utils/use-constant.mjs");
var _useIsomorphicEffectMjs = require("../../utils/use-isomorphic-effect.mjs");
var _popChildMjs = require("./PopChild.mjs");
"use client";
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root })=>{
    const presenceChildren = (0, _useConstantMjs.useConstant)(newChildrenMap);
    const id = (0, _react.useId)();
    // Written in a layout effect (not render) so discarded concurrent
    // renders can't leave the refs pointing at uncommitted state.
    const isPresentRef = (0, _react.useRef)(isPresent);
    const onExitCompleteRef = (0, _react.useRef)(onExitComplete);
    (0, _useIsomorphicEffectMjs.useIsomorphicLayoutEffect)(()=>{
        isPresentRef.current = isPresent;
        onExitCompleteRef.current = onExitComplete;
    });
    let isReusedContext = true;
    let context = (0, _react.useMemo)(()=>{
        isReusedContext = false;
        return {
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId)=>{
                presenceChildren.set(childId, true);
                for (const isComplete of presenceChildren.values()){
                    if (!isComplete) return; // can stop searching when any is incomplete
                }
                onExitComplete && onExitComplete();
            },
            register: (childId)=>{
                presenceChildren.set(childId, false);
                return ()=>{
                    presenceChildren.delete(childId);
                    !isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
                };
            }
        };
    }, [
        isPresent,
        presenceChildren,
        onExitComplete
    ]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */ if (presenceAffectsLayout && isReusedContext) context = {
        ...context
    };
    (0, _react.useMemo)(()=>{
        presenceChildren.forEach((_, key)=>presenceChildren.set(key, false));
    }, [
        isPresent
    ]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */ _react.useEffect(()=>{
        !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
    }, [
        isPresent
    ]);
    children = (0, _jsxRuntime.jsx)((0, _popChildMjs.PopChild), {
        pop: mode === "popLayout",
        isPresent: isPresent,
        anchorX: anchorX,
        anchorY: anchorY,
        root: root,
        children: children
    });
    return (0, _jsxRuntime.jsx)((0, _presenceContextMjs.PresenceContext).Provider, {
        value: context,
        children: children
    });
};
function newChildrenMap() {
    return new Map();
}

},{"react/jsx-runtime":"b2Fbn","react":"gOP0N","../../context/PresenceContext.mjs":"8rbKE","../../utils/use-constant.mjs":"bFn8i","../../utils/use-isomorphic-effect.mjs":"CyVnr","./PopChild.mjs":"9z58a","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8rbKE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PresenceContext", ()=>PresenceContext);
var _react = require("react");
"use client";
/**
 * @public
 */ const PresenceContext = /* @__PURE__ */ (0, _react.createContext)(null);

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9z58a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PopChild", ()=>PopChild);
var _jsxRuntime = require("react/jsx-runtime");
var _motionDom = require("motion-dom");
var _react = require("react");
var _motionConfigContextMjs = require("../../context/MotionConfigContext.mjs");
var _useComposedRefMjs = require("../../utils/use-composed-ref.mjs");
"use client";
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */ class PopChildMeasure extends _react.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if ((0, _motionDom.isHTMLElement)(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
            const parent = element.offsetParent;
            const parentWidth = (0, _motionDom.isHTMLElement)(parent) ? parent.offsetWidth || 0 : 0;
            const parentHeight = (0, _motionDom.isHTMLElement)(parent) ? parent.offsetHeight || 0 : 0;
            const computedStyle = getComputedStyle(element);
            const size = this.props.sizeRef.current;
            size.height = parseFloat(computedStyle.height);
            size.width = parseFloat(computedStyle.width);
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
            size.bottom = parentHeight - size.height - size.top;
            size.direction = computedStyle.direction;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */ componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
    const id = (0, _react.useId)();
    const ref = (0, _react.useRef)(null);
    const size = (0, _react.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        direction: "ltr"
    });
    const { nonce } = (0, _react.useContext)((0, _motionConfigContextMjs.MotionConfigContext));
    /**
     * In React 19, refs are passed via props.ref instead of element.ref.
     * We check props.ref first (React 19) and fall back to element.ref (React 18).
     *
     * The composed ref is only used when popping the child out (pop !== false),
     * so we avoid reading children.props.ref otherwise. In React 18.3 that read
     * triggers a spurious "`ref` is not a prop" warning getter (#3745).
     */ const childRef = pop !== false ? children.props?.ref ?? children?.ref : undefined;
    const composedRef = (0, _useComposedRefMjs.useComposedRefs)(ref, childRef);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */ (0, _react.useInsertionEffect)(()=>{
        const { width, height, top, left, right, bottom, direction } = size.current;
        if (isPresent || pop === false || !ref.current || !width || !height) return;
        const isRTL = direction === "rtl";
        const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
        const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce) style.nonce = nonce;
        const parent = root ?? document.head;
        parent.appendChild(style);
        if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
        return ()=>{
            ref.current?.removeAttribute("data-motion-pop-id");
            if (parent.contains(style)) parent.removeChild(style);
        };
    }, [
        isPresent
    ]);
    return (0, _jsxRuntime.jsx)(PopChildMeasure, {
        isPresent: isPresent,
        childRef: ref,
        sizeRef: size,
        pop: pop,
        children: pop === false ? children : _react.cloneElement(children, {
            ref: composedRef
        })
    });
}

},{"react/jsx-runtime":"b2Fbn","motion-dom":"hTVCG","react":"gOP0N","../../context/MotionConfigContext.mjs":"5ZNBi","../../utils/use-composed-ref.mjs":"gwGXy","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hTVCG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
var _motionUtils = require("motion-utils");
/**
 * Checks if an element is an HTML element in a way
 * that works across iframes
 */ function isHTMLElement(element) {
    return (0, _motionUtils.isObject)(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}

},{"motion-utils":"6yvpd","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5ZNBi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionConfigContext", ()=>MotionConfigContext);
var _react = require("react");
"use client";
/**
 * @public
 */ const MotionConfigContext = (0, _react.createContext)({
    transformPagePoint: (p)=>p,
    isStatic: false,
    reducedMotion: "never"
});

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gwGXy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useComposedRefs", ()=>useComposedRefs);
var _react = require("react");
/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */ /**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") return ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) return ()=>{
            for(let i = 0; i < cleanups.length; i++){
                const cleanup = cleanups[i];
                if (typeof cleanup === "function") cleanup();
                else setRef(refs[i], null);
            }
        };
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return _react.useCallback(composeRefs(...refs), refs);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"je6VE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPresent", ()=>isPresent);
parcelHelpers.export(exports, "useIsPresent", ()=>useIsPresent);
parcelHelpers.export(exports, "usePresence", ()=>usePresence);
var _react = require("react");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
"use client";
/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed from the tree,
 * but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */ function usePresence(subscribe = true) {
    const context = (0, _react.useContext)((0, _presenceContextMjs.PresenceContext));
    if (context === null) return [
        true,
        null
    ];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0, _react.useId)();
    (0, _react.useEffect)(()=>{
        if (subscribe) return register(id);
    }, [
        subscribe
    ]);
    const safeToRemove = (0, _react.useCallback)(()=>subscribe && onExitComplete && onExitComplete(id), [
        id,
        onExitComplete,
        subscribe
    ]);
    return !isPresent && onExitComplete ? [
        false,
        safeToRemove
    ] : [
        true
    ];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */ function useIsPresent() {
    return isPresent((0, _react.useContext)((0, _presenceContextMjs.PresenceContext)));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}

},{"react":"gOP0N","../../context/PresenceContext.mjs":"8rbKE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eQsKz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChildKey", ()=>getChildKey);
parcelHelpers.export(exports, "onlyElements", ()=>onlyElements);
var _react = require("react");
const getChildKey = (child)=>child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    (0, _react.Children).forEach(children, (child)=>{
        if ((0, _react.isValidElement)(child)) filtered.push(child);
    });
    return filtered;
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7NDeO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "motion", ()=>motion);
var _createVisualElementMjs = require("../../dom/create-visual-element.mjs");
var _createProxyMjs = require("../create-proxy.mjs");
var _featureBundleMjs = require("./feature-bundle.mjs");
const motion = /*@__PURE__*/ (0, _createProxyMjs.createMotionProxy)((0, _featureBundleMjs.featureBundle), (0, _createVisualElementMjs.createDomVisualElement));

},{"../../dom/create-visual-element.mjs":"7qcWG","../create-proxy.mjs":"e0moP","./feature-bundle.mjs":"gPeAb","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7qcWG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDomVisualElement", ()=>createDomVisualElement);
var _motionDom = require("motion-dom");
var _react = require("react");
var _isSvgComponentMjs = require("./utils/is-svg-component.mjs");
const createDomVisualElement = (Component, options)=>{
    /**
     * Use explicit isSVG override if provided, otherwise auto-detect
     */ const isSVG = options.isSVG ?? (0, _isSvgComponentMjs.isSVGComponent)(Component);
    return isSVG ? new (0, _motionDom.SVGVisualElement)(options) : new (0, _motionDom.HTMLVisualElement)(options, {
        allowProjection: Component !== (0, _react.Fragment)
    });
};

},{"motion-dom":[["HTMLVisualElement","hgbUy"],["SVGVisualElement","628iK"]],"react":"gOP0N","./utils/is-svg-component.mjs":"aklhl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aklhl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGComponent", ()=>isSVGComponent);
var _lowercaseElementsMjs = require("../../svg/lowercase-elements.mjs");
function isSVGComponent(Component) {
    if (/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */ typeof Component !== "string" || /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */ Component.includes("-")) return false;
    else if (/**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */ (0, _lowercaseElementsMjs.lowercaseSVGElements).indexOf(Component) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */ /[A-Z]/u.test(Component)) return true;
    return false;
}

},{"../../svg/lowercase-elements.mjs":"5n5fv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5n5fv":[function(require,module,exports,__globalThis) {
/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lowercaseSVGElements", ()=>lowercaseSVGElements);
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"e0moP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMotionProxy", ()=>createMotionProxy);
var _motionUtils = require("motion-utils");
var _indexMjs = require("../../motion/index.mjs");
function createMotionProxy(preloadedFeatures, createVisualElement) {
    if (typeof Proxy === "undefined") return 0, _indexMjs.createMotionComponent;
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */ const componentCache = new Map();
    const factory = (Component, options)=>{
        return (0, _indexMjs.createMotionComponent)(Component, options, preloadedFeatures, createVisualElement);
    };
    /**
     * Support for deprecated`motion(Component)` pattern
     */ const deprecatedFactoryFunction = (Component, options)=>{
        return factory(Component, options);
    };
    return new Proxy(deprecatedFactoryFunction, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */ get: (_target, key)=>{
            if (key === "create") return factory;
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */ if (!componentCache.has(key)) componentCache.set(key, (0, _indexMjs.createMotionComponent)(key, undefined, preloadedFeatures, createVisualElement));
            return componentCache.get(key);
        }
    });
}

},{"motion-utils":"lVGA2","../../motion/index.mjs":"9p80M","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lVGA2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>(0, _arrayMjs.addUniqueItem));
parcelHelpers.export(exports, "moveItem", ()=>(0, _arrayMjs.moveItem));
parcelHelpers.export(exports, "removeItem", ()=>(0, _arrayMjs.removeItem));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampMjs.clamp));
parcelHelpers.export(exports, "invariant", ()=>(0, _errorsMjs.invariant));
parcelHelpers.export(exports, "warning", ()=>(0, _errorsMjs.warning));
parcelHelpers.export(exports, "MotionGlobalConfig", ()=>(0, _globalConfigMjs.MotionGlobalConfig));
parcelHelpers.export(exports, "isNumericalString", ()=>(0, _isNumericalStringMjs.isNumericalString));
parcelHelpers.export(exports, "isObject", ()=>(0, _isObjectMjs.isObject));
parcelHelpers.export(exports, "isZeroValueString", ()=>(0, _isZeroValueStringMjs.isZeroValueString));
parcelHelpers.export(exports, "memo", ()=>(0, _memoMjs.memo));
parcelHelpers.export(exports, "noop", ()=>(0, _noopMjs.noop));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeMjs.pipe));
parcelHelpers.export(exports, "progress", ()=>(0, _progressMjs.progress));
parcelHelpers.export(exports, "SubscriptionManager", ()=>(0, _subscriptionManagerMjs.SubscriptionManager));
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>(0, _timeConversionMjs.millisecondsToSeconds));
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>(0, _timeConversionMjs.secondsToMilliseconds));
parcelHelpers.export(exports, "velocityPerSecond", ()=>(0, _velocityPerSecondMjs.velocityPerSecond));
parcelHelpers.export(exports, "hasWarned", ()=>(0, _warnOnceMjs.hasWarned));
parcelHelpers.export(exports, "warnOnce", ()=>(0, _warnOnceMjs.warnOnce));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapMjs.wrap));
parcelHelpers.export(exports, "anticipate", ()=>(0, _anticipateMjs.anticipate));
parcelHelpers.export(exports, "backIn", ()=>(0, _backMjs.backIn));
parcelHelpers.export(exports, "backInOut", ()=>(0, _backMjs.backInOut));
parcelHelpers.export(exports, "backOut", ()=>(0, _backMjs.backOut));
parcelHelpers.export(exports, "circIn", ()=>(0, _circMjs.circIn));
parcelHelpers.export(exports, "circInOut", ()=>(0, _circMjs.circInOut));
parcelHelpers.export(exports, "circOut", ()=>(0, _circMjs.circOut));
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierMjs.cubicBezier));
parcelHelpers.export(exports, "easeIn", ()=>(0, _easeMjs.easeIn));
parcelHelpers.export(exports, "easeInOut", ()=>(0, _easeMjs.easeInOut));
parcelHelpers.export(exports, "easeOut", ()=>(0, _easeMjs.easeOut));
parcelHelpers.export(exports, "mirrorEasing", ()=>(0, _mirrorMjs.mirrorEasing));
parcelHelpers.export(exports, "reverseEasing", ()=>(0, _reverseMjs.reverseEasing));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsMjs.steps));
parcelHelpers.export(exports, "getEasingForSegment", ()=>(0, _getEasingForSegmentMjs.getEasingForSegment));
parcelHelpers.export(exports, "isBezierDefinition", ()=>(0, _isBezierDefinitionMjs.isBezierDefinition));
parcelHelpers.export(exports, "isEasingArray", ()=>(0, _isEasingArrayMjs.isEasingArray));
parcelHelpers.export(exports, "easingDefinitionToFunction", ()=>(0, _mapMjs.easingDefinitionToFunction));
var _arrayMjs = require("./array.mjs");
var _clampMjs = require("./clamp.mjs");
var _errorsMjs = require("./errors.mjs");
var _globalConfigMjs = require("./global-config.mjs");
var _isNumericalStringMjs = require("./is-numerical-string.mjs");
var _isObjectMjs = require("./is-object.mjs");
var _isZeroValueStringMjs = require("./is-zero-value-string.mjs");
var _memoMjs = require("./memo.mjs");
var _noopMjs = require("./noop.mjs");
var _pipeMjs = require("./pipe.mjs");
var _progressMjs = require("./progress.mjs");
var _subscriptionManagerMjs = require("./subscription-manager.mjs");
var _timeConversionMjs = require("./time-conversion.mjs");
var _velocityPerSecondMjs = require("./velocity-per-second.mjs");
var _warnOnceMjs = require("./warn-once.mjs");
var _wrapMjs = require("./wrap.mjs");
var _anticipateMjs = require("./easing/anticipate.mjs");
var _backMjs = require("./easing/back.mjs");
var _circMjs = require("./easing/circ.mjs");
var _cubicBezierMjs = require("./easing/cubic-bezier.mjs");
var _easeMjs = require("./easing/ease.mjs");
var _mirrorMjs = require("./easing/modifiers/mirror.mjs");
var _reverseMjs = require("./easing/modifiers/reverse.mjs");
var _stepsMjs = require("./easing/steps.mjs");
var _getEasingForSegmentMjs = require("./easing/utils/get-easing-for-segment.mjs");
var _isBezierDefinitionMjs = require("./easing/utils/is-bezier-definition.mjs");
var _isEasingArrayMjs = require("./easing/utils/is-easing-array.mjs");
var _mapMjs = require("./easing/utils/map.mjs");

},{"./array.mjs":"9bOuG","./clamp.mjs":"2BS9B","./errors.mjs":"e5pKF","./global-config.mjs":"82hsq","./is-numerical-string.mjs":"3SchA","./is-object.mjs":"6yvpd","./is-zero-value-string.mjs":"65R6M","./memo.mjs":"idExm","./noop.mjs":"7MDWX","./pipe.mjs":"cCPPw","./progress.mjs":"3Q4mc","./subscription-manager.mjs":"9fEBk","./time-conversion.mjs":"k1haA","./velocity-per-second.mjs":"j8PY0","./warn-once.mjs":"3B4Kt","./wrap.mjs":"dFVhY","./easing/anticipate.mjs":"dKxvF","./easing/back.mjs":"eAcoE","./easing/circ.mjs":"hLwRh","./easing/cubic-bezier.mjs":"bmKE5","./easing/ease.mjs":"a80JG","./easing/modifiers/mirror.mjs":"cIHfz","./easing/modifiers/reverse.mjs":"e2sIK","./easing/steps.mjs":"cgfNh","./easing/utils/get-easing-for-segment.mjs":"aOoW7","./easing/utils/is-bezier-definition.mjs":"6gPET","./easing/utils/is-easing-array.mjs":"2SeRN","./easing/utils/map.mjs":"4RYV8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3B4Kt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasWarned", ()=>hasWarned);
parcelHelpers.export(exports, "warnOnce", ()=>warnOnce);
var _formatErrorMessageMjs = require("./format-error-message.mjs");
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, _formatErrorMessageMjs.formatErrorMessage)(message, errorCode));
    warned.add(message);
}

},{"./format-error-message.mjs":"7K3dS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cgfNh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "steps", ()=>steps);
var _clampMjs = require("../clamp.mjs");
/*#__NO_SIDE_EFFECTS__*/ function steps(numSteps, direction = "end") {
    return (progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * numSteps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, _clampMjs.clamp)(0, 1, rounded / numSteps);
    };
}

},{"../clamp.mjs":"2BS9B","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9p80M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMotionComponent", ()=>createMotionComponent);
var _jsxRuntime = require("react/jsx-runtime");
var _motionUtils = require("motion-utils");
var _react = require("react");
var _layoutGroupContextMjs = require("../context/LayoutGroupContext.mjs");
var _lazyContextMjs = require("../context/LazyContext.mjs");
var _motionConfigContextMjs = require("../context/MotionConfigContext.mjs");
var _indexMjs = require("../context/MotionContext/index.mjs");
var _createMjs = require("../context/MotionContext/create.mjs");
var _useRenderMjs = require("../render/dom/use-render.mjs");
var _isSvgComponentMjs = require("../render/dom/utils/is-svg-component.mjs");
var _useHtmlVisualStateMjs = require("../render/html/use-html-visual-state.mjs");
var _useSvgVisualStateMjs = require("../render/svg/use-svg-visual-state.mjs");
var _definitionsMjs = require("./features/definitions.mjs");
var _loadFeaturesMjs = require("./features/load-features.mjs");
var _symbolMjs = require("./utils/symbol.mjs");
var _useMotionRefMjs = require("./utils/use-motion-ref.mjs");
var _useVisualElementMjs = require("./utils/use-visual-element.mjs");
"use client";
/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */ function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
    preloadedFeatures && (0, _loadFeaturesMjs.loadFeatures)(preloadedFeatures);
    /**
     * Determine whether to use SVG or HTML rendering based on:
     * 1. Explicit `type` option (highest priority)
     * 2. Auto-detection via `isSVGComponent`
     */ const isSVG = type ? type === "svg" : (0, _isSvgComponentMjs.isSVGComponent)(Component);
    const useVisualState = isSVG ? (0, _useSvgVisualStateMjs.useSVGVisualState) : (0, _useHtmlVisualStateMjs.useHTMLVisualState);
    function MotionDOMComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */ let MeasureLayout;
        const configAndProps = {
            ...(0, _react.useContext)((0, _motionConfigContextMjs.MotionConfigContext)),
            ...props,
            layoutId: useLayoutId(props)
        };
        const { isStatic } = configAndProps;
        const context = (0, _createMjs.useCreateMotionContext)(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && typeof window !== "undefined") {
            useStrictMode(configAndProps, preloadedFeatures);
            const layoutProjection = getProjectionFunctionality(configAndProps);
            MeasureLayout = layoutProjection.MeasureLayout;
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */ context.visualElement = (0, _useVisualElementMjs.useVisualElement)(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */ return (0, _jsxRuntime.jsxs)((0, _indexMjs.MotionContext).Provider, {
            value: context,
            children: [
                MeasureLayout && context.visualElement ? (0, _jsxRuntime.jsx)(MeasureLayout, {
                    visualElement: context.visualElement,
                    ...configAndProps
                }) : null,
                (0, _useRenderMjs.useRender)(Component, props, (0, _useMotionRefMjs.useMotionRef)(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)
            ]
        });
    }
    MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
    const ForwardRefMotionComponent = (0, _react.forwardRef)(MotionDOMComponent);
    ForwardRefMotionComponent[0, _symbolMjs.motionComponentSymbol] = Component;
    return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0, _react.useContext)((0, _layoutGroupContextMjs.LayoutGroupContext)).id;
    return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0, _react.useContext)((0, _lazyContextMjs.LazyContext)).strict;
}
function getProjectionFunctionality(props) {
    const featureDefinitions = (0, _definitionsMjs.getInitializedFeatureDefinitions)();
    const { drag, layout } = featureDefinitions;
    if (!drag && !layout) return {};
    const combined = {
        ...drag,
        ...layout
    };
    return {
        MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : undefined,
        ProjectionNode: combined.ProjectionNode
    };
}

},{"react/jsx-runtime":"b2Fbn","motion-utils":"lVGA2","react":"gOP0N","../context/LayoutGroupContext.mjs":"6uliG","../context/LazyContext.mjs":"6NhYE","../context/MotionConfigContext.mjs":"5ZNBi","../context/MotionContext/index.mjs":"3rc04","../context/MotionContext/create.mjs":"bECtj","../render/dom/use-render.mjs":"7rQWI","../render/dom/utils/is-svg-component.mjs":"aklhl","../render/html/use-html-visual-state.mjs":"fue98","../render/svg/use-svg-visual-state.mjs":"dje8Q","./features/definitions.mjs":"lKDAB","./features/load-features.mjs":"adjsY","./utils/symbol.mjs":"615H5","./utils/use-motion-ref.mjs":"1e3Rg","./utils/use-visual-element.mjs":"7oJDj","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6NhYE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LazyContext", ()=>LazyContext);
var _react = require("react");
"use client";
const LazyContext = (0, _react.createContext)({
    strict: false
});

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3rc04":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionContext", ()=>MotionContext);
var _react = require("react");
"use client";
const MotionContext = /* @__PURE__ */ (0, _react.createContext)({});

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bECtj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCreateMotionContext", ()=>useCreateMotionContext);
var _react = require("react");
var _indexMjs = require("./index.mjs");
var _utilsMjs = require("./utils.mjs");
"use client";
function useCreateMotionContext(props) {
    const { initial, animate } = (0, _utilsMjs.getCurrentTreeVariants)(props, (0, _react.useContext)((0, _indexMjs.MotionContext)));
    return (0, _react.useMemo)(()=>({
            initial,
            animate
        }), [
        variantLabelsAsDependency(initial),
        variantLabelsAsDependency(animate)
    ]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}

},{"react":"gOP0N","./index.mjs":"3rc04","./utils.mjs":"g6UQO","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"g6UQO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCurrentTreeVariants", ()=>getCurrentTreeVariants);
var _motionDom = require("motion-dom");
function getCurrentTreeVariants(props, context) {
    if ((0, _motionDom.isControllingVariants)(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || (0, _motionDom.isVariantLabel)(initial) ? initial : undefined,
            animate: (0, _motionDom.isVariantLabel)(animate) ? animate : undefined
        };
    }
    return props.inherit !== false ? context : {};
}

},{"motion-dom":[["isControllingVariants","iQHEB"],["isVariantLabel","j6Abg"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7rQWI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useRender", ()=>useRender);
var _motionDom = require("motion-dom");
var _react = require("react");
var _usePropsMjs = require("../html/use-props.mjs");
var _usePropsMjs1 = require("../svg/use-props.mjs");
var _filterPropsMjs = require("./utils/filter-props.mjs");
var _isSvgComponentMjs = require("./utils/is-svg-component.mjs");
"use client";
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
    const useVisualProps = isSVG ?? (0, _isSvgComponentMjs.isSVGComponent)(Component) ? (0, _usePropsMjs1.useSVGProps) : (0, _usePropsMjs.useHTMLProps);
    const visualProps = useVisualProps(props, latestValues, isStatic, Component);
    const filteredProps = (0, _filterPropsMjs.filterProps)(props, typeof Component === "string", forwardMotionProps);
    const elementProps = Component !== (0, _react.Fragment) ? {
        ...filteredProps,
        ...visualProps,
        ref
    } : {};
    /**
     * If component has been handed a motion value as its child,
     * memoise its initial value and render that. Subsequent updates
     * will be handled by the onChange handler
     */ const { children } = props;
    const renderedChildren = (0, _react.useMemo)(()=>(0, _motionDom.isMotionValue)(children) ? children.get() : children, [
        children
    ]);
    return (0, _react.createElement)(Component, {
        ...elementProps,
        children: renderedChildren
    });
}

},{"motion-dom":"75Nnh","react":"gOP0N","../html/use-props.mjs":"8zRKE","../svg/use-props.mjs":"3dQES","./utils/filter-props.mjs":"hJgoO","./utils/is-svg-component.mjs":"aklhl","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8zRKE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copyRawValuesOnly", ()=>copyRawValuesOnly);
parcelHelpers.export(exports, "useHTMLProps", ()=>useHTMLProps);
var _motionDom = require("motion-dom");
var _react = require("react");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
"use client";
function copyRawValuesOnly(target, source, props) {
    for(const key in source)if (!(0, _motionDom.isMotionValue)(source[key]) && !(0, _motionDom.isForcedMotionValue)(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0, _react.useMemo)(()=>{
        const state = (0, _createRenderStateMjs.createHtmlRenderState)();
        (0, _motionDom.buildHTMLStyles)(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [
        visualState
    ]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */ copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
        // Disable scrolling on the draggable direction
        style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
    htmlProps.style = style;
    return htmlProps;
}

},{"motion-dom":[["buildHTMLStyles","7loFt"],["isForcedMotionValue","ctj7z"],["isMotionValue","75Nnh"]],"react":"gOP0N","./utils/create-render-state.mjs":"jcXfZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jcXfZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHtmlRenderState", ()=>createHtmlRenderState);
const createHtmlRenderState = ()=>({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3dQES":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSVGProps", ()=>useSVGProps);
var _motionDom = require("motion-dom");
var _react = require("react");
var _usePropsMjs = require("../html/use-props.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
"use client";
function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0, _react.useMemo)(()=>{
        const state = (0, _createRenderStateMjs.createSvgRenderState)();
        (0, _motionDom.buildSVGAttrs)(state, visualState, (0, _motionDom.isSVGTag)(Component), props.transformTemplate, props.style);
        return {
            ...state.attrs,
            style: {
                ...state.style
            }
        };
    }, [
        visualState
    ]);
    if (props.style) {
        const rawStyles = {};
        (0, _usePropsMjs.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = {
            ...rawStyles,
            ...visualProps.style
        };
    }
    return visualProps;
}

},{"motion-dom":[["buildSVGAttrs","lFfRc"],["isSVGTag","j8mRD"]],"react":"gOP0N","../html/use-props.mjs":"8zRKE","./utils/create-render-state.mjs":"7oGeB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7oGeB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSvgRenderState", ()=>createSvgRenderState);
var _createRenderStateMjs = require("../../html/utils/create-render-state.mjs");
const createSvgRenderState = ()=>({
        ...(0, _createRenderStateMjs.createHtmlRenderState)(),
        attrs: {}
    });

},{"../../html/utils/create-render-state.mjs":"jcXfZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hJgoO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterProps", ()=>filterProps);
parcelHelpers.export(exports, "loadExternalIsValidProp", ()=>loadExternalIsValidProp);
var _motionDom = require("motion-dom");
var _validPropMjs = require("../../../motion/utils/valid-prop.mjs");
let shouldForward = (key)=>!(0, _validPropMjs.isValidMotionProp)(key);
function loadExternalIsValidProp(isValidProp) {
    if (typeof isValidProp !== "function") return;
    // Explicitly filter our events
    shouldForward = (key)=>key.startsWith("on") ? !(0, _validPropMjs.isValidMotionProp)(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */ try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     *
     * String concatenation prevents bundlers like webpack (e.g. Storybook)
     * from statically resolving this optional dependency at build time.
     */ const emotionPkg = "@emotion/is-prop-valid";
    loadExternalIsValidProp(require(emotionPkg).default);
} catch  {
// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for(const key in props){
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */ if (key === "values" && typeof props.values === "object") continue;
        if ((0, _motionDom.isMotionValue)(props[key])) continue;
        if (shouldForward(key) || forwardMotionProps === true && (0, _validPropMjs.isValidMotionProp)(key) || !isDom && !(0, _validPropMjs.isValidMotionProp)(key) || // If trying to use native HTML drag events, forward drag listeners
        props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
    }
    return filteredProps;
}

},{"motion-dom":"75Nnh","../../../motion/utils/valid-prop.mjs":"7m5Ul","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7m5Ul":[function(require,module,exports,__globalThis) {
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidMotionProp", ()=>isValidMotionProp);
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport"
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */ function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fue98":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useHTMLVisualState", ()=>useHTMLVisualState);
var _motionDom = require("motion-dom");
var _useVisualStateMjs = require("../../motion/utils/use-visual-state.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
"use client";
const useHTMLVisualState = /*@__PURE__*/ (0, _useVisualStateMjs.makeUseVisualState)({
    scrapeMotionValuesFromProps: (0, _motionDom.scrapeHTMLMotionValuesFromProps),
    createRenderState: (0, _createRenderStateMjs.createHtmlRenderState)
});

},{"motion-dom":[["scrapeHTMLMotionValuesFromProps","k4A6E","scrapeMotionValuesFromProps"]],"../../motion/utils/use-visual-state.mjs":"6a2G4","./utils/create-render-state.mjs":"jcXfZ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6a2G4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeUseVisualState", ()=>makeUseVisualState);
var _motionDom = require("motion-dom");
var _react = require("react");
var _indexMjs = require("../../context/MotionContext/index.mjs");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
var _useConstantMjs = require("../../utils/use-constant.mjs");
"use client";
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState()
    };
    return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for(const key in motionValues)values[key] = (0, _motionDom.resolveMotionValue)(motionValues[key]);
    let { initial, animate } = props;
    const isControllingVariants$1 = (0, _motionDom.isControllingVariants)(props);
    const isVariantNode$1 = (0, _motionDom.isVariantNode)(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
        if (initial === undefined) initial = context.initial;
        if (animate === undefined) animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !(0, _motionDom.isAnimationControls)(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [
            variantToSet
        ];
        for(let i = 0; i < list.length; i++){
            const resolved = (0, _motionDom.resolveVariantFromProps)(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for(const key in target){
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */ const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) values[key] = valueTarget;
                }
                for(const key in transitionEnd)values[key] = transitionEnd[key];
            }
        }
    }
    return values;
}
const makeUseVisualState = (config)=>(props, isStatic)=>{
        const context = (0, _react.useContext)((0, _indexMjs.MotionContext));
        const presenceContext = (0, _react.useContext)((0, _presenceContextMjs.PresenceContext));
        const make = ()=>makeState(config, props, context, presenceContext);
        return isStatic ? make() : (0, _useConstantMjs.useConstant)(make);
    };

},{"motion-dom":[["isAnimationControls","6fKNU"],["isControllingVariants","iQHEB"],["isVariantNode","iQHEB"],["resolveMotionValue","1iuCH"],["resolveVariantFromProps","gtH2y"]],"react":"gOP0N","../../context/MotionContext/index.mjs":"3rc04","../../context/PresenceContext.mjs":"8rbKE","../../utils/use-constant.mjs":"bFn8i","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1iuCH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveMotionValue", ()=>resolveMotionValue);
var _isMotionValueMjs = require("./is-motion-value.mjs");
/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 */ function resolveMotionValue(value) {
    return (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value;
}

},{"./is-motion-value.mjs":"75Nnh","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dje8Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSVGVisualState", ()=>useSVGVisualState);
var _motionDom = require("motion-dom");
var _useVisualStateMjs = require("../../motion/utils/use-visual-state.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
"use client";
const useSVGVisualState = /*@__PURE__*/ (0, _useVisualStateMjs.makeUseVisualState)({
    scrapeMotionValuesFromProps: (0, _motionDom.scrapeSVGMotionValuesFromProps),
    createRenderState: (0, _createRenderStateMjs.createSvgRenderState)
});

},{"motion-dom":[["scrapeSVGMotionValuesFromProps","j1yaa","scrapeMotionValuesFromProps"]],"../../motion/utils/use-visual-state.mjs":"6a2G4","./utils/create-render-state.mjs":"7oGeB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lKDAB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInitializedFeatureDefinitions", ()=>getInitializedFeatureDefinitions);
parcelHelpers.export(exports, "initFeatureDefinitions", ()=>initFeatureDefinitions);
var _motionDom = require("motion-dom");
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag"
    ],
    exit: [
        "exit"
    ],
    drag: [
        "drag",
        "dragControls"
    ],
    focus: [
        "whileFocus"
    ],
    hover: [
        "whileHover",
        "onHoverStart",
        "onHoverEnd"
    ],
    tap: [
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel"
    ],
    pan: [
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd"
    ],
    inView: [
        "whileInView",
        "onViewportEnter",
        "onViewportLeave"
    ],
    layout: [
        "layout",
        "layoutId"
    ]
};
let isInitialized = false;
/**
 * Initialize feature definitions with isEnabled checks.
 * This must be called before any motion components are rendered.
 */ function initFeatureDefinitions() {
    if (isInitialized) return;
    const initialFeatureDefinitions = {};
    for(const key in featureProps)initialFeatureDefinitions[key] = {
        isEnabled: (props)=>featureProps[key].some((name)=>!!props[name])
    };
    (0, _motionDom.setFeatureDefinitions)(initialFeatureDefinitions);
    isInitialized = true;
}
/**
 * Get the current feature definitions, initializing if needed.
 */ function getInitializedFeatureDefinitions() {
    initFeatureDefinitions();
    return (0, _motionDom.getFeatureDefinitions)();
}

},{"motion-dom":"93dUM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"adjsY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadFeatures", ()=>loadFeatures);
var _motionDom = require("motion-dom");
var _definitionsMjs = require("./definitions.mjs");
function loadFeatures(features) {
    const featureDefinitions = (0, _definitionsMjs.getInitializedFeatureDefinitions)();
    for(const key in features)featureDefinitions[key] = {
        ...featureDefinitions[key],
        ...features[key]
    };
    (0, _motionDom.setFeatureDefinitions)(featureDefinitions);
}

},{"motion-dom":"93dUM","./definitions.mjs":"lKDAB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"615H5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "motionComponentSymbol", ()=>motionComponentSymbol);
const motionComponentSymbol = Symbol.for("motionComponentSymbol");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1e3Rg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMotionRef", ()=>useMotionRef);
var _react = require("react");
"use client";
/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */ function useMotionRef(visualState, visualElement, externalRef) {
    /**
     * Store externalRef in a ref to avoid including it in the useCallback
     * dependency array. Including externalRef in dependencies causes issues
     * with libraries like Radix UI that create new callback refs on each render
     * when using asChild - this would cause the callback to be recreated,
     * triggering element remounts and breaking AnimatePresence exit animations.
     */ const externalRefContainer = (0, _react.useRef)(externalRef);
    (0, _react.useInsertionEffect)(()=>{
        externalRefContainer.current = externalRef;
    });
    // Store cleanup function returned by callback refs (React 19 feature)
    const refCleanup = (0, _react.useRef)(null);
    return (0, _react.useCallback)((instance)=>{
        if (instance) visualState.onMount?.(instance);
        if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
        const ref = externalRefContainer.current;
        if (typeof ref === "function") {
            if (instance) {
                const cleanup = ref(instance);
                if (typeof cleanup === "function") refCleanup.current = cleanup;
            } else if (refCleanup.current) {
                refCleanup.current();
                refCleanup.current = null;
            } else ref(instance);
        } else if (ref) ref.current = instance;
    }, [
        visualElement
    ]);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7oJDj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useVisualElement", ()=>useVisualElement);
var _motionDom = require("motion-dom");
var _react = require("react");
var _lazyContextMjs = require("../../context/LazyContext.mjs");
var _motionConfigContextMjs = require("../../context/MotionConfigContext.mjs");
var _indexMjs = require("../../context/MotionContext/index.mjs");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
var _switchLayoutGroupContextMjs = require("../../context/SwitchLayoutGroupContext.mjs");
var _isRefObjectMjs = require("../../utils/is-ref-object.mjs");
var _useIsomorphicEffectMjs = require("../../utils/use-isomorphic-effect.mjs");
"use client";
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
    const { visualElement: parent } = (0, _react.useContext)((0, _indexMjs.MotionContext));
    const lazyContext = (0, _react.useContext)((0, _lazyContextMjs.LazyContext));
    const presenceContext = (0, _react.useContext)((0, _presenceContextMjs.PresenceContext));
    const motionConfig = (0, _react.useContext)((0, _motionConfigContextMjs.MotionConfigContext));
    const reducedMotionConfig = motionConfig.reducedMotion;
    const skipAnimations = motionConfig.skipAnimations;
    const visualElementRef = (0, _react.useRef)(null);
    /**
     * Track whether the component has been through React's commit phase.
     * Used to detect when LazyMotion features load after the component has mounted.
     */ const hasMountedOnce = (0, _react.useRef)(false);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */ createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
            reducedMotionConfig,
            skipAnimations,
            isSVG
        });
        /**
         * If the component has already mounted before features loaded (e.g. via
         * LazyMotion with async feature loading), we need to force the initial
         * animation to run. Otherwise state changes that occurred before features
         * loaded will be lost and the element will snap to its final state.
         */ if (hasMountedOnce.current && visualElementRef.current) visualElementRef.current.manuallyAnimateOnMount = true;
    }
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */ const initialLayoutGroupConfig = (0, _react.useContext)((0, _switchLayoutGroupContextMjs.SwitchLayoutGroupContext));
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    const isMounted = (0, _react.useRef)(false);
    (0, _react.useInsertionEffect)(()=>{
        /**
         * Check the component has already mounted before calling
         * `update` unnecessarily. This ensures we skip the initial update.
         */ if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */ const optimisedAppearId = props[0, _motionDom.optimizedAppearDataAttribute];
    const wantsHandoff = (0, _react.useRef)(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    (0, _useIsomorphicEffectMjs.useIsomorphicLayoutEffect)(()=>{
        /**
         * Track that this component has mounted. This is used to detect when
         * LazyMotion features load after the component has already committed.
         */ hasMountedOnce.current = true;
        if (!visualElement) return;
        isMounted.current = true;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        visualElement.scheduleRenderMicrotask();
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */ if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
    });
    (0, _react.useEffect)(()=>{
        if (!visualElement) return;
        if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
        if (wantsHandoff.current) {
            // This ensures all future calls to animateChanges() in this component will run in useEffect
            queueMicrotask(()=>{
                window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
        /**
         * Now we've finished triggering animations for this element we
         * can wipe the enteringChildren set for the next render.
         */ visualElement.enteringChildren = undefined;
    });
    return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? undefined : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || dragConstraints && (0, _isRefObjectMjs.isRefObject)(dragConstraints),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */ animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
        layoutAnchor
    });
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement) return undefined;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

},{"motion-dom":"8TzYP","react":"gOP0N","../../context/LazyContext.mjs":"6NhYE","../../context/MotionConfigContext.mjs":"5ZNBi","../../context/MotionContext/index.mjs":"3rc04","../../context/PresenceContext.mjs":"8rbKE","../../context/SwitchLayoutGroupContext.mjs":"ljyQP","../../utils/is-ref-object.mjs":"bQVvo","../../utils/use-isomorphic-effect.mjs":"CyVnr","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8TzYP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncMotionValueAnimation", ()=>(0, _asyncMotionValueAnimationMjs.AsyncMotionValueAnimation));
parcelHelpers.export(exports, "GroupAnimation", ()=>(0, _groupAnimationMjs.GroupAnimation));
parcelHelpers.export(exports, "GroupAnimationWithThen", ()=>(0, _groupAnimationWithThenMjs.GroupAnimationWithThen));
parcelHelpers.export(exports, "JSAnimation", ()=>(0, _jsanimationMjs.JSAnimation));
parcelHelpers.export(exports, "animateValue", ()=>(0, _jsanimationMjs.animateValue));
parcelHelpers.export(exports, "NativeAnimation", ()=>(0, _nativeAnimationMjs.NativeAnimation));
parcelHelpers.export(exports, "NativeAnimationExtended", ()=>(0, _nativeAnimationExtendedMjs.NativeAnimationExtended));
parcelHelpers.export(exports, "NativeAnimationWrapper", ()=>(0, _nativeAnimationWrapperMjs.NativeAnimationWrapper));
parcelHelpers.export(exports, "animationMapKey", ()=>(0, _activeAnimationsMjs.animationMapKey));
parcelHelpers.export(exports, "getAnimationMap", ()=>(0, _activeAnimationsMjs.getAnimationMap));
parcelHelpers.export(exports, "calcChildStagger", ()=>(0, _calcChildStaggerMjs.calcChildStagger));
parcelHelpers.export(exports, "arc", ()=>(0, _arcMjs.arc));
parcelHelpers.export(exports, "getVariableValue", ()=>(0, _cssVariablesConversionMjs.getVariableValue));
parcelHelpers.export(exports, "parseCSSVariable", ()=>(0, _cssVariablesConversionMjs.parseCSSVariable));
parcelHelpers.export(exports, "getDefaultTransition", ()=>(0, _defaultTransitionsMjs.getDefaultTransition));
parcelHelpers.export(exports, "getFinalKeyframe", ()=>(0, _getFinalMjs.getFinalKeyframe));
parcelHelpers.export(exports, "getValueTransition", ()=>(0, _getValueTransitionMjs.getValueTransition));
parcelHelpers.export(exports, "resolveTransition", ()=>(0, _resolveTransitionMjs.resolveTransition));
parcelHelpers.export(exports, "containsCSSVariable", ()=>(0, _isCssVariableMjs.containsCSSVariable));
parcelHelpers.export(exports, "isCSSVariableName", ()=>(0, _isCssVariableMjs.isCSSVariableName));
parcelHelpers.export(exports, "isCSSVariableToken", ()=>(0, _isCssVariableMjs.isCSSVariableToken));
parcelHelpers.export(exports, "isTransitionDefined", ()=>(0, _isTransitionDefinedMjs.isTransitionDefined));
parcelHelpers.export(exports, "makeAnimationInstant", ()=>(0, _makeAnimationInstantMjs.makeAnimationInstant));
parcelHelpers.export(exports, "animateMotionValue", ()=>(0, _motionValueMjs.animateMotionValue));
parcelHelpers.export(exports, "animateVisualElement", ()=>(0, _visualElementMjs.animateVisualElement));
parcelHelpers.export(exports, "animateTarget", ()=>(0, _visualElementTargetMjs.animateTarget));
parcelHelpers.export(exports, "animateVariant", ()=>(0, _visualElementVariantMjs.animateVariant));
parcelHelpers.export(exports, "optimizedAppearDataAttribute", ()=>(0, _dataIdMjs.optimizedAppearDataAttribute));
parcelHelpers.export(exports, "optimizedAppearDataId", ()=>(0, _dataIdMjs.optimizedAppearDataId));
parcelHelpers.export(exports, "getOptimisedAppearId", ()=>(0, _getAppearIdMjs.getOptimisedAppearId));
parcelHelpers.export(exports, "inertia", ()=>(0, _inertiaMjs.inertia));
parcelHelpers.export(exports, "defaultEasing", ()=>(0, _keyframesMjs.defaultEasing));
parcelHelpers.export(exports, "keyframes", ()=>(0, _keyframesMjs.keyframes));
parcelHelpers.export(exports, "spring", ()=>(0, _springMjs.spring));
parcelHelpers.export(exports, "calcGeneratorDuration", ()=>(0, _calcDurationMjs.calcGeneratorDuration));
parcelHelpers.export(exports, "maxGeneratorDuration", ()=>(0, _calcDurationMjs.maxGeneratorDuration));
parcelHelpers.export(exports, "createGeneratorEasing", ()=>(0, _createGeneratorEasingMjs.createGeneratorEasing));
parcelHelpers.export(exports, "isGenerator", ()=>(0, _isGeneratorMjs.isGenerator));
parcelHelpers.export(exports, "DOMKeyframesResolver", ()=>(0, _domkeyframesResolverMjs.DOMKeyframesResolver));
parcelHelpers.export(exports, "KeyframeResolver", ()=>(0, _keyframesResolverMjs.KeyframeResolver));
parcelHelpers.export(exports, "flushKeyframeResolvers", ()=>(0, _keyframesResolverMjs.flushKeyframeResolvers));
parcelHelpers.export(exports, "defaultOffset", ()=>(0, _defaultMjs.defaultOffset));
parcelHelpers.export(exports, "fillOffset", ()=>(0, _fillMjs.fillOffset));
parcelHelpers.export(exports, "convertOffsetToTimes", ()=>(0, _timeMjs.convertOffsetToTimes));
parcelHelpers.export(exports, "applyPxDefaults", ()=>(0, _applyPxDefaultsMjs.applyPxDefaults));
parcelHelpers.export(exports, "fillWildcards", ()=>(0, _fillWildcardsMjs.fillWildcards));
parcelHelpers.export(exports, "cubicBezierAsString", ()=>(0, _cubicBezierMjs.cubicBezierAsString));
parcelHelpers.export(exports, "isWaapiSupportedEasing", ()=>(0, _isSupportedMjs.isWaapiSupportedEasing));
parcelHelpers.export(exports, "mapEasingToNativeEasing", ()=>(0, _mapEasingMjs.mapEasingToNativeEasing));
parcelHelpers.export(exports, "supportedWaapiEasing", ()=>(0, _supportedMjs.supportedWaapiEasing));
parcelHelpers.export(exports, "startWaapiAnimation", ()=>(0, _startWaapiAnimationMjs.startWaapiAnimation));
parcelHelpers.export(exports, "supportsPartialKeyframes", ()=>(0, _partialKeyframesMjs.supportsPartialKeyframes));
parcelHelpers.export(exports, "supportsBrowserAnimation", ()=>(0, _waapiMjs.supportsBrowserAnimation));
parcelHelpers.export(exports, "acceleratedValues", ()=>(0, _acceleratedValuesMjs.acceleratedValues));
parcelHelpers.export(exports, "applyGeneratorOptions", ()=>(0, _applyGeneratorMjs.applyGeneratorOptions));
parcelHelpers.export(exports, "generateLinearEasing", ()=>(0, _linearMjs.generateLinearEasing));
parcelHelpers.export(exports, "addAttrValue", ()=>(0, _indexMjs.addAttrValue));
parcelHelpers.export(exports, "attrEffect", ()=>(0, _indexMjs.attrEffect));
parcelHelpers.export(exports, "propEffect", ()=>(0, _indexMjs1.propEffect));
parcelHelpers.export(exports, "addStyleValue", ()=>(0, _indexMjs2.addStyleValue));
parcelHelpers.export(exports, "styleEffect", ()=>(0, _indexMjs2.styleEffect));
parcelHelpers.export(exports, "svgEffect", ()=>(0, _indexMjs3.svgEffect));
parcelHelpers.export(exports, "createRenderBatcher", ()=>(0, _batcherMjs.createRenderBatcher));
parcelHelpers.export(exports, "cancelMicrotask", ()=>(0, _microtaskMjs.cancelMicrotask));
parcelHelpers.export(exports, "microtask", ()=>(0, _microtaskMjs.microtask));
parcelHelpers.export(exports, "time", ()=>(0, _syncTimeMjs.time));
parcelHelpers.export(exports, "isDragActive", ()=>(0, _isActiveMjs.isDragActive));
parcelHelpers.export(exports, "isDragging", ()=>(0, _isActiveMjs.isDragging));
parcelHelpers.export(exports, "setDragLock", ()=>(0, _setActiveMjs.setDragLock));
parcelHelpers.export(exports, "hover", ()=>(0, _hoverMjs.hover));
parcelHelpers.export(exports, "press", ()=>(0, _indexMjs4.press));
parcelHelpers.export(exports, "isElementKeyboardAccessible", ()=>(0, _isKeyboardAccessibleMjs.isElementKeyboardAccessible));
parcelHelpers.export(exports, "isElementTextInput", ()=>(0, _isKeyboardAccessibleMjs.isElementTextInput));
parcelHelpers.export(exports, "isNodeOrChild", ()=>(0, _isNodeOrChildMjs.isNodeOrChild));
parcelHelpers.export(exports, "isPrimaryPointer", ()=>(0, _isPrimaryPointerMjs.isPrimaryPointer));
parcelHelpers.export(exports, "defaultTransformValue", ()=>(0, _parseTransformMjs.defaultTransformValue));
parcelHelpers.export(exports, "parseValueFromTransform", ()=>(0, _parseTransformMjs.parseValueFromTransform));
parcelHelpers.export(exports, "readTransformValue", ()=>(0, _parseTransformMjs.readTransformValue));
parcelHelpers.export(exports, "getComputedStyle", ()=>(0, _styleComputedMjs.getComputedStyle));
parcelHelpers.export(exports, "setStyle", ()=>(0, _styleSetMjs.setStyle));
parcelHelpers.export(exports, "isKeyframesTarget", ()=>(0, _isKeyframesTargetMjs.isKeyframesTarget));
parcelHelpers.export(exports, "positionalKeys", ()=>(0, _keysPositionMjs.positionalKeys));
parcelHelpers.export(exports, "transformPropOrder", ()=>(0, _keysTransformMjs.transformPropOrder));
parcelHelpers.export(exports, "transformProps", ()=>(0, _keysTransformMjs.transformProps));
parcelHelpers.export(exports, "resize", ()=>(0, _indexMjs5.resize));
parcelHelpers.export(exports, "observeTimeline", ()=>(0, _observeMjs.observeTimeline));
parcelHelpers.export(exports, "recordStats", ()=>(0, _indexMjs6.recordStats));
parcelHelpers.export(exports, "statsBuffer", ()=>(0, _bufferMjs.statsBuffer));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateMjs.interpolate));
parcelHelpers.export(exports, "isHTMLElement", ()=>(0, _isHtmlElementMjs.isHTMLElement));
parcelHelpers.export(exports, "isSVGElement", ()=>(0, _isSvgElementMjs.isSVGElement));
parcelHelpers.export(exports, "isSVGSVGElement", ()=>(0, _isSvgSvgElementMjs.isSVGSVGElement));
parcelHelpers.export(exports, "mix", ()=>(0, _indexMjs7.mix));
parcelHelpers.export(exports, "mixColor", ()=>(0, _colorMjs.mixColor));
parcelHelpers.export(exports, "mixLinearColor", ()=>(0, _colorMjs.mixLinearColor));
parcelHelpers.export(exports, "getMixer", ()=>(0, _complexMjs.getMixer));
parcelHelpers.export(exports, "mixArray", ()=>(0, _complexMjs.mixArray));
parcelHelpers.export(exports, "mixComplex", ()=>(0, _complexMjs.mixComplex));
parcelHelpers.export(exports, "mixObject", ()=>(0, _complexMjs.mixObject));
parcelHelpers.export(exports, "mixImmediate", ()=>(0, _immediateMjs.mixImmediate));
parcelHelpers.export(exports, "mixNumber", ()=>(0, _numberMjs.mixNumber));
parcelHelpers.export(exports, "invisibleValues", ()=>(0, _visibilityMjs.invisibleValues));
parcelHelpers.export(exports, "mixVisibility", ()=>(0, _visibilityMjs.mixVisibility));
parcelHelpers.export(exports, "resolveElements", ()=>(0, _resolveElementsMjs.resolveElements));
parcelHelpers.export(exports, "getOriginIndex", ()=>(0, _staggerMjs.getOriginIndex));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerMjs.stagger));
parcelHelpers.export(exports, "supportsFlags", ()=>(0, _flagsMjs.supportsFlags));
parcelHelpers.export(exports, "supportsLinearEasing", ()=>(0, _linearEasingMjs.supportsLinearEasing));
parcelHelpers.export(exports, "supportsScrollTimeline", ()=>(0, _scrollTimelineMjs.supportsScrollTimeline));
parcelHelpers.export(exports, "supportsViewTimeline", ()=>(0, _scrollTimelineMjs.supportsViewTimeline));
parcelHelpers.export(exports, "transform", ()=>(0, _transformMjs.transform));
parcelHelpers.export(exports, "MotionValue", ()=>(0, _indexMjs8.MotionValue));
parcelHelpers.export(exports, "collectMotionValues", ()=>(0, _indexMjs8.collectMotionValues));
parcelHelpers.export(exports, "motionValue", ()=>(0, _indexMjs8.motionValue));
parcelHelpers.export(exports, "attachFollow", ()=>(0, _followValueMjs.attachFollow));
parcelHelpers.export(exports, "followValue", ()=>(0, _followValueMjs.followValue));
parcelHelpers.export(exports, "mapValue", ()=>(0, _mapValueMjs.mapValue));
parcelHelpers.export(exports, "attachSpring", ()=>(0, _springValueMjs.attachSpring));
parcelHelpers.export(exports, "springValue", ()=>(0, _springValueMjs.springValue));
parcelHelpers.export(exports, "transformValue", ()=>(0, _transformValueMjs.transformValue));
parcelHelpers.export(exports, "color", ()=>(0, _indexMjs9.color));
parcelHelpers.export(exports, "hex", ()=>(0, _hexMjs.hex));
parcelHelpers.export(exports, "hsla", ()=>(0, _hslaMjs.hsla));
parcelHelpers.export(exports, "hslaToRgba", ()=>(0, _hslaToRgbaMjs.hslaToRgba));
parcelHelpers.export(exports, "rgbUnit", ()=>(0, _rgbaMjs.rgbUnit));
parcelHelpers.export(exports, "rgba", ()=>(0, _rgbaMjs.rgba));
parcelHelpers.export(exports, "analyseComplexValue", ()=>(0, _indexMjs10.analyseComplexValue));
parcelHelpers.export(exports, "complex", ()=>(0, _indexMjs10.complex));
parcelHelpers.export(exports, "dimensionValueTypes", ()=>(0, _dimensionsMjs.dimensionValueTypes));
parcelHelpers.export(exports, "findDimensionValueType", ()=>(0, _dimensionsMjs.findDimensionValueType));
parcelHelpers.export(exports, "defaultValueTypes", ()=>(0, _defaultsMjs.defaultValueTypes));
parcelHelpers.export(exports, "getDefaultValueType", ()=>(0, _defaultsMjs.getDefaultValueType));
parcelHelpers.export(exports, "numberValueTypes", ()=>(0, _numberMjs1.numberValueTypes));
parcelHelpers.export(exports, "transformValueTypes", ()=>(0, _transformMjs1.transformValueTypes));
parcelHelpers.export(exports, "alpha", ()=>(0, _indexMjs11.alpha));
parcelHelpers.export(exports, "number", ()=>(0, _indexMjs11.number));
parcelHelpers.export(exports, "scale", ()=>(0, _indexMjs11.scale));
parcelHelpers.export(exports, "degrees", ()=>(0, _unitsMjs.degrees));
parcelHelpers.export(exports, "percent", ()=>(0, _unitsMjs.percent));
parcelHelpers.export(exports, "progressPercentage", ()=>(0, _unitsMjs.progressPercentage));
parcelHelpers.export(exports, "px", ()=>(0, _unitsMjs.px));
parcelHelpers.export(exports, "vh", ()=>(0, _unitsMjs.vh));
parcelHelpers.export(exports, "vw", ()=>(0, _unitsMjs.vw));
parcelHelpers.export(exports, "testValueType", ()=>(0, _testMjs.testValueType));
parcelHelpers.export(exports, "getAnimatableNone", ()=>(0, _animatableNoneMjs.getAnimatableNone));
parcelHelpers.export(exports, "findValueType", ()=>(0, _findMjs.findValueType));
parcelHelpers.export(exports, "getValueAsType", ()=>(0, _getAsTypeMjs.getValueAsType));
parcelHelpers.export(exports, "isMotionValue", ()=>(0, _isMotionValueMjs.isMotionValue));
parcelHelpers.export(exports, "addValueToWillChange", ()=>(0, _addWillChangeMjs.addValueToWillChange));
parcelHelpers.export(exports, "isWillChangeMotionValue", ()=>(0, _isMjs.isWillChangeMotionValue));
parcelHelpers.export(exports, "ViewTransitionBuilder", ()=>(0, _indexMjs12.ViewTransitionBuilder));
parcelHelpers.export(exports, "animateView", ()=>(0, _indexMjs12.animateView));
parcelHelpers.export(exports, "getViewAnimationLayerInfo", ()=>(0, _getLayerInfoMjs.getViewAnimationLayerInfo));
parcelHelpers.export(exports, "getViewAnimations", ()=>(0, _getViewAnimationsMjs.getViewAnimations));
parcelHelpers.export(exports, "DOMVisualElement", ()=>(0, _domvisualElementMjs.DOMVisualElement));
parcelHelpers.export(exports, "Feature", ()=>(0, _featureMjs.Feature));
parcelHelpers.export(exports, "HTMLVisualElement", ()=>(0, _htmlvisualElementMjs.HTMLVisualElement));
parcelHelpers.export(exports, "ObjectVisualElement", ()=>(0, _objectVisualElementMjs.ObjectVisualElement));
parcelHelpers.export(exports, "visualElementStore", ()=>(0, _storeMjs.visualElementStore));
parcelHelpers.export(exports, "SVGVisualElement", ()=>(0, _svgvisualElementMjs.SVGVisualElement));
parcelHelpers.export(exports, "VisualElement", ()=>(0, _visualElementMjs1.VisualElement));
parcelHelpers.export(exports, "getFeatureDefinitions", ()=>(0, _visualElementMjs1.getFeatureDefinitions));
parcelHelpers.export(exports, "setFeatureDefinitions", ()=>(0, _visualElementMjs1.setFeatureDefinitions));
parcelHelpers.export(exports, "checkVariantsDidChange", ()=>(0, _animationStateMjs.checkVariantsDidChange));
parcelHelpers.export(exports, "createAnimationState", ()=>(0, _animationStateMjs.createAnimationState));
parcelHelpers.export(exports, "getVariantContext", ()=>(0, _getVariantContextMjs.getVariantContext));
parcelHelpers.export(exports, "isAnimationControls", ()=>(0, _isAnimationControlsMjs.isAnimationControls));
parcelHelpers.export(exports, "isControllingVariants", ()=>(0, _isControllingVariantsMjs.isControllingVariants));
parcelHelpers.export(exports, "isVariantNode", ()=>(0, _isControllingVariantsMjs.isVariantNode));
parcelHelpers.export(exports, "isForcedMotionValue", ()=>(0, _isForcedMotionValueMjs.isForcedMotionValue));
parcelHelpers.export(exports, "isVariantLabel", ()=>(0, _isVariantLabelMjs.isVariantLabel));
parcelHelpers.export(exports, "updateMotionValuesFromProps", ()=>(0, _motionValuesMjs.updateMotionValuesFromProps));
parcelHelpers.export(exports, "resolveVariant", ()=>(0, _resolveDynamicVariantsMjs.resolveVariant));
parcelHelpers.export(exports, "resolveVariantFromProps", ()=>(0, _resolveVariantsMjs.resolveVariantFromProps));
parcelHelpers.export(exports, "setTarget", ()=>(0, _settersMjs.setTarget));
parcelHelpers.export(exports, "variantPriorityOrder", ()=>(0, _variantPropsMjs.variantPriorityOrder));
parcelHelpers.export(exports, "variantProps", ()=>(0, _variantPropsMjs.variantProps));
parcelHelpers.export(exports, "initPrefersReducedMotion", ()=>(0, _indexMjs13.initPrefersReducedMotion));
parcelHelpers.export(exports, "convertBoundingBoxToBox", ()=>(0, _conversionMjs.convertBoundingBoxToBox));
parcelHelpers.export(exports, "convertBoxToBoundingBox", ()=>(0, _conversionMjs.convertBoxToBoundingBox));
parcelHelpers.export(exports, "transformBoxPoints", ()=>(0, _conversionMjs.transformBoxPoints));
parcelHelpers.export(exports, "copyAxisDeltaInto", ()=>(0, _copyMjs.copyAxisDeltaInto));
parcelHelpers.export(exports, "copyAxisInto", ()=>(0, _copyMjs.copyAxisInto));
parcelHelpers.export(exports, "copyBoxInto", ()=>(0, _copyMjs.copyBoxInto));
parcelHelpers.export(exports, "applyAxisDelta", ()=>(0, _deltaApplyMjs.applyAxisDelta));
parcelHelpers.export(exports, "applyBoxDelta", ()=>(0, _deltaApplyMjs.applyBoxDelta));
parcelHelpers.export(exports, "applyPointDelta", ()=>(0, _deltaApplyMjs.applyPointDelta));
parcelHelpers.export(exports, "applyTreeDeltas", ()=>(0, _deltaApplyMjs.applyTreeDeltas));
parcelHelpers.export(exports, "scalePoint", ()=>(0, _deltaApplyMjs.scalePoint));
parcelHelpers.export(exports, "transformAxis", ()=>(0, _deltaApplyMjs.transformAxis));
parcelHelpers.export(exports, "transformBox", ()=>(0, _deltaApplyMjs.transformBox));
parcelHelpers.export(exports, "translateAxis", ()=>(0, _deltaApplyMjs.translateAxis));
parcelHelpers.export(exports, "calcAxisDelta", ()=>(0, _deltaCalcMjs.calcAxisDelta));
parcelHelpers.export(exports, "calcBoxDelta", ()=>(0, _deltaCalcMjs.calcBoxDelta));
parcelHelpers.export(exports, "calcLength", ()=>(0, _deltaCalcMjs.calcLength));
parcelHelpers.export(exports, "calcRelativeAxis", ()=>(0, _deltaCalcMjs.calcRelativeAxis));
parcelHelpers.export(exports, "calcRelativeAxisPosition", ()=>(0, _deltaCalcMjs.calcRelativeAxisPosition));
parcelHelpers.export(exports, "calcRelativeBox", ()=>(0, _deltaCalcMjs.calcRelativeBox));
parcelHelpers.export(exports, "calcRelativePosition", ()=>(0, _deltaCalcMjs.calcRelativePosition));
parcelHelpers.export(exports, "isNear", ()=>(0, _deltaCalcMjs.isNear));
parcelHelpers.export(exports, "removeAxisDelta", ()=>(0, _deltaRemoveMjs.removeAxisDelta));
parcelHelpers.export(exports, "removeAxisTransforms", ()=>(0, _deltaRemoveMjs.removeAxisTransforms));
parcelHelpers.export(exports, "removeBoxTransforms", ()=>(0, _deltaRemoveMjs.removeBoxTransforms));
parcelHelpers.export(exports, "removePointDelta", ()=>(0, _deltaRemoveMjs.removePointDelta));
parcelHelpers.export(exports, "createAxis", ()=>(0, _modelsMjs.createAxis));
parcelHelpers.export(exports, "createAxisDelta", ()=>(0, _modelsMjs.createAxisDelta));
parcelHelpers.export(exports, "createBox", ()=>(0, _modelsMjs.createBox));
parcelHelpers.export(exports, "createDelta", ()=>(0, _modelsMjs.createDelta));
parcelHelpers.export(exports, "aspectRatio", ()=>(0, _utilsMjs.aspectRatio));
parcelHelpers.export(exports, "axisDeltaEquals", ()=>(0, _utilsMjs.axisDeltaEquals));
parcelHelpers.export(exports, "axisEquals", ()=>(0, _utilsMjs.axisEquals));
parcelHelpers.export(exports, "axisEqualsRounded", ()=>(0, _utilsMjs.axisEqualsRounded));
parcelHelpers.export(exports, "boxEquals", ()=>(0, _utilsMjs.boxEquals));
parcelHelpers.export(exports, "boxEqualsRounded", ()=>(0, _utilsMjs.boxEqualsRounded));
parcelHelpers.export(exports, "isDeltaZero", ()=>(0, _utilsMjs.isDeltaZero));
parcelHelpers.export(exports, "eachAxis", ()=>(0, _eachAxisMjs.eachAxis));
parcelHelpers.export(exports, "has2DTranslate", ()=>(0, _hasTransformMjs.has2DTranslate));
parcelHelpers.export(exports, "hasScale", ()=>(0, _hasTransformMjs.hasScale));
parcelHelpers.export(exports, "hasTransform", ()=>(0, _hasTransformMjs.hasTransform));
parcelHelpers.export(exports, "measurePageBox", ()=>(0, _measureMjs.measurePageBox));
parcelHelpers.export(exports, "measureViewportBox", ()=>(0, _measureMjs.measureViewportBox));
parcelHelpers.export(exports, "correctBorderRadius", ()=>(0, _scaleBorderRadiusMjs.correctBorderRadius));
parcelHelpers.export(exports, "pixelsToPercent", ()=>(0, _scaleBorderRadiusMjs.pixelsToPercent));
parcelHelpers.export(exports, "correctBoxShadow", ()=>(0, _scaleBoxShadowMjs.correctBoxShadow));
parcelHelpers.export(exports, "buildProjectionTransform", ()=>(0, _transformMjs2.buildProjectionTransform));
parcelHelpers.export(exports, "mixValues", ()=>(0, _mixValuesMjs.mixValues));
parcelHelpers.export(exports, "animateSingleValue", ()=>(0, _singleValueMjs.animateSingleValue));
parcelHelpers.export(exports, "addDomEvent", ()=>(0, _addDomEventMjs.addDomEvent));
parcelHelpers.export(exports, "compareByDepth", ()=>(0, _compareByDepthMjs.compareByDepth));
parcelHelpers.export(exports, "FlatTree", ()=>(0, _flatTreeMjs.FlatTree));
parcelHelpers.export(exports, "delay", ()=>(0, _delayMjs.delay));
parcelHelpers.export(exports, "delayInSeconds", ()=>(0, _delayMjs.delayInSeconds));
parcelHelpers.export(exports, "resolveMotionValue", ()=>(0, _resolveMotionValueMjs.resolveMotionValue));
parcelHelpers.export(exports, "cleanDirtyNodes", ()=>(0, _createProjectionNodeMjs.cleanDirtyNodes));
parcelHelpers.export(exports, "createProjectionNode", ()=>(0, _createProjectionNodeMjs.createProjectionNode));
parcelHelpers.export(exports, "propagateDirtyNodes", ()=>(0, _createProjectionNodeMjs.propagateDirtyNodes));
parcelHelpers.export(exports, "DocumentProjectionNode", ()=>(0, _documentProjectionNodeMjs.DocumentProjectionNode));
parcelHelpers.export(exports, "nodeGroup", ()=>(0, _groupMjs.nodeGroup));
parcelHelpers.export(exports, "HTMLProjectionNode", ()=>(0, _htmlprojectionNodeMjs.HTMLProjectionNode));
parcelHelpers.export(exports, "rootProjectionNode", ()=>(0, _htmlprojectionNodeMjs.rootProjectionNode));
parcelHelpers.export(exports, "globalProjectionState", ()=>(0, _stateMjs.globalProjectionState));
parcelHelpers.export(exports, "NodeStack", ()=>(0, _stackMjs.NodeStack));
parcelHelpers.export(exports, "camelToDash", ()=>(0, _camelToDashMjs.camelToDash));
parcelHelpers.export(exports, "buildHTMLStyles", ()=>(0, _buildStylesMjs.buildHTMLStyles));
parcelHelpers.export(exports, "buildTransform", ()=>(0, _buildTransformMjs.buildTransform));
parcelHelpers.export(exports, "renderHTML", ()=>(0, _renderMjs.renderHTML));
parcelHelpers.export(exports, "scrapeHTMLMotionValuesFromProps", ()=>(0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps));
parcelHelpers.export(exports, "buildSVGAttrs", ()=>(0, _buildAttrsMjs.buildSVGAttrs));
parcelHelpers.export(exports, "camelCaseAttributes", ()=>(0, _camelCaseAttrsMjs.camelCaseAttributes));
parcelHelpers.export(exports, "isSVGTag", ()=>(0, _isSvgTagMjs.isSVGTag));
parcelHelpers.export(exports, "buildSVGPath", ()=>(0, _pathMjs.buildSVGPath));
parcelHelpers.export(exports, "renderSVG", ()=>(0, _renderMjs1.renderSVG));
parcelHelpers.export(exports, "scrapeSVGMotionValuesFromProps", ()=>(0, _scrapeMotionValuesMjs1.scrapeMotionValuesFromProps));
parcelHelpers.export(exports, "LayoutAnimationBuilder", ()=>(0, _layoutAnimationBuilderMjs.LayoutAnimationBuilder));
parcelHelpers.export(exports, "parseAnimateLayoutArgs", ()=>(0, _layoutAnimationBuilderMjs.parseAnimateLayoutArgs));
parcelHelpers.export(exports, "cancelSync", ()=>(0, _indexLegacyMjs.cancelSync));
parcelHelpers.export(exports, "sync", ()=>(0, _indexLegacyMjs.sync));
parcelHelpers.export(exports, "addScaleCorrector", ()=>(0, _scaleCorrectionMjs.addScaleCorrector));
parcelHelpers.export(exports, "scaleCorrectors", ()=>(0, _scaleCorrectionMjs.scaleCorrectors));
parcelHelpers.export(exports, "cancelFrame", ()=>(0, _frameMjs.cancelFrame));
parcelHelpers.export(exports, "frame", ()=>(0, _frameMjs.frame));
parcelHelpers.export(exports, "frameData", ()=>(0, _frameMjs.frameData));
parcelHelpers.export(exports, "frameSteps", ()=>(0, _frameMjs.frameSteps));
parcelHelpers.export(exports, "hasReducedMotionListener", ()=>(0, _stateMjs1.hasReducedMotionListener));
parcelHelpers.export(exports, "prefersReducedMotion", ()=>(0, _stateMjs1.prefersReducedMotion));
var _asyncMotionValueAnimationMjs = require("./animation/AsyncMotionValueAnimation.mjs");
var _groupAnimationMjs = require("./animation/GroupAnimation.mjs");
var _groupAnimationWithThenMjs = require("./animation/GroupAnimationWithThen.mjs");
var _jsanimationMjs = require("./animation/JSAnimation.mjs");
var _nativeAnimationMjs = require("./animation/NativeAnimation.mjs");
var _nativeAnimationExtendedMjs = require("./animation/NativeAnimationExtended.mjs");
var _nativeAnimationWrapperMjs = require("./animation/NativeAnimationWrapper.mjs");
var _activeAnimationsMjs = require("./animation/utils/active-animations.mjs");
var _calcChildStaggerMjs = require("./animation/utils/calc-child-stagger.mjs");
var _arcMjs = require("./animation/utils/arc.mjs");
var _cssVariablesConversionMjs = require("./animation/utils/css-variables-conversion.mjs");
var _defaultTransitionsMjs = require("./animation/utils/default-transitions.mjs");
var _getFinalMjs = require("./animation/keyframes/get-final.mjs");
var _getValueTransitionMjs = require("./animation/utils/get-value-transition.mjs");
var _resolveTransitionMjs = require("./animation/utils/resolve-transition.mjs");
var _isCssVariableMjs = require("./animation/utils/is-css-variable.mjs");
var _isTransitionDefinedMjs = require("./animation/utils/is-transition-defined.mjs");
var _makeAnimationInstantMjs = require("./animation/utils/make-animation-instant.mjs");
var _motionValueMjs = require("./animation/interfaces/motion-value.mjs");
var _visualElementMjs = require("./animation/interfaces/visual-element.mjs");
var _visualElementTargetMjs = require("./animation/interfaces/visual-element-target.mjs");
var _visualElementVariantMjs = require("./animation/interfaces/visual-element-variant.mjs");
var _dataIdMjs = require("./animation/optimized-appear/data-id.mjs");
var _getAppearIdMjs = require("./animation/optimized-appear/get-appear-id.mjs");
var _inertiaMjs = require("./animation/generators/inertia.mjs");
var _keyframesMjs = require("./animation/generators/keyframes.mjs");
var _springMjs = require("./animation/generators/spring.mjs");
var _calcDurationMjs = require("./animation/generators/utils/calc-duration.mjs");
var _createGeneratorEasingMjs = require("./animation/generators/utils/create-generator-easing.mjs");
var _isGeneratorMjs = require("./animation/generators/utils/is-generator.mjs");
var _domkeyframesResolverMjs = require("./animation/keyframes/DOMKeyframesResolver.mjs");
var _keyframesResolverMjs = require("./animation/keyframes/KeyframesResolver.mjs");
var _defaultMjs = require("./animation/keyframes/offsets/default.mjs");
var _fillMjs = require("./animation/keyframes/offsets/fill.mjs");
var _timeMjs = require("./animation/keyframes/offsets/time.mjs");
var _applyPxDefaultsMjs = require("./animation/keyframes/utils/apply-px-defaults.mjs");
var _fillWildcardsMjs = require("./animation/keyframes/utils/fill-wildcards.mjs");
var _cubicBezierMjs = require("./animation/waapi/easing/cubic-bezier.mjs");
var _isSupportedMjs = require("./animation/waapi/easing/is-supported.mjs");
var _mapEasingMjs = require("./animation/waapi/easing/map-easing.mjs");
var _supportedMjs = require("./animation/waapi/easing/supported.mjs");
var _startWaapiAnimationMjs = require("./animation/waapi/start-waapi-animation.mjs");
var _partialKeyframesMjs = require("./animation/waapi/supports/partial-keyframes.mjs");
var _waapiMjs = require("./animation/waapi/supports/waapi.mjs");
var _acceleratedValuesMjs = require("./animation/waapi/utils/accelerated-values.mjs");
var _applyGeneratorMjs = require("./animation/waapi/utils/apply-generator.mjs");
var _linearMjs = require("./animation/waapi/utils/linear.mjs");
var _indexMjs = require("./effects/attr/index.mjs");
var _indexMjs1 = require("./effects/prop/index.mjs");
var _indexMjs2 = require("./effects/style/index.mjs");
var _indexMjs3 = require("./effects/svg/index.mjs");
var _batcherMjs = require("./frameloop/batcher.mjs");
var _microtaskMjs = require("./frameloop/microtask.mjs");
var _syncTimeMjs = require("./frameloop/sync-time.mjs");
var _isActiveMjs = require("./gestures/drag/state/is-active.mjs");
var _setActiveMjs = require("./gestures/drag/state/set-active.mjs");
var _hoverMjs = require("./gestures/hover.mjs");
var _indexMjs4 = require("./gestures/press/index.mjs");
var _isKeyboardAccessibleMjs = require("./gestures/press/utils/is-keyboard-accessible.mjs");
var _isNodeOrChildMjs = require("./gestures/utils/is-node-or-child.mjs");
var _isPrimaryPointerMjs = require("./gestures/utils/is-primary-pointer.mjs");
var _parseTransformMjs = require("./render/dom/parse-transform.mjs");
var _styleComputedMjs = require("./render/dom/style-computed.mjs");
var _styleSetMjs = require("./render/dom/style-set.mjs");
var _isKeyframesTargetMjs = require("./render/utils/is-keyframes-target.mjs");
var _keysPositionMjs = require("./render/utils/keys-position.mjs");
var _keysTransformMjs = require("./render/utils/keys-transform.mjs");
var _indexMjs5 = require("./resize/index.mjs");
var _observeMjs = require("./scroll/observe.mjs");
var _indexMjs6 = require("./stats/index.mjs");
var _bufferMjs = require("./stats/buffer.mjs");
var _interpolateMjs = require("./utils/interpolate.mjs");
var _isHtmlElementMjs = require("./utils/is-html-element.mjs");
var _isSvgElementMjs = require("./utils/is-svg-element.mjs");
var _isSvgSvgElementMjs = require("./utils/is-svg-svg-element.mjs");
var _indexMjs7 = require("./utils/mix/index.mjs");
var _colorMjs = require("./utils/mix/color.mjs");
var _complexMjs = require("./utils/mix/complex.mjs");
var _immediateMjs = require("./utils/mix/immediate.mjs");
var _numberMjs = require("./utils/mix/number.mjs");
var _visibilityMjs = require("./utils/mix/visibility.mjs");
var _resolveElementsMjs = require("./utils/resolve-elements.mjs");
var _staggerMjs = require("./utils/stagger.mjs");
var _flagsMjs = require("./utils/supports/flags.mjs");
var _linearEasingMjs = require("./utils/supports/linear-easing.mjs");
var _scrollTimelineMjs = require("./utils/supports/scroll-timeline.mjs");
var _transformMjs = require("./utils/transform.mjs");
var _indexMjs8 = require("./value/index.mjs");
var _followValueMjs = require("./value/follow-value.mjs");
var _mapValueMjs = require("./value/map-value.mjs");
var _springValueMjs = require("./value/spring-value.mjs");
var _transformValueMjs = require("./value/transform-value.mjs");
var _indexMjs9 = require("./value/types/color/index.mjs");
var _hexMjs = require("./value/types/color/hex.mjs");
var _hslaMjs = require("./value/types/color/hsla.mjs");
var _hslaToRgbaMjs = require("./value/types/color/hsla-to-rgba.mjs");
var _rgbaMjs = require("./value/types/color/rgba.mjs");
var _indexMjs10 = require("./value/types/complex/index.mjs");
var _dimensionsMjs = require("./value/types/dimensions.mjs");
var _defaultsMjs = require("./value/types/maps/defaults.mjs");
var _numberMjs1 = require("./value/types/maps/number.mjs");
var _transformMjs1 = require("./value/types/maps/transform.mjs");
var _indexMjs11 = require("./value/types/numbers/index.mjs");
var _unitsMjs = require("./value/types/numbers/units.mjs");
var _testMjs = require("./value/types/test.mjs");
var _animatableNoneMjs = require("./value/types/utils/animatable-none.mjs");
var _findMjs = require("./value/types/utils/find.mjs");
var _getAsTypeMjs = require("./value/types/utils/get-as-type.mjs");
var _isMotionValueMjs = require("./value/utils/is-motion-value.mjs");
var _addWillChangeMjs = require("./value/will-change/add-will-change.mjs");
var _isMjs = require("./value/will-change/is.mjs");
var _indexMjs12 = require("./view/index.mjs");
var _getLayerInfoMjs = require("./view/utils/get-layer-info.mjs");
var _getViewAnimationsMjs = require("./view/utils/get-view-animations.mjs");
var _domvisualElementMjs = require("./render/dom/DOMVisualElement.mjs");
var _featureMjs = require("./render/Feature.mjs");
var _htmlvisualElementMjs = require("./render/html/HTMLVisualElement.mjs");
var _objectVisualElementMjs = require("./render/object/ObjectVisualElement.mjs");
var _storeMjs = require("./render/store.mjs");
var _svgvisualElementMjs = require("./render/svg/SVGVisualElement.mjs");
var _visualElementMjs1 = require("./render/VisualElement.mjs");
var _animationStateMjs = require("./render/utils/animation-state.mjs");
var _getVariantContextMjs = require("./render/utils/get-variant-context.mjs");
var _isAnimationControlsMjs = require("./render/utils/is-animation-controls.mjs");
var _isControllingVariantsMjs = require("./render/utils/is-controlling-variants.mjs");
var _isForcedMotionValueMjs = require("./render/utils/is-forced-motion-value.mjs");
var _isVariantLabelMjs = require("./render/utils/is-variant-label.mjs");
var _motionValuesMjs = require("./render/utils/motion-values.mjs");
var _resolveDynamicVariantsMjs = require("./render/utils/resolve-dynamic-variants.mjs");
var _resolveVariantsMjs = require("./render/utils/resolve-variants.mjs");
var _settersMjs = require("./render/utils/setters.mjs");
var _variantPropsMjs = require("./render/utils/variant-props.mjs");
var _indexMjs13 = require("./render/utils/reduced-motion/index.mjs");
var _conversionMjs = require("./projection/geometry/conversion.mjs");
var _copyMjs = require("./projection/geometry/copy.mjs");
var _deltaApplyMjs = require("./projection/geometry/delta-apply.mjs");
var _deltaCalcMjs = require("./projection/geometry/delta-calc.mjs");
var _deltaRemoveMjs = require("./projection/geometry/delta-remove.mjs");
var _modelsMjs = require("./projection/geometry/models.mjs");
var _utilsMjs = require("./projection/geometry/utils.mjs");
var _eachAxisMjs = require("./projection/utils/each-axis.mjs");
var _hasTransformMjs = require("./projection/utils/has-transform.mjs");
var _measureMjs = require("./projection/utils/measure.mjs");
var _scaleBorderRadiusMjs = require("./projection/styles/scale-border-radius.mjs");
var _scaleBoxShadowMjs = require("./projection/styles/scale-box-shadow.mjs");
var _transformMjs2 = require("./projection/styles/transform.mjs");
var _mixValuesMjs = require("./projection/animation/mix-values.mjs");
var _singleValueMjs = require("./animation/animate/single-value.mjs");
var _addDomEventMjs = require("./events/add-dom-event.mjs");
var _compareByDepthMjs = require("./projection/utils/compare-by-depth.mjs");
var _flatTreeMjs = require("./projection/utils/flat-tree.mjs");
var _delayMjs = require("./utils/delay.mjs");
var _resolveMotionValueMjs = require("./value/utils/resolve-motion-value.mjs");
var _createProjectionNodeMjs = require("./projection/node/create-projection-node.mjs");
var _documentProjectionNodeMjs = require("./projection/node/DocumentProjectionNode.mjs");
var _groupMjs = require("./projection/node/group.mjs");
var _htmlprojectionNodeMjs = require("./projection/node/HTMLProjectionNode.mjs");
var _stateMjs = require("./projection/node/state.mjs");
var _stackMjs = require("./projection/shared/stack.mjs");
var _camelToDashMjs = require("./render/dom/utils/camel-to-dash.mjs");
var _buildStylesMjs = require("./render/html/utils/build-styles.mjs");
var _buildTransformMjs = require("./render/html/utils/build-transform.mjs");
var _renderMjs = require("./render/html/utils/render.mjs");
var _scrapeMotionValuesMjs = require("./render/html/utils/scrape-motion-values.mjs");
var _buildAttrsMjs = require("./render/svg/utils/build-attrs.mjs");
var _camelCaseAttrsMjs = require("./render/svg/utils/camel-case-attrs.mjs");
var _isSvgTagMjs = require("./render/svg/utils/is-svg-tag.mjs");
var _pathMjs = require("./render/svg/utils/path.mjs");
var _renderMjs1 = require("./render/svg/utils/render.mjs");
var _scrapeMotionValuesMjs1 = require("./render/svg/utils/scrape-motion-values.mjs");
var _layoutAnimationBuilderMjs = require("./layout/LayoutAnimationBuilder.mjs");
var _indexLegacyMjs = require("./frameloop/index-legacy.mjs");
var _scaleCorrectionMjs = require("./projection/styles/scale-correction.mjs");
var _frameMjs = require("./frameloop/frame.mjs");
var _stateMjs1 = require("./render/utils/reduced-motion/state.mjs");

},{"./animation/AsyncMotionValueAnimation.mjs":"iq8Tb","./animation/GroupAnimation.mjs":"3phO0","./animation/GroupAnimationWithThen.mjs":"7VfSN","./animation/JSAnimation.mjs":"eeqfR","./animation/NativeAnimation.mjs":"dek1a","./animation/NativeAnimationExtended.mjs":"l8LhY","./animation/NativeAnimationWrapper.mjs":"8vlVd","./animation/utils/active-animations.mjs":"i0Tom","./animation/utils/calc-child-stagger.mjs":"fDnJH","./animation/utils/arc.mjs":"9Dggh","./animation/utils/css-variables-conversion.mjs":"geYi8","./animation/utils/default-transitions.mjs":"d1KKw","./animation/keyframes/get-final.mjs":"gcv7j","./animation/utils/get-value-transition.mjs":"jlH9x","./animation/utils/resolve-transition.mjs":"gOHB4","./animation/utils/is-css-variable.mjs":"gaLfK","./animation/utils/is-transition-defined.mjs":"127jx","./animation/utils/make-animation-instant.mjs":"8rE8V","./animation/interfaces/motion-value.mjs":"jreNm","./animation/interfaces/visual-element.mjs":"gjX0x","./animation/interfaces/visual-element-target.mjs":"hYEz3","./animation/interfaces/visual-element-variant.mjs":"ksTwL","./animation/optimized-appear/data-id.mjs":"gyrYR","./animation/optimized-appear/get-appear-id.mjs":"eZ2sD","./animation/generators/inertia.mjs":"lJO1B","./animation/generators/keyframes.mjs":"emfPF","./animation/generators/spring.mjs":"a9nd4","./animation/generators/utils/calc-duration.mjs":"dMH6d","./animation/generators/utils/create-generator-easing.mjs":"8GRpC","./animation/generators/utils/is-generator.mjs":"1wDLA","./animation/keyframes/DOMKeyframesResolver.mjs":"7KgAF","./animation/keyframes/KeyframesResolver.mjs":"i94G6","./animation/keyframes/offsets/default.mjs":"2pWfY","./animation/keyframes/offsets/fill.mjs":"40qn3","./animation/keyframes/offsets/time.mjs":"3rvEs","./animation/keyframes/utils/apply-px-defaults.mjs":"6BlzL","./animation/keyframes/utils/fill-wildcards.mjs":"7Oyhl","./animation/waapi/easing/cubic-bezier.mjs":"euGQw","./animation/waapi/easing/is-supported.mjs":"fpYuT","./animation/waapi/easing/map-easing.mjs":"Ddx7M","./animation/waapi/easing/supported.mjs":"5rdjC","./animation/waapi/start-waapi-animation.mjs":"byvJw","./animation/waapi/supports/partial-keyframes.mjs":"9g53x","./animation/waapi/supports/waapi.mjs":"j5IC6","./animation/waapi/utils/accelerated-values.mjs":"gEJ3G","./animation/waapi/utils/apply-generator.mjs":"iH54I","./animation/waapi/utils/linear.mjs":"baZ17","./effects/attr/index.mjs":"jG6n2","./effects/prop/index.mjs":"cLbPm","./effects/style/index.mjs":"cW1lJ","./effects/svg/index.mjs":"fKEg4","./frameloop/batcher.mjs":"2AAcH","./frameloop/microtask.mjs":"fREU6","./frameloop/sync-time.mjs":"c5O7T","./gestures/drag/state/is-active.mjs":"1QucO","./gestures/drag/state/set-active.mjs":"hkkB9","./gestures/hover.mjs":"6Wgah","./gestures/press/index.mjs":"gbIuG","./gestures/press/utils/is-keyboard-accessible.mjs":"3XfQc","./gestures/utils/is-node-or-child.mjs":"di4DT","./gestures/utils/is-primary-pointer.mjs":"9kgmE","./render/dom/parse-transform.mjs":"gZIf2","./render/dom/style-computed.mjs":"fffrV","./render/dom/style-set.mjs":"j21rE","./render/utils/is-keyframes-target.mjs":"4ke8d","./render/utils/keys-position.mjs":"5yxWD","./render/utils/keys-transform.mjs":"3EaJv","./resize/index.mjs":"eQnMS","./scroll/observe.mjs":"hTszq","./stats/index.mjs":"9shqe","./stats/buffer.mjs":"bK1s2","./utils/interpolate.mjs":"jDxKi","./utils/is-html-element.mjs":"hTVCG","./utils/is-svg-element.mjs":"71mHY","./utils/is-svg-svg-element.mjs":"cF6lu","./utils/mix/index.mjs":"jWgxC","./utils/mix/color.mjs":"3vJ7U","./utils/mix/complex.mjs":"5r5NP","./utils/mix/immediate.mjs":"EIJux","./utils/mix/number.mjs":"eSNQQ","./utils/mix/visibility.mjs":"4QviQ","./utils/resolve-elements.mjs":"lqtyu","./utils/stagger.mjs":"bI1A1","./utils/supports/flags.mjs":"6TmSQ","./utils/supports/linear-easing.mjs":"4mFyc","./utils/supports/scroll-timeline.mjs":"ezgAO","./utils/transform.mjs":"grzow","./value/index.mjs":"c1jKT","./value/follow-value.mjs":"ea2bG","./value/map-value.mjs":"8eamn","./value/spring-value.mjs":"fproo","./value/transform-value.mjs":"gZECS","./value/types/color/index.mjs":"gSiiB","./value/types/color/hex.mjs":"3L78C","./value/types/color/hsla.mjs":"jmiM6","./value/types/color/hsla-to-rgba.mjs":"bNdiM","./value/types/color/rgba.mjs":"jrEUc","./value/types/complex/index.mjs":"l9HIB","./value/types/dimensions.mjs":"9247P","./value/types/maps/defaults.mjs":"k9OiN","./value/types/maps/number.mjs":"k1ur4","./value/types/maps/transform.mjs":"gzkmm","./value/types/numbers/index.mjs":"2uUit","./value/types/numbers/units.mjs":"JFyVd","./value/types/test.mjs":"caJOd","./value/types/utils/animatable-none.mjs":"7g8cX","./value/types/utils/find.mjs":"f18Wf","./value/types/utils/get-as-type.mjs":"iiuJ5","./value/utils/is-motion-value.mjs":"75Nnh","./value/will-change/add-will-change.mjs":"5XxCw","./value/will-change/is.mjs":"b6nRr","./view/index.mjs":"6NOBg","./view/utils/get-layer-info.mjs":"fqI6h","./view/utils/get-view-animations.mjs":"9A2El","./render/dom/DOMVisualElement.mjs":"7JTbf","./render/Feature.mjs":"ioMwy","./render/html/HTMLVisualElement.mjs":"hgbUy","./render/object/ObjectVisualElement.mjs":"aJw3C","./render/store.mjs":"mujCZ","./render/svg/SVGVisualElement.mjs":"628iK","./render/VisualElement.mjs":"93dUM","./render/utils/animation-state.mjs":"8h33l","./render/utils/get-variant-context.mjs":"fpOm9","./render/utils/is-animation-controls.mjs":"6fKNU","./render/utils/is-controlling-variants.mjs":"iQHEB","./render/utils/is-forced-motion-value.mjs":"ctj7z","./render/utils/is-variant-label.mjs":"j6Abg","./render/utils/motion-values.mjs":"7KhBa","./render/utils/resolve-dynamic-variants.mjs":"S4pyf","./render/utils/resolve-variants.mjs":"gtH2y","./render/utils/setters.mjs":"bDr1V","./render/utils/variant-props.mjs":"16oQs","./render/utils/reduced-motion/index.mjs":"kLQhA","./projection/geometry/conversion.mjs":"8hG8z","./projection/geometry/copy.mjs":"ltg84","./projection/geometry/delta-apply.mjs":"kg4pP","./projection/geometry/delta-calc.mjs":"dpJY8","./projection/geometry/delta-remove.mjs":"jn38t","./projection/geometry/models.mjs":"4RI28","./projection/geometry/utils.mjs":"cjVOj","./projection/utils/each-axis.mjs":"897Cg","./projection/utils/has-transform.mjs":"aDFUL","./projection/utils/measure.mjs":"6TKnr","./projection/styles/scale-border-radius.mjs":"12Izw","./projection/styles/scale-box-shadow.mjs":"lx3W2","./projection/styles/transform.mjs":"5lWWb","./projection/animation/mix-values.mjs":"83hag","./animation/animate/single-value.mjs":"7SfpZ","./events/add-dom-event.mjs":"9tNte","./projection/utils/compare-by-depth.mjs":"bgX4X","./projection/utils/flat-tree.mjs":"3HPzk","./utils/delay.mjs":"bkgHI","./value/utils/resolve-motion-value.mjs":"1iuCH","./projection/node/create-projection-node.mjs":"aoLLF","./projection/node/DocumentProjectionNode.mjs":"aqCdB","./projection/node/group.mjs":"423yW","./projection/node/HTMLProjectionNode.mjs":"c032s","./projection/node/state.mjs":"jATSc","./projection/shared/stack.mjs":"8wCbz","./render/dom/utils/camel-to-dash.mjs":"cd2hc","./render/html/utils/build-styles.mjs":"7loFt","./render/html/utils/build-transform.mjs":"dkWxQ","./render/html/utils/render.mjs":"k6XQH","./render/html/utils/scrape-motion-values.mjs":"k4A6E","./render/svg/utils/build-attrs.mjs":"lFfRc","./render/svg/utils/camel-case-attrs.mjs":"htGzo","./render/svg/utils/is-svg-tag.mjs":"j8mRD","./render/svg/utils/path.mjs":"kK2Hh","./render/svg/utils/render.mjs":"1ZAXa","./render/svg/utils/scrape-motion-values.mjs":"j1yaa","./layout/LayoutAnimationBuilder.mjs":"fE1rO","./frameloop/index-legacy.mjs":"2khJi","./projection/styles/scale-correction.mjs":"7HdIu","./frameloop/frame.mjs":"3rwlg","./render/utils/reduced-motion/state.mjs":"d7sOa","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8vlVd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeAnimationWrapper", ()=>NativeAnimationWrapper);
var _nativeAnimationMjs = require("./NativeAnimation.mjs");
class NativeAnimationWrapper extends (0, _nativeAnimationMjs.NativeAnimation) {
    constructor(animation){
        super();
        this.animation = animation;
        animation.onfinish = ()=>{
            this.finishedTime = this.time;
            this.notifyFinished();
        };
    }
}

},{"./NativeAnimation.mjs":"dek1a","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"i0Tom":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationMapKey", ()=>animationMapKey);
parcelHelpers.export(exports, "getAnimationMap", ()=>getAnimationMap);
const animationMaps = new WeakMap();
const animationMapKey = (name, pseudoElement = "")=>`${name}:${pseudoElement}`;
function getAnimationMap(element) {
    let map = animationMaps.get(element);
    if (!map) {
        map = new Map();
        animationMaps.set(element, map);
    }
    return map;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fDnJH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcChildStagger", ()=>calcChildStagger);
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
    const index = Array.from(children).sort((a, b)=>a.sortNodePosition(b)).indexOf(child);
    const numChildren = children.size;
    const maxStaggerDuration = (numChildren - 1) * staggerChildren;
    const delayIsFunction = typeof delayChildren === "function";
    return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9Dggh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arc", ()=>arc);
parcelHelpers.export(exports, "createArcPath", ()=>createArcPath);
var _motionUtils = require("motion-utils");
var _indexMjs = require("../../value/index.mjs");
var _motionValueMjs = require("../interfaces/motion-value.mjs");
var _getValueTransitionMjs = require("./get-value-transition.mjs");
const MIN_LAYOUT_DISTANCE = 20;
function bezierPoint(t, origin, control, target) {
    const inv = 1 - t;
    return inv * inv * origin + 2 * inv * t * control + t * t * target;
}
function bezierTangentAngle(t, originX, controlX, targetX, originY, controlY, targetY) {
    const dx = 2 * (1 - t) * (controlX - originX) + 2 * t * (targetX - controlX);
    const dy = 2 * (1 - t) * (controlY - originY) + 2 * t * (targetY - controlY);
    return Math.atan2(dy, dx) * (180 / Math.PI);
}
function computeArcControlPoint(fromX, fromY, toX, toY, strength, peak) {
    const deltaX = toX - fromX;
    const deltaY = toY - fromY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (distance > 0) {
        const normalPerpX = -deltaY / distance;
        const normalPerpY = deltaX / distance;
        const desiredHeight = strength * distance;
        return {
            x: fromX + deltaX * peak + normalPerpX * desiredHeight,
            y: fromY + deltaY * peak + normalPerpY * desiredHeight
        };
    }
    return {
        x: fromX,
        y: fromY
    };
}
/**
 * The pure sampling factory: `(from, to) => (t) => point`. Internal —
 * used by {@link arc} and the unit tests. Not part of the public surface.
 */ function createArcPath({ strength = 0.5, peak = 0.5, direction, rotate = false } = {}) {
    const rotationScale = rotate === true ? 1 : typeof rotate === "number" ? rotate : 0;
    // Auto-direction only: persists across calls to flip the bulge back
    // onto the same screen side when the dominant axis changes between
    // calls. Reuse the factory (module scope / useMemo) to keep this alive.
    let prevBulgeSign;
    const createInterpolator = (from, to)=>{
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        let signed;
        if (direction === "cw") signed = -strength;
        else if (direction === "ccw") signed = strength;
        else {
            const dom = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
            signed = dom < 0 ? -strength : strength;
        }
        let control = computeArcControlPoint(from.x, from.y, to.x, to.y, signed, peak);
        if (direction === undefined) {
            const isVertical = Math.abs(dx) < Math.abs(dy);
            const midX = from.x + dx * peak;
            const midY = from.y + dy * peak;
            const bulgeSign = isVertical ? Math.sign(control.x - midX) : Math.sign(control.y - midY);
            if (prevBulgeSign !== undefined && bulgeSign !== 0 && bulgeSign !== prevBulgeSign) {
                signed = -signed;
                control = computeArcControlPoint(from.x, from.y, to.x, to.y, signed, peak);
            } else if (bulgeSign !== 0) prevBulgeSign = bulgeSign;
        }
        const tangent0 = rotationScale ? bezierTangentAngle(0, from.x, control.x, to.x, from.y, control.y, to.y) : 0;
        const tangent1 = rotationScale ? bezierTangentAngle(1, from.x, control.x, to.x, from.y, control.y, to.y) : 0;
        const tangentDelta = rotationScale ? (0, _motionUtils.wrap)(-180, 180, tangent1 - tangent0) : 0;
        return (t)=>{
            const out = {
                x: bezierPoint(t, from.x, control.x, to.x),
                y: bezierPoint(t, from.y, control.y, to.y)
            };
            if (rotationScale) {
                const raw = bezierTangentAngle(t, from.x, control.x, to.x, from.y, control.y, to.y);
                const baseline = tangent0 + tangentDelta * t;
                out.rotate = (0, _motionUtils.wrap)(-180, 180, raw - baseline) * rotationScale;
            }
            return out;
        };
    };
    return createInterpolator;
}
/**
 * Creates a curved path for `transition.path`:
 *
 * ```ts
 * <motion.div animate={{ x: 200, y: 100 }} transition={{ path: arc() }} />
 * ```
 *
 * Reuse the returned value (module scope / useMemo / useRef) so its
 * continuity closure survives re-renders — a fresh `arc()` has no memory.
 */ function arc(options = {}) {
    const sample = createArcPath(options);
    const path = {
        interpolateProjection (delta) {
            // `from` is the current translate offset (carries any in-flight
            // displacement when interrupted); `to` is the new layout origin.
            // The distance floor avoids visible wobble on tiny shifts.
            const tx = delta.x.translate;
            const ty = delta.y.translate;
            if (Math.sqrt(tx * tx + ty * ty) < MIN_LAYOUT_DISTANCE) return undefined;
            return sample({
                x: tx,
                y: ty
            }, {
                x: 0,
                y: 0
            });
        },
        animateVisualElement (visualElement, target, transition, delay, animations) {
            if (!("x" in target || "y" in target)) return;
            const xValue = visualElement.getValue("x", visualElement.latestValues["x"] ?? 0);
            const yValue = visualElement.getValue("y", visualElement.latestValues["y"] ?? 0);
            const xRaw = target.x;
            const yRaw = target.y;
            const xFrom = (Array.isArray(xRaw) && xRaw[0] != null ? xRaw[0] : xValue?.get()) ?? 0;
            const yFrom = (Array.isArray(yRaw) && yRaw[0] != null ? yRaw[0] : yValue?.get()) ?? 0;
            const xTo = Array.isArray(xRaw) ? xRaw[xRaw.length - 1] : xRaw ?? xFrom;
            const yTo = Array.isArray(yRaw) ? yRaw[yRaw.length - 1] : yRaw ?? yFrom;
            // Interruption needs no flag: x/y already hold the displaced
            // mid-arc position, so xFrom/yFrom carry the continuity geometry.
            const interpolate = sample({
                x: xFrom,
                y: yFrom
            }, {
                x: xTo,
                y: yTo
            });
            // Drive a dedicated `pathRotation` value (composed onto `rotate`
            // at the build sites) rather than `rotate` itself, so a
            // concurrent rotate animation composes and nothing accumulates
            // on interrupt.
            const pathRotationValue = interpolate(0).rotate !== undefined ? visualElement.getValue("pathRotation", 0) : undefined;
            const pathTransition = {
                delay,
                ...(0, _getValueTransitionMjs.getValueTransition)(transition || {}, "x")
            };
            delete pathTransition.path;
            const progress = (0, _indexMjs.motionValue)(0);
            progress.start((0, _motionValueMjs.animateMotionValue)("", progress, [
                0,
                1000
            ], {
                ...pathTransition,
                isSync: true,
                velocity: 0,
                onUpdate: (latest)=>{
                    const point = interpolate(latest / 1000);
                    xValue?.set(point.x);
                    yValue?.set(point.y);
                    if (pathRotationValue && point.rotate !== undefined) pathRotationValue.set(point.rotate);
                },
                onComplete: ()=>{
                    xValue?.set(xTo);
                    yValue?.set(yTo);
                    pathRotationValue?.set(0);
                },
                // Interrupt/cancel must clear our additive contribution
                // so it can't linger on top of the user's `rotate`.
                onStop: ()=>pathRotationValue?.set(0),
                onCancel: ()=>pathRotationValue?.set(0)
            }));
            if (progress.animation) animations.push(progress.animation);
            delete target.x;
            delete target.y;
        }
    };
    return path;
}

},{"motion-utils":"dFVhY","../../value/index.mjs":"c1jKT","../interfaces/motion-value.mjs":"jreNm","./get-value-transition.mjs":"jlH9x","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gjX0x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateVisualElement", ()=>animateVisualElement);
var _resolveDynamicVariantsMjs = require("../../render/utils/resolve-dynamic-variants.mjs");
var _visualElementTargetMjs = require("./visual-element-target.mjs");
var _visualElementVariantMjs = require("./visual-element-variant.mjs");
function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant)=>(0, _visualElementVariantMjs.animateVariant)(visualElement, variant, options));
        animation = Promise.all(animations);
    } else if (typeof definition === "string") animation = (0, _visualElementVariantMjs.animateVariant)(visualElement, definition, options);
    else {
        const resolvedDefinition = typeof definition === "function" ? (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition, options.custom) : definition;
        animation = Promise.all((0, _visualElementTargetMjs.animateTarget)(visualElement, resolvedDefinition, options));
    }
    return animation.then(()=>{
        visualElement.notify("AnimationComplete", definition);
    });
}

},{"../../render/utils/resolve-dynamic-variants.mjs":"S4pyf","./visual-element-target.mjs":"hYEz3","./visual-element-variant.mjs":"ksTwL","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ksTwL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateVariant", ()=>animateVariant);
var _resolveDynamicVariantsMjs = require("../../render/utils/resolve-dynamic-variants.mjs");
var _calcChildStaggerMjs = require("../utils/calc-child-stagger.mjs");
var _visualElementTargetMjs = require("./visual-element-target.mjs");
function animateVariant(visualElement, variant, options = {}) {
    const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : undefined);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) transition = options.transitionOverride;
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */ const getAnimation = resolved ? ()=>Promise.all((0, _visualElementTargetMjs.animateTarget)(visualElement, resolved, options)) : ()=>Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */ const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0)=>{
        const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
        return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
    } : ()=>Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */ const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren" ? [
            getAnimation,
            getChildAnimations
        ] : [
            getChildAnimations,
            getAnimation
        ];
        return first().then(()=>last());
    } else return Promise.all([
        getAnimation(),
        getChildAnimations(options.delay)
    ]);
}
function animateChildren(visualElement, variant, delay = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    for (const child of visualElement.variantChildren){
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + (0, _calcChildStaggerMjs.calcChildStagger)(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
        }).then(()=>child.notify("AnimationComplete", variant)));
    }
    return Promise.all(animations);
}

},{"../../render/utils/resolve-dynamic-variants.mjs":"S4pyf","../utils/calc-child-stagger.mjs":"fDnJH","./visual-element-target.mjs":"hYEz3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6BlzL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyPxDefaults", ()=>applyPxDefaults);
var _pxValuesMjs = require("../../waapi/utils/px-values.mjs");
function applyPxDefaults(keyframes, name) {
    for(let i = 0; i < keyframes.length; i++)if (typeof keyframes[i] === "number" && (0, _pxValuesMjs.pxValues).has(name)) keyframes[i] = keyframes[i] + "px";
}

},{"../../waapi/utils/px-values.mjs":"1ZSL1","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1ZSL1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pxValues", ()=>pxValues);
var _borderRadiusMjs = require("../../../utils/border-radius.mjs");
const pxValues = new Set([
    // Border props
    "borderWidth",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRadius",
    ...(0, _borderRadiusMjs.cornerRadiusProps),
    // Positioning props
    "width",
    "maxWidth",
    "height",
    "maxHeight",
    "top",
    "right",
    "bottom",
    "left",
    "inset",
    "insetBlock",
    "insetBlockStart",
    "insetBlockEnd",
    "insetInline",
    "insetInlineStart",
    "insetInlineEnd",
    // Spacing props
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    // Typography
    "fontSize",
    // Misc
    "backgroundPositionX",
    "backgroundPositionY"
]);

},{"../../../utils/border-radius.mjs":"iRJWe","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fpYuT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWaapiSupportedEasing", ()=>isWaapiSupportedEasing);
var _motionUtils = require("motion-utils");
var _linearEasingMjs = require("../../../utils/supports/linear-easing.mjs");
var _supportedMjs = require("./supported.mjs");
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, _linearEasingMjs.supportsLinearEasing)() || !easing || typeof easing === "string" && (easing in (0, _supportedMjs.supportedWaapiEasing) || (0, _linearEasingMjs.supportsLinearEasing)()) || (0, _motionUtils.isBezierDefinition)(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}

},{"motion-utils":"6gPET","../../../utils/supports/linear-easing.mjs":"4mFyc","./supported.mjs":"5rdjC","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9g53x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsPartialKeyframes", ()=>supportsPartialKeyframes);
var _motionUtils = require("motion-utils");
const supportsPartialKeyframes = /*@__PURE__*/ (0, _motionUtils.memo)(()=>{
    try {
        document.createElement("div").animate({
            opacity: [
                1
            ]
        });
    } catch (e) {
        return false;
    }
    return true;
});

},{"motion-utils":"idExm","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jG6n2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAttrValue", ()=>addAttrValue);
parcelHelpers.export(exports, "attrEffect", ()=>attrEffect);
var _camelToDashMjs = require("../../render/dom/utils/camel-to-dash.mjs");
var _createDomEffectMjs = require("../utils/create-dom-effect.mjs");
var _createEffectMjs = require("../utils/create-effect.mjs");
function canSetAsProperty(element, name) {
    if (!(name in element)) return false;
    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) || Object.getOwnPropertyDescriptor(element, name);
    // Check if it has a setter
    return descriptor && typeof descriptor.set === "function";
}
const addAttrValue = (element, state, key, value)=>{
    const isProp = canSetAsProperty(element, key);
    const name = isProp ? key : key.startsWith("data") || key.startsWith("aria") ? (0, _camelToDashMjs.camelToDash)(key) : key;
    /**
     * Set attribute directly via property if available
     */ const render = isProp ? ()=>{
        element[name] = state.latest[key];
    } : ()=>{
        const v = state.latest[key];
        if (v === null || v === undefined) element.removeAttribute(name);
        else element.setAttribute(name, String(v));
    };
    return state.set(key, value, render);
};
const attrEffect = /*@__PURE__*/ (0, _createDomEffectMjs.createSelectorEffect)(/*@__PURE__*/ (0, _createEffectMjs.createEffect)(addAttrValue));

},{"../../render/dom/utils/camel-to-dash.mjs":"cd2hc","../utils/create-dom-effect.mjs":"hbzyH","../utils/create-effect.mjs":"fPfOY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hbzyH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSelectorEffect", ()=>createSelectorEffect);
var _resolveElementsMjs = require("../../utils/resolve-elements.mjs");
function createSelectorEffect(subjectEffect) {
    return (subject, values)=>{
        const elements = (0, _resolveElementsMjs.resolveElements)(subject);
        const subscriptions = [];
        for (const element of elements){
            const remove = subjectEffect(element, values);
            subscriptions.push(remove);
        }
        return ()=>{
            for (const remove of subscriptions)remove();
        };
    };
}

},{"../../utils/resolve-elements.mjs":"lqtyu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fPfOY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEffect", ()=>createEffect);
var _motionValueStateMjs = require("../MotionValueState.mjs");
function createEffect(addValue) {
    const stateCache = new WeakMap();
    return (subject, values)=>{
        const state = stateCache.get(subject) ?? new (0, _motionValueStateMjs.MotionValueState)();
        stateCache.set(subject, state);
        const subscriptions = [];
        for(const key in values){
            const value = values[key];
            const remove = addValue(subject, state, key, value);
            subscriptions.push(remove);
        }
        return ()=>{
            for (const cancel of subscriptions)cancel();
        };
    };
}

},{"../MotionValueState.mjs":"hNCQ3","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hNCQ3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValueState", ()=>MotionValueState);
var _frameMjs = require("../frameloop/frame.mjs");
var _numberMjs = require("../value/types/maps/number.mjs");
var _getAsTypeMjs = require("../value/types/utils/get-as-type.mjs");
class MotionValueState {
    constructor(){
        this.latest = {};
        this.values = new Map();
    }
    set(name, value, render, computed, useDefaultValueType = true) {
        const existingValue = this.values.get(name);
        if (existingValue) existingValue.onRemove();
        const onChange = ()=>{
            const v = value.get();
            if (useDefaultValueType) this.latest[name] = (0, _getAsTypeMjs.getValueAsType)(v, (0, _numberMjs.numberValueTypes)[name]);
            else this.latest[name] = v;
            render && (0, _frameMjs.frame).render(render);
        };
        onChange();
        const cancelOnChange = value.on("change", onChange);
        computed && value.addDependent(computed);
        const remove = ()=>{
            cancelOnChange();
            render && (0, _frameMjs.cancelFrame)(render);
            this.values.delete(name);
            computed && value.removeDependent(computed);
        };
        this.values.set(name, {
            value,
            onRemove: remove
        });
        return remove;
    }
    get(name) {
        return this.values.get(name)?.value;
    }
}

},{"../frameloop/frame.mjs":"3rwlg","../value/types/maps/number.mjs":"k1ur4","../value/types/utils/get-as-type.mjs":"iiuJ5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cLbPm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "propEffect", ()=>propEffect);
var _createEffectMjs = require("../utils/create-effect.mjs");
const propEffect = /*@__PURE__*/ (0, _createEffectMjs.createEffect)((subject, state, key, value)=>{
    return state.set(key, value, ()=>{
        subject[key] = state.latest[key];
    }, undefined, false);
});

},{"../utils/create-effect.mjs":"fPfOY","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cW1lJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addStyleValue", ()=>addStyleValue);
parcelHelpers.export(exports, "styleEffect", ()=>styleEffect);
var _isCssVarMjs = require("../../render/dom/is-css-var.mjs");
var _keysTransformMjs = require("../../render/utils/keys-transform.mjs");
var _isHtmlElementMjs = require("../../utils/is-html-element.mjs");
var _indexMjs = require("../../value/index.mjs");
var _createDomEffectMjs = require("../utils/create-dom-effect.mjs");
var _createEffectMjs = require("../utils/create-effect.mjs");
var _transformMjs = require("./transform.mjs");
const originProps = new Set([
    "originX",
    "originY",
    "originZ"
]);
const addStyleValue = (element, state, key, value)=>{
    let render = undefined;
    let computed = undefined;
    if ((0, _keysTransformMjs.transformProps).has(key)) {
        if (!state.get("transform")) {
            // If this is an HTML element, we need to set the transform-box to fill-box
            // to normalise the transform relative to the element's bounding box
            if (!(0, _isHtmlElementMjs.isHTMLElement)(element) && !state.get("transformBox")) addStyleValue(element, state, "transformBox", new (0, _indexMjs.MotionValue)("fill-box"));
            state.set("transform", new (0, _indexMjs.MotionValue)("none"), ()=>{
                element.style.transform = (0, _transformMjs.buildTransform)(state);
            });
        }
        computed = state.get("transform");
    } else if (originProps.has(key)) {
        if (!state.get("transformOrigin")) state.set("transformOrigin", new (0, _indexMjs.MotionValue)(""), ()=>{
            const originX = state.latest.originX ?? "50%";
            const originY = state.latest.originY ?? "50%";
            const originZ = state.latest.originZ ?? 0;
            element.style.transformOrigin = `${originX} ${originY} ${originZ}`;
        });
        computed = state.get("transformOrigin");
    } else if ((0, _isCssVarMjs.isCSSVar)(key)) render = ()=>{
        element.style.setProperty(key, state.latest[key]);
    };
    else render = ()=>{
        element.style[key] = state.latest[key];
    };
    return state.set(key, value, render, computed);
};
const styleEffect = /*@__PURE__*/ (0, _createDomEffectMjs.createSelectorEffect)(/*@__PURE__*/ (0, _createEffectMjs.createEffect)(addStyleValue));

},{"../../render/dom/is-css-var.mjs":"gQk8C","../../render/utils/keys-transform.mjs":"3EaJv","../../utils/is-html-element.mjs":"hTVCG","../../value/index.mjs":"c1jKT","../utils/create-dom-effect.mjs":"hbzyH","../utils/create-effect.mjs":"fPfOY","./transform.mjs":"2dBtJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2dBtJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTransform", ()=>buildTransform);
var _keysTransformMjs = require("../../render/utils/keys-transform.mjs");
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
function buildTransform(state) {
    let transform = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < (0, _keysTransformMjs.transformPropOrder).length; i++){
        const key = (0, _keysTransformMjs.transformPropOrder)[i];
        const value = state.latest[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        else {
            const parsed = parseFloat(value);
            valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
        }
        if (!valueIsDefault) {
            transformIsDefault = false;
            const transformName = translateAlias[key] || key;
            transform += `${transformName}(${value}) `;
        }
    }
    // See build-transform.ts: additive `rotate()` so user `rotate` isn't
    // clobbered. Not a `transformPropOrder` slot.
    const pathRotation = state.latest.pathRotation;
    if (pathRotation) {
        transformIsDefault = false;
        transform += `rotate(${typeof pathRotation === "number" ? `${pathRotation}deg` : pathRotation}) `;
    }
    return transformIsDefault ? "none" : transform.trim();
}

},{"../../render/utils/keys-transform.mjs":"3EaJv","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fKEg4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svgEffect", ()=>svgEffect);
var _indexMjs = require("../../value/index.mjs");
var _indexMjs1 = require("../attr/index.mjs");
var _indexMjs2 = require("../style/index.mjs");
var _createDomEffectMjs = require("../utils/create-dom-effect.mjs");
var _createEffectMjs = require("../utils/create-effect.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
function addSVGPathValue(element, state, key, value) {
    (0, _frameMjs.frame).render(()=>element.setAttribute("pathLength", "1"));
    if (key === "pathOffset") return state.set(key, value, ()=>{
        // Use unitless value to avoid Safari zoom bug
        const offset = state.latest[key];
        element.setAttribute("stroke-dashoffset", `${-offset}`);
    });
    else {
        if (!state.get("stroke-dasharray")) state.set("stroke-dasharray", new (0, _indexMjs.MotionValue)("1 1"), ()=>{
            const { pathLength = 1, pathSpacing } = state.latest;
            // Use unitless values to avoid Safari zoom bug
            element.setAttribute("stroke-dasharray", `${pathLength} ${pathSpacing ?? 1 - Number(pathLength)}`);
        });
        return state.set(key, value, undefined, state.get("stroke-dasharray"));
    }
}
const addSVGValue = (element, state, key, value)=>{
    if (key.startsWith("path")) return addSVGPathValue(element, state, key, value);
    else if (key.startsWith("attr")) return (0, _indexMjs1.addAttrValue)(element, state, convertAttrKey(key), value);
    const handler = key in element.style ? (0, _indexMjs2.addStyleValue) : (0, _indexMjs1.addAttrValue);
    return handler(element, state, key, value);
};
const svgEffect = /*@__PURE__*/ (0, _createDomEffectMjs.createSelectorEffect)(/*@__PURE__*/ (0, _createEffectMjs.createEffect)(addSVGValue));
function convertAttrKey(key) {
    return key.replace(/^attr([A-Z])/, (_, firstChar)=>firstChar.toLowerCase());
}

},{"../../value/index.mjs":"c1jKT","../attr/index.mjs":"jG6n2","../style/index.mjs":"cW1lJ","../utils/create-dom-effect.mjs":"hbzyH","../utils/create-effect.mjs":"fPfOY","../../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1QucO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDragActive", ()=>isDragActive);
parcelHelpers.export(exports, "isDragging", ()=>isDragging);
const isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hkkB9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDragLock", ()=>setDragLock);
var _isActiveMjs = require("./is-active.mjs");
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if ((0, _isActiveMjs.isDragging)[axis]) return null;
        else {
            (0, _isActiveMjs.isDragging)[axis] = true;
            return ()=>{
                (0, _isActiveMjs.isDragging)[axis] = false;
            };
        }
    } else {
        if ((0, _isActiveMjs.isDragging).x || (0, _isActiveMjs.isDragging).y) return null;
        else {
            (0, _isActiveMjs.isDragging).x = (0, _isActiveMjs.isDragging).y = true;
            return ()=>{
                (0, _isActiveMjs.isDragging).x = (0, _isActiveMjs.isDragging).y = false;
            };
        }
    }
}

},{"./is-active.mjs":"1QucO","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6Wgah":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>hover);
var _isActiveMjs = require("./drag/state/is-active.mjs");
var _setupMjs = require("./utils/setup.mjs");
function isValidHover(event) {
    return !(event.pointerType === "touch" || (0, _isActiveMjs.isDragActive)());
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = (0, _setupMjs.setupGesture)(elementOrSelector, options);
    elements.forEach((element)=>{
        let isPressed = false;
        let deferredHoverEnd = false;
        let hoverEndCallback;
        const removePointerLeave = ()=>{
            element.removeEventListener("pointerleave", onPointerLeave);
        };
        const endHover = (event)=>{
            if (hoverEndCallback) {
                hoverEndCallback(event);
                hoverEndCallback = undefined;
            }
            removePointerLeave();
        };
        const onPointerUp = (event)=>{
            isPressed = false;
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerUp);
            if (deferredHoverEnd) {
                deferredHoverEnd = false;
                endHover(event);
            }
        };
        const onPointerDown = ()=>{
            isPressed = true;
            window.addEventListener("pointerup", onPointerUp, eventOptions);
            window.addEventListener("pointercancel", onPointerUp, eventOptions);
        };
        const onPointerLeave = (leaveEvent)=>{
            if (leaveEvent.pointerType === "touch") return;
            if (isPressed) {
                deferredHoverEnd = true;
                return;
            }
            endHover(leaveEvent);
        };
        const onPointerEnter = (enterEvent)=>{
            if (!isValidHover(enterEvent)) return;
            deferredHoverEnd = false;
            const onHoverEnd = onHoverStart(element, enterEvent);
            if (typeof onHoverEnd !== "function") return;
            hoverEndCallback = onHoverEnd;
            element.addEventListener("pointerleave", onPointerLeave, eventOptions);
        };
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
        element.addEventListener("pointerdown", onPointerDown, eventOptions);
    });
    return cancel;
}

},{"./drag/state/is-active.mjs":"1QucO","./utils/setup.mjs":"lTDnI","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lTDnI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupGesture", ()=>setupGesture);
var _resolveElementsMjs = require("../../utils/resolve-elements.mjs");
function setupGesture(elementOrSelector, options) {
    const elements = (0, _resolveElementsMjs.resolveElements)(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal
    };
    const cancel = ()=>gestureAbortController.abort();
    return [
        elements,
        eventOptions,
        cancel
    ];
}

},{"../../utils/resolve-elements.mjs":"lqtyu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gbIuG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "press", ()=>press);
var _isHtmlElementMjs = require("../../utils/is-html-element.mjs");
var _isActiveMjs = require("../drag/state/is-active.mjs");
var _isNodeOrChildMjs = require("../utils/is-node-or-child.mjs");
var _isPrimaryPointerMjs = require("../utils/is-primary-pointer.mjs");
var _setupMjs = require("../utils/setup.mjs");
var _isKeyboardAccessibleMjs = require("./utils/is-keyboard-accessible.mjs");
var _keyboardMjs = require("./utils/keyboard.mjs");
var _stateMjs = require("./utils/state.mjs");
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, _isPrimaryPointerMjs.isPrimaryPointer)(event) && !(0, _isActiveMjs.isDragActive)();
}
const claimedPointerDownEvents = new WeakSet();
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(targetOrSelector, onPressStart, options = {}) {
    const [targets, eventOptions, cancelEvents] = (0, _setupMjs.setupGesture)(targetOrSelector, options);
    const startPress = (startEvent)=>{
        const target = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent)) return;
        if (claimedPointerDownEvents.has(startEvent)) return;
        (0, _stateMjs.isPressing).add(target);
        if (options.stopPropagation) claimedPointerDownEvents.add(startEvent);
        const onPressEnd = onPressStart(target, startEvent);
        /**
         * End listeners run in the capture phase so a descendant calling
         * stopPropagation() in its own pointerup handler can't prevent the
         * press gesture from ending. This also keeps the gesture-end
         * ordering consistent with the drag gesture. See #2794.
         */ const endEventOptions = {
            ...eventOptions,
            capture: true
        };
        const onPointerEnd = (endEvent, success)=>{
            window.removeEventListener("pointerup", onPointerUp, endEventOptions);
            window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
            if ((0, _stateMjs.isPressing).has(target)) (0, _stateMjs.isPressing).delete(target);
            if (!isValidPressEvent(endEvent)) return;
            if (typeof onPressEnd === "function") onPressEnd(endEvent, {
                success
            });
        };
        const onPointerUp = (upEvent)=>{
            onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || (0, _isNodeOrChildMjs.isNodeOrChild)(target, upEvent.target));
        };
        const onPointerCancel = (cancelEvent)=>{
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, endEventOptions);
        window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
    };
    targets.forEach((target)=>{
        const pointerDownTarget = options.useGlobalTarget ? window : target;
        pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
        if ((0, _isHtmlElementMjs.isHTMLElement)(target)) {
            target.addEventListener("focus", (event)=>(0, _keyboardMjs.enableKeyboardPress)(event, eventOptions));
            if (!(0, _isKeyboardAccessibleMjs.isElementKeyboardAccessible)(target) && !target.hasAttribute("tabindex")) target.tabIndex = 0;
        }
    });
    return cancelEvents;
}

},{"../../utils/is-html-element.mjs":"hTVCG","../drag/state/is-active.mjs":"1QucO","../utils/is-node-or-child.mjs":"di4DT","../utils/is-primary-pointer.mjs":"9kgmE","../utils/setup.mjs":"lTDnI","./utils/is-keyboard-accessible.mjs":"3XfQc","./utils/keyboard.mjs":"l3AdD","./utils/state.mjs":"kpmZ8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"di4DT":[function(require,module,exports,__globalThis) {
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNodeOrChild", ()=>isNodeOrChild);
const isNodeOrChild = (parent, child)=>{
    if (!child) return false;
    else if (parent === child) return true;
    else return isNodeOrChild(parent, child.parentElement);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9kgmE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPrimaryPointer", ()=>isPrimaryPointer);
const isPrimaryPointer = (event)=>{
    if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
    else /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3XfQc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElementKeyboardAccessible", ()=>isElementKeyboardAccessible);
parcelHelpers.export(exports, "isElementTextInput", ()=>isElementTextInput);
const keyboardAccessibleElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
/**
 * Checks if an element is natively keyboard accessible (focusable).
 * Used by the press gesture to determine if we need to add tabIndex.
 */ function isElementKeyboardAccessible(element) {
    return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
const textInputElements = new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
]);
/**
 * Checks if an element has text selection or direct interaction behavior
 * that should block drag gestures from starting.
 *
 * This specifically targets form controls where the user might want to select
 * text or interact with the control (e.g., sliders, dropdowns).
 *
 * Buttons and links are NOT included because they don't have click-and-move
 * actions of their own - they only respond to click events, so dragging
 * should still work when initiated from these elements.
 */ function isElementTextInput(element) {
    return textInputElements.has(element.tagName) || element.isContentEditable === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"l3AdD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enableKeyboardPress", ()=>enableKeyboardPress);
var _stateMjs = require("./state.mjs");
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
const enableKeyboardPress = (focusEvent, eventOptions)=>{
    const element = focusEvent.currentTarget;
    if (!element) return;
    const handleKeydown = filterEvents(()=>{
        if ((0, _stateMjs.isPressing).has(element)) return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(()=>{
            firePointerEvent(element, "up");
        });
        const handleBlur = ()=>firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", ()=>element.removeEventListener("keydown", handleKeydown), eventOptions);
};

},{"./state.mjs":"kpmZ8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kpmZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPressing", ()=>isPressing);
const isPressing = new WeakSet();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fffrV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
var _isCssVarMjs = require("./is-css-var.mjs");
function getComputedStyle(element, name) {
    const computedStyle = window.getComputedStyle(element);
    return (0, _isCssVarMjs.isCSSVar)(name) ? computedStyle.getPropertyValue(name) : computedStyle[name];
}

},{"./is-css-var.mjs":"gQk8C","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"eQnMS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resize", ()=>resize);
var _handleElementMjs = require("./handle-element.mjs");
var _handleWindowMjs = require("./handle-window.mjs");
function resize(a, b) {
    return typeof a === "function" ? (0, _handleWindowMjs.resizeWindow)(a) : (0, _handleElementMjs.resizeElement)(a, b);
}

},{"./handle-element.mjs":"3PCnh","./handle-window.mjs":"iPhxF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3PCnh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeElement", ()=>resizeElement);
var _isSvgElementMjs = require("../utils/is-svg-element.mjs");
var _resolveElementsMjs = require("../utils/resolve-elements.mjs");
const resizeHandlers = new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis)=>(target, borderBoxSize)=>{
        if (borderBoxSize && borderBoxSize[0]) return borderBoxSize[0][borderBoxAxis + "Size"];
        else if ((0, _isSvgElementMjs.isSVGElement)(target) && "getBBox" in target) return target.getBBox()[svgAxis];
        else return target[htmlAxis];
    };
const getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
const getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
    resizeHandlers.get(target)?.forEach((handler)=>{
        handler(target, {
            get width () {
                return getWidth(target, borderBoxSize);
            },
            get height () {
                return getHeight(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, _resolveElementsMjs.resolveElements)(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer?.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers?.delete(handler);
            if (!elementHandlers?.size) observer?.unobserve(element);
        });
    };
}

},{"../utils/is-svg-element.mjs":"71mHY","../utils/resolve-elements.mjs":"lqtyu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"iPhxF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeWindow", ()=>resizeWindow);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const info = {
            get width () {
                return window.innerWidth;
            },
            get height () {
                return window.innerHeight;
            }
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
            window.removeEventListener("resize", windowResizeHandler);
            windowResizeHandler = undefined;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hTszq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeTimeline", ()=>observeTimeline);
var _frameMjs = require("../frameloop/frame.mjs");
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) update(progress);
        prevProgress = progress;
    };
    (0, _frameMjs.frame).preUpdate(onFrame, true);
    return ()=>(0, _frameMjs.cancelFrame)(onFrame);
}

},{"../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9shqe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "recordStats", ()=>recordStats);
var _bufferMjs = require("./buffer.mjs");
function clearStatsBuffer() {
    (0, _bufferMjs.statsBuffer).value = null;
    (0, _bufferMjs.statsBuffer).addProjectionMetrics = null;
}
function recordStats() {
    if ((0, _bufferMjs.statsBuffer).value) {
        clearStatsBuffer();
        throw new Error("Stats are already being measured");
    }
    const buffer = (0, _bufferMjs.statsBuffer);
    buffer.value = {
        layoutProjection: {
            nodes: [],
            calculatedTargetDeltas: [],
            calculatedProjections: []
        }
    };
    buffer.addProjectionMetrics = (metrics)=>{
        const { layoutProjection } = buffer.value;
        layoutProjection.nodes.push(metrics.nodes);
        layoutProjection.calculatedTargetDeltas.push(metrics.calculatedTargetDeltas);
        layoutProjection.calculatedProjections.push(metrics.calculatedProjections);
    };
}

},{"./buffer.mjs":"bK1s2","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bK1s2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "statsBuffer", ()=>statsBuffer);
const statsBuffer = {
    value: null,
    addProjectionMetrics: null
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bI1A1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOriginIndex", ()=>getOriginIndex);
parcelHelpers.export(exports, "stagger", ()=>stagger);
var _motionUtils = require("motion-utils");
function getOriginIndex(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
    return (i, total)=>{
        const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (ease) {
            const maxDelay = total * duration;
            const easingFunction = (0, _motionUtils.easingDefinitionToFunction)(ease);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return startDelay + delay;
    };
}

},{"motion-utils":"4RYV8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"grzow":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transform", ()=>transform);
var _interpolateMjs = require("./interpolate.mjs");
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0, _interpolateMjs.interpolate)(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}

},{"./interpolate.mjs":"jDxKi","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ea2bG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachFollow", ()=>attachFollow);
parcelHelpers.export(exports, "followValue", ()=>followValue);
var _indexMjs = require("./index.mjs");
var _jsanimationMjs = require("../animation/JSAnimation.mjs");
var _isMotionValueMjs = require("./utils/is-motion-value.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Create a `MotionValue` that animates to its latest value using any transition type.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = followValue(x, { type: "spring", stiffness: 300 })
 * // or with tween
 * const z = followValue(x, { type: "tween", duration: 0.5, ease: "easeOut" })
 * ```
 *
 * @param source - Initial value or MotionValue to track
 * @param options - Animation transition options
 * @returns `MotionValue`
 *
 * @public
 */ function followValue(source, options) {
    const initialValue = (0, _isMotionValueMjs.isMotionValue)(source) ? source.get() : source;
    const value = (0, _indexMjs.motionValue)(initialValue);
    attachFollow(value, source, options);
    return value;
}
/**
 * Attach an animation to a MotionValue that will animate whenever the value changes.
 * Similar to attachSpring but supports any transition type (spring, tween, inertia, etc.)
 *
 * @param value - The MotionValue to animate
 * @param source - Initial value or MotionValue to track
 * @param options - Animation transition options
 * @returns Cleanup function
 *
 * @public
 */ function attachFollow(value, source, options = {}) {
    const initialValue = value.get();
    let activeAnimation = null;
    let latestValue = initialValue;
    let latestSetter;
    const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : undefined;
    const stopAnimation = ()=>{
        if (activeAnimation) {
            activeAnimation.stop();
            activeAnimation = null;
        }
        value.animation = undefined;
    };
    const startAnimation = ()=>{
        const currentValue = asNumber(value.get());
        const targetValue = asNumber(latestValue);
        // Don't animate if we're already at the target
        if (currentValue === targetValue) {
            stopAnimation();
            return;
        }
        // Use the running animation's analytical velocity for accuracy,
        // falling back to the MotionValue's velocity for the initial animation.
        // This prevents systematic velocity loss at high frame rates (240hz+).
        const velocity = activeAnimation ? activeAnimation.getGeneratorVelocity() : value.getVelocity();
        stopAnimation();
        activeAnimation = new (0, _jsanimationMjs.JSAnimation)({
            keyframes: [
                currentValue,
                targetValue
            ],
            velocity,
            // Default to spring if no type specified (matches useSpring behavior)
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...options,
            onUpdate: latestSetter
        });
    };
    // Use a stable function reference so the frame loop Set deduplicates
    // multiple calls within the same frame (e.g. rapid mouse events)
    const scheduleAnimation = ()=>{
        startAnimation();
        value.animation = activeAnimation ?? undefined;
        value["events"].animationStart?.notify();
        activeAnimation?.then(()=>{
            value.animation = undefined;
            value["events"].animationComplete?.notify();
        });
    };
    value.attach((v, set)=>{
        latestValue = v;
        latestSetter = (latest)=>set(parseValue(latest, unit));
        (0, _frameMjs.frame).postRender(scheduleAnimation);
    }, stopAnimation);
    if ((0, _isMotionValueMjs.isMotionValue)(source)) {
        let skipNextAnimation = options.skipInitialAnimation === true;
        const removeSourceOnChange = source.on("change", (v)=>{
            if (skipNextAnimation) {
                skipNextAnimation = false;
                value.jump(parseValue(v, unit), false);
            } else value.set(parseValue(v, unit));
        });
        const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
        return ()=>{
            removeSourceOnChange();
            removeValueOnDestroy();
        };
    }
    return stopAnimation;
}
function parseValue(v, unit) {
    return unit ? v + unit : v;
}
function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
}

},{"./index.mjs":"c1jKT","../animation/JSAnimation.mjs":"eeqfR","./utils/is-motion-value.mjs":"75Nnh","../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8eamn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapValue", ()=>mapValue);
var _transformMjs = require("../utils/transform.mjs");
var _transformValueMjs = require("./transform-value.mjs");
/**
 * Create a `MotionValue` that maps the output of another `MotionValue` by
 * mapping it from one range of values into another.
 *
 * @remarks
 *
 * Given an input range of `[-200, -100, 100, 200]` and an output range of
 * `[0, 1, 1, 0]`, the returned `MotionValue` will:
 *
 * - When provided a value between `-200` and `-100`, will return a value between `0` and  `1`.
 * - When provided a value between `-100` and `100`, will return `1`.
 * - When provided a value between `100` and `200`, will return a value between `1` and  `0`
 *
 * The input range must be a linear series of numbers. The output range
 * can be any value type supported by Motion: numbers, colors, shadows, etc.
 *
 * Every value in the output range must be of the same type and in the same format.
 *
 * ```jsx
 * const x = motionValue(0)
 * const xRange = [-200, -100, 100, 200]
 * const opacityRange = [0, 1, 1, 0]
 * const opacity = mapValue(x, xRange, opacityRange)
 * ```
 *
 * @param inputValue - `MotionValue`
 * @param inputRange - A linear series of numbers (either all increasing or decreasing)
 * @param outputRange - A series of numbers, colors or strings. Must be the same length as `inputRange`.
 * @param options -
 *
 *  - clamp: boolean. Clamp values to within the given range. Defaults to `true`
 *  - ease: EasingFunction[]. Easing functions to use on the interpolations between each value in the input and output ranges. If provided as an array, the array must be one item shorter than the input and output ranges, as the easings apply to the transition between each.
 *
 * @returns `MotionValue`
 *
 * @public
 */ function mapValue(inputValue, inputRange, outputRange, options) {
    const map = (0, _transformMjs.transform)(inputRange, outputRange, options);
    return (0, _transformValueMjs.transformValue)(()=>map(inputValue.get()));
}

},{"../utils/transform.mjs":"grzow","./transform-value.mjs":"gZECS","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gZECS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformValue", ()=>transformValue);
var _indexMjs = require("./index.mjs");
var _subscribeValueMjs = require("./subscribe-value.mjs");
/**
 * Create a `MotionValue` that transforms the output of other `MotionValue`s by
 * passing their latest values through a transform function.
 *
 * Whenever a `MotionValue` referred to in the provided function is updated,
 * it will be re-evaluated.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = transformValue(() => x.get() * 2) // double x
 * ```
 *
 * @param transformer - A transform function. This function must be pure with no side-effects or conditional statements.
 * @returns `MotionValue`
 *
 * @public
 */ function transformValue(transform) {
    const collectedValues = [];
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * inside transform will be saved into this array.
     */ (0, _indexMjs.collectMotionValues).current = collectedValues;
    const initialValue = transform();
    (0, _indexMjs.collectMotionValues).current = undefined;
    const value = (0, _indexMjs.motionValue)(initialValue);
    (0, _subscribeValueMjs.subscribeValue)(collectedValues, value, transform);
    return value;
}

},{"./index.mjs":"c1jKT","./subscribe-value.mjs":"cR72c","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cR72c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeValue", ()=>subscribeValue);
var _frameMjs = require("../frameloop/frame.mjs");
function subscribeValue(inputValues, outputValue, getLatest) {
    const update = ()=>outputValue.set(getLatest());
    const scheduleUpdate = ()=>(0, _frameMjs.frame).preRender(update, false, true);
    const subscriptions = inputValues.map((v)=>v.on("change", scheduleUpdate));
    outputValue.on("destroy", ()=>{
        subscriptions.forEach((unsubscribe)=>unsubscribe());
        (0, _frameMjs.cancelFrame)(update);
    });
}

},{"../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fproo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachSpring", ()=>attachSpring);
parcelHelpers.export(exports, "springValue", ()=>springValue);
var _followValueMjs = require("./follow-value.mjs");
/**
 * Create a `MotionValue` that animates to its latest value using a spring.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = springValue(x, { stiffness: 300 })
 * ```
 *
 * @param source - Initial value or MotionValue to track
 * @param options - Spring configuration options
 * @returns `MotionValue`
 *
 * @public
 */ function springValue(source, options) {
    return (0, _followValueMjs.followValue)(source, {
        type: "spring",
        ...options
    });
}
/**
 * Attach a spring animation to a MotionValue that will animate whenever the value changes.
 *
 * @param value - The MotionValue to animate
 * @param source - Initial value or MotionValue to track
 * @param options - Spring configuration options
 * @returns Cleanup function
 *
 * @public
 */ function attachSpring(value, source, options) {
    return (0, _followValueMjs.attachFollow)(value, source, {
        type: "spring",
        ...options
    });
}

},{"./follow-value.mjs":"ea2bG","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6NOBg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewTransitionBuilder", ()=>ViewTransitionBuilder);
parcelHelpers.export(exports, "animateView", ()=>animateView);
var _motionUtils = require("motion-utils");
var _queueMjs = require("./queue.mjs");
class ViewTransitionBuilder {
    constructor(update, options = {}){
        this.currentSubject = "root";
        this.targets = new Map();
        /**
         * Definitions that must be resolved to elements (and assigned a
         * `view-transition-name`) rather than treated as pre-named layers.
         */ this.resolveDefs = new Set();
        /**
         * Per-subject crop override: `true` forces the crop (clip + object-fit:
         * cover + animated corner radii) on, `false` forces it off. A subject with
         * no entry uses the default - crop only a genuine morph (a layer present in
         * both snapshots), so a fade-only enter/exit isn't clipped to nothing.
         */ this.cropOverride = new Map();
        /**
         * Subjects paired with a different new-snapshot target (the second `.add()`
         * argument), so two distinct elements share one name and morph into each
         * other - a shared-element transition.
         */ this.pairs = new Map();
        /**
         * A `view-transition-class` to apply to each subject's resolved elements,
         * so authors can target the generated layers from CSS by class rather than
         * the opaque generated name.
         */ this.classNames = new Map();
        /**
         * Subjects opted out of automatic group nesting via `.group(false)`. Their
         * layer stays a flat top-level group (`view-transition-group: none`) instead
         * of nesting under its DOM-ancestor layer - so it animates independently and
         * escapes an ancestor's clip/transform (e.g. an element that lifts out of a
         * card and flies across, which nesting would clip to the card).
         */ this.flatGroups = new Set();
        this.notifyReady = (0, _motionUtils.noop);
        this.notifyReject = (0, _motionUtils.noop);
        this.readyPromise = new Promise((resolve, reject)=>{
            this.notifyReady = resolve;
            this.notifyReject = reject;
        });
        this.update = update;
        this.options = {
            interrupt: "wait",
            ...options
        };
        // Avoid an unhandled rejection when a failed transition has no
        // `.then(_, reject)` handler attached (e.g. fire-and-forget).
        this.readyPromise.catch((0, _motionUtils.noop));
        (0, _queueMjs.addToQueue)(this);
    }
    /**
     * Target elements resolved from a selector or Element, each assigned a
     * `view-transition-name` automatically.
     *
     * Passing a second target pairs them: the first is resolved in the old
     * snapshot and the second in the new, sharing one name so two *different*
     * elements morph into each other (e.g. `.add(card, ".modal")`). Symmetric -
     * pass them the other way round to morph back.
     */ add(subject, newSubject) {
        this.currentSubject = subject;
        this.resolveDefs.add(subject);
        if (newSubject !== undefined) this.pairs.set(subject, newSubject);
        // Register the subject so it participates (and gets an automatic
        // layout/morph animation) even without an explicit enter/exit/layout.
        if (!this.targets.has(subject)) this.targets.set(subject, {});
        return this;
    }
    /**
     * Control this subject's crop (clip + `object-fit: cover` + animated
     * corners). By default a subject auto-crops only when it actually morphs -
     * present in both snapshots (a survivor, or an `.add(a, b)` pair). A
     * fade-only enter/exit has no second box to crop against, so it's left to
     * the browser default; in particular the `overflow: clip` a crop adds would
     * otherwise clip a mis-sized enter/exit layer to nothing.
     *
     * `.crop(false)` forces the crop off (e.g. a text morph, where
     * `object-fit: cover` clips glyphs as the box grows); `.crop(true)` forces
     * it on for a non-morph the default wouldn't otherwise crop.
     */ crop(enabled = true) {
        this.cropOverride.set(this.currentSubject, enabled);
        return this;
    }
    /**
     * By default a subject's layer nests under its nearest DOM-ancestor layer
     * (`view-transition-group: contain`), so the ancestor's clip/transform/opacity
     * apply to it through the transition - mirroring how the DOM actually paints,
     * and letting a wrapper crop its child for the whole morph rather than only
     * once the live DOM takes back over. (Needs a browser that supports nested
     * view-transition groups; elsewhere it degrades to the flat default.)
     *
     * Call `.group(false)` to opt out: the layer stays flat and top-level, so it
     * animates independently and escapes an ancestor's clip - e.g. an element
     * that should lift out of a card and fly across, which nesting would clip.
     */ group(enabled = true) {
        enabled ? this.flatGroups.delete(this.currentSubject) : this.flatGroups.add(this.currentSubject);
        return this;
    }
    /**
     * Tag this subject's generated layers with a `view-transition-class`, so
     * they can be targeted from CSS - `::view-transition-group(.name)`,
     * `::view-transition-old/new(.name)`, `::view-transition-image-pair(.name)`
     * - without the opaque generated `view-transition-name`. Because `.add()`
     * can match many elements, a shared class targets them all at once (and,
     * for a pair, both ends). The escape hatch for z-index / custom keyframes
     * on a morph layer.
     */ class(name) {
        this.classNames.set(this.currentSubject, name);
        return this;
    }
    /**
     * Set the transition for this subject's morph. The morph is enabled
     * automatically by `.add()`; this just customises its timing (duration,
     * easing, a `delay`/`stagger`, …). On the implicit `root` subject it also
     * opts the page into the transition (the root crossfade).
     */ layout(options = {}) {
        this.updateTarget("layout", {}, options);
        return this;
    }
    enter(keyframes, options) {
        this.updateTarget("enter", keyframes, options);
        return this;
    }
    exit(keyframes, options) {
        this.updateTarget("exit", keyframes, options);
        return this;
    }
    /**
     * Animate the new view directly, whether the element is appearing or
     * persisting (unlike `.enter()`, which only fires for a pure newcomer).
     * Pair with `.old()` for a crossfade or slide-through.
     */ new(keyframes, options) {
        this.updateTarget("new", keyframes, options);
        return this;
    }
    /**
     * Animate the old view directly, whether the element is leaving or
     * persisting (unlike `.exit()`, which only fires for a pure leaver).
     */ old(keyframes, options) {
        this.updateTarget("old", keyframes, options);
        return this;
    }
    updateTarget(target, keyframes, options = {}) {
        const { currentSubject, targets } = this;
        if (!targets.has(currentSubject)) targets.set(currentSubject, {});
        const targetData = targets.get(currentSubject);
        targetData[target] = {
            keyframes,
            options
        };
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
}
function animateView(update, options = {}) {
    return new ViewTransitionBuilder(update, options);
}

},{"motion-utils":"7MDWX","./queue.mjs":"8JiuX","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8JiuX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addToQueue", ()=>addToQueue);
var _motionUtils = require("motion-utils");
var _microtaskMjs = require("../frameloop/microtask.mjs");
var _startMjs = require("./start.mjs");
let builders = [];
let current = null;
function next() {
    current = null;
    const [nextBuilder] = builders;
    if (nextBuilder) start(nextBuilder);
}
function start(builder) {
    (0, _motionUtils.removeItem)(builders, builder);
    current = builder;
    (0, _startMjs.startViewAnimation)(builder).then((animation)=>{
        builder.notifyReady(animation);
        return animation.finished;
    })// A genuinely failed transition (a throwing update) rejects the
    // builder; a skipped/interrupted one resolves with no animations (see
    // start.ts). Either way, advance the queue - else later transitions hang.
    .catch((error)=>builder.notifyReject(error)).finally(next);
}
function processQueue() {
    /**
     * Iterate backwards over the builders array. We can ignore the
     * "wait" animations. If we have an interrupting animation in the
     * queue then we need to batch all preceeding animations into it.
     * Currently this only batches the update functions but will also
     * need to batch the targets.
     */ for(let i = builders.length - 1; i >= 0; i--){
        const builder = builders[i];
        const { interrupt } = builder.options;
        if (interrupt === "immediate") {
            const batchedUpdates = builders.slice(0, i + 1).map((b)=>b.update);
            const remaining = builders.slice(i + 1);
            builder.update = ()=>{
                batchedUpdates.forEach((update)=>update());
            };
            // Put the current builder at the front, followed by any "wait" builders
            builders = [
                builder,
                ...remaining
            ];
            break;
        }
    }
    if (!current || builders[0]?.options.interrupt === "immediate") next();
}
function addToQueue(builder) {
    builders.push(builder);
    (0, _microtaskMjs.microtask).render(processQueue);
}

},{"motion-utils":"9bOuG","../frameloop/microtask.mjs":"fREU6","./start.mjs":"inZQ5","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"inZQ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startViewAnimation", ()=>startViewAnimation);
var _motionUtils = require("motion-utils");
var _groupAnimationMjs = require("../animation/GroupAnimation.mjs");
var _nativeAnimationMjs = require("../animation/NativeAnimation.mjs");
var _nativeAnimationWrapperMjs = require("../animation/NativeAnimationWrapper.mjs");
var _getValueTransitionMjs = require("../animation/utils/get-value-transition.mjs");
var _mapEasingMjs = require("../animation/waapi/easing/map-easing.mjs");
var _applyGeneratorMjs = require("../animation/waapi/utils/apply-generator.mjs");
var _borderRadiusMjs = require("../utils/border-radius.mjs");
var _resolveElementsMjs = require("../utils/resolve-elements.mjs");
var _assignNamesMjs = require("./utils/assign-names.mjs");
var _chooseLayerTypeMjs = require("./utils/choose-layer-type.mjs");
var _cssMjs = require("./utils/css.mjs");
var _getLayerInfoMjs = require("./utils/get-layer-info.mjs");
var _getViewAnimationsMjs = require("./utils/get-view-animations.mjs");
var _hasTargetMjs = require("./utils/has-target.mjs");
const definitionNames = [
    "layout",
    "enter",
    "exit",
    "new",
    "old"
];
/**
 * Whether a computed border-radius is square (every component zero). Splitting
 * on whitespace handles two-value/elliptical radii like "0px 20px" - a leading
 * `parseFloat` alone would misread the non-zero vertical radius as square.
 */ const isSquareRadius = (radius)=>radius.split(" ").every((value)=>parseFloat(value) === 0);
/**
 * The `ViewTransitionTarget` buckets driving each generated layer type, in
 * priority order - the inverse of `chooseLayerType`. The new view is driven by
 * `new`/`enter`, the old by `old`/`exit`. `group-children`/`image-pair` have no
 * bucket; they follow the default layout timing.
 */ const typeBuckets = {
    group: [
        "layout"
    ],
    new: [
        "new",
        "enter"
    ],
    old: [
        "old",
        "exit"
    ]
};
/**
 * Default "absent" origin for a single-value keyframe, by pseudo type, so e.g.
 * `enter({ scale: 1 })` grows in from 0.85 and `exit({ opacity: 0 })` fades
 * from 1. `enter` prefers the matching `exit` value over these (see below).
 */ const ORIGIN_DEFAULTS = {
    new: {
        opacity: 0,
        scale: 0.85
    },
    old: {
        opacity: 1,
        scale: 1
    }
};
/**
 * How much two box aspect ratios must differ before a morph is treated as
 * aspect-changing (and so worth cropping). Matches the projection engine's
 * `preserve-aspect` threshold, so small layout jitter doesn't trigger a crop.
 */ const ASPECT_TOLERANCE = 0.2;
function startViewAnimation(builder) {
    const { update, targets, resolveDefs, cropOverride, pairs, classNames, flatGroups, options: defaultOptions } = builder;
    if (!document.startViewTransition) // An async IIFE (not `new Promise(async …)`) so a throwing/rejecting
    // update rejects this promise rather than leaving it unsettled.
    return (async ()=>{
        await update();
        return new (0, _groupAnimationMjs.GroupAnimation)([]);
    })();
    /**
     * Resolve any selector/Element targets to layer names, assigning a
     * `view-transition-name` to each element as we go. We run this before the
     * update (so the elements are captured in the old snapshot) and again
     * after it (for the new snapshot). An element present in both keeps the
     * same name and animates as a single `group` layer.
     */ const nameRegistry = new Map();
    const assigned = [];
    /**
     * Elements we tagged with a `view-transition-class` (via `.class()`),
     * tracked separately from `assigned` so cleanup removes the class without
     * ever stripping an author's own inline `view-transition-name`.
     */ const classed = [];
    /**
     * Elements we set a `view-transition-group` on (for nesting), tracked for
     * cleanup. `clipChildren` collects the names of nested parents that clip in
     * the live layout, so their `::view-transition-group-children` is clipped
     * through the transition - not just once the live DOM takes back over.
     */ const grouped = [];
    const clipChildren = new Set();
    const layerTargets = new Map();
    const croppedNames = new Set();
    /**
     * Each layer's explicit `.crop(true | false)` override (by resolved name),
     * so `finalizeCrop` can let an author's choice win over the morph default.
     */ const cropForName = new Map();
    /**
     * Each layer's stagger position (index + total) within its subject, per
     * snapshot. Resolving against the snapshot the layer belongs to keeps
     * stagger correct when `update()` replaces the matched elements, and lets
     * us skip a layer that's absent from a snapshot (e.g. an exited element
     * has no `new` pseudo-element).
     */ const layerStagger = new Map();
    /**
     * Names allocated for a paired subject in the old snapshot, replayed onto
     * its new-snapshot target so both ends share a layer and morph.
     */ const pairNames = new Map();
    /**
     * The old (`from`) elements of each paired subject, so their names can be
     * transferred off before the new (`to`) elements inherit them.
     */ const pairFrom = new Map();
    const resolveLayers = (phase)=>{
        targets.forEach((target, definition)=>{
            const className = classNames.get(definition);
            /**
             * Nest each resolved layer under its DOM-ancestor layer by default
             * (`contain`), so an ancestor's clip/transform/opacity reach it
             * through the transition; `.group(false)` opts a subject out (`none`)
             * to stay flat and escape. Skipped for root / pre-named layers, which
             * aren't elements we resolve and style.
             */ const group = definition === "root" || !resolveDefs.has(definition) ? undefined : flatGroups.has(definition) ? "none" : "contain";
            let names;
            if (definition === "root" || !resolveDefs.has(definition)) names = [
                definition
            ];
            else if (pairs.has(definition)) {
                /**
                 * Paired morph: name the old target in the old snapshot, then
                 * force the same name(s) onto the new target in the new one, so
                 * two different elements morph as a single layer.
                 */ if (phase === "old") {
                    pairFrom.set(definition, (0, _resolveElementsMjs.resolveElements)(definition));
                    names = (0, _assignNamesMjs.assignViewTransitionNames)(definition, nameRegistry, assigned, undefined, className, classed, group, grouped, clipChildren);
                    pairNames.set(definition, names);
                } else {
                    /**
                     * Transfer the name(s) off the `from` elements before the
                     * `to` elements inherit them. A `from` that survives into
                     * the new snapshot (e.g. hidden with `visibility: hidden`
                     * rather than removed) would otherwise keep the name and
                     * collide - "duplicate view-transition-name".
                     */ for (const el of pairFrom.get(definition) ?? []){
                        el.style?.removeProperty("view-transition-name");
                        /**
                         * Drop the old end from the registry too, so the new
                         * end alone supplies this name's `new` crop radii - we
                         * neither re-measure nor get ordered by a stale element.
                         */ nameRegistry.delete(el);
                    }
                    names = (0, _assignNamesMjs.assignViewTransitionNames)(pairs.get(definition), nameRegistry, assigned, pairNames.get(definition), className, classed, group, grouped, clipChildren);
                }
            } else names = (0, _assignNamesMjs.assignViewTransitionNames)(definition, nameRegistry, assigned, undefined, className, classed, group, grouped, clipChildren);
            // Record any explicit `.crop(true | false)` per resolved name; the
            // crop set itself is computed later by `finalizeCrop` (it needs both
            // snapshots to know which morphs change aspect ratio).
            const override = cropOverride.get(definition);
            names.forEach((name, index)=>{
                /**
                 * If two subjects resolve to the same element, merge their
                 * definitions so neither subject's animations are dropped.
                 */ const existing = layerTargets.get(name);
                layerTargets.set(name, existing && existing !== target ? {
                    ...existing,
                    ...target
                } : target);
                if (override !== undefined) cropForName.set(name, override);
                const stagger = layerStagger.get(name) ?? {};
                stagger[phase] = [
                    index,
                    names.length
                ];
                layerStagger.set(name, stagger);
            });
        });
    };
    /**
     * The stagger index/total for a layer, resolved against the snapshot it
     * belongs to. Returns index -1 when the layer is absent from that snapshot
     * so the caller can skip a pseudo-element that doesn't exist.
     */ const staggerPosition = (name, type)=>{
        const stagger = layerStagger.get(name);
        const position = type === "old" ? stagger?.old : type === "new" ? stagger?.new : stagger?.new ?? stagger?.old;
        return position ?? [
            -1,
            1
        ];
    };
    /**
     * Merge default + per-layer transition options for a generated layer and
     * resolve any stagger/delay function against this element's position. Used
     * by both the morph-retiming and crop corner-radius passes.
     */ const resolveLayerTransition = (target, type, transitionName, index, total)=>{
        const transition = mergeTransition((0, _getValueTransitionMjs.getValueTransition)(defaultOptions, transitionName), (0, _getValueTransitionMjs.getValueTransition)(layerOptions(target, type) ?? {}, transitionName));
        if (typeof transition.delay === "function") transition.delay = transition.delay(index, total);
        return transition;
    };
    /**
     * Resolve a layer's group (`layout`) timing to plain WAAPI values: native
     * ms `delay`/`duration` and a baked `ease`. The single source of group
     * timing, shared by the generated-group retiming and the crop corner-radius
     * pass so the rounded clip animates on exactly the box's timing. It returns
     * no generator `type` (the WAAPI-only `NativeAnimation` rejects a string
     * type) nor `repeat`/`times` (which the group's `updateTiming` ignores), so
     * none of them can leak into the radius animation and desync it.
     */ const resolveGroupTiming = (name)=>{
        const [index, total] = staggerPosition(name, "group");
        const transition = resolveLayerTransition(layerTargets.get(name), "group", "layout", index === -1 ? 0 : index, total);
        transition.duration && (transition.duration = (0, _motionUtils.secondsToMilliseconds)(transition.duration));
        const { delay = 0, duration, ease } = (0, _applyGeneratorMjs.applyGeneratorOptions)(transition);
        return {
            delay: (0, _motionUtils.secondsToMilliseconds)(delay),
            duration,
            ease
        };
    };
    /**
     * Each layer's measured box + corner radii per snapshot. The box lets
     * `finalizeCrop` tell whether a morph's aspect ratio changed (the only case
     * worth cropping); the radii let a cropped morph's group clip animate each
     * corner from the old element's radius to the new element's, keeping it
     * rounded where `overflow: clip` would otherwise square the corners.
     *
     * We never flatten the source for capture (a snapshot is a paint of the live
     * DOM, so squaring an element just for its capture would flash one real
     * square frame). For an aspect-changing morph `object-fit: cover` crops each
     * snapshot's own baked corners off-screen mid-morph, so the animated clip is
     * the only visible corner; a near-same-aspect forced crop (`.crop(true)`)
     * can't hide the outgoing snapshot's silhouette, but the endpoints coincide.
     */ const cropMeasurements = new Map();
    const measureLayers = (phase)=>nameRegistry.forEach((name, element)=>{
            const el = element;
            const rect = el.getBoundingClientRect?.();
            if (rect && rect.height) {
                const style = getComputedStyle(el);
                const radii = {};
                for (const corner of (0, _borderRadiusMjs.cornerRadiusProps))radii[corner] = style[corner];
                const entry = cropMeasurements.get(name) ?? {};
                entry[phase] = {
                    width: rect.width,
                    height: rect.height,
                    radii
                };
                cropMeasurements.set(name, entry);
            }
        });
    /**
     * With both snapshots measured, settle which layers crop. The default crops
     * only a morph whose aspect ratio *changes* between snapshots - the one case
     * where `object-fit: cover` does real work. A same-aspect morph or a
     * fade-only layer is left uncropped: its corners scale naturally (no flash
     * from squaring, no `overflow: clip` eating its shadow) and a backdrop can't
     * be clipped to nothing. An explicit `.crop(true | false)` overrides either
     * way. Runs after both snapshots are measured, since aspect needs both.
     */ const finalizeCrop = ()=>{
        croppedNames.clear();
        for (const name of layerStagger.keys()){
            if (name === "root") continue;
            // An explicit `.crop(true | false)` wins; otherwise crop a morph
            // whose aspect ratio changed.
            if (cropForName.get(name) ?? aspectChanged(name)) croppedNames.add(name);
        }
    };
    /**
     * Whether a layer is a morph whose box aspect ratio changed between
     * snapshots (beyond a small tolerance). Fade-only layers (one snapshot) are
     * never "changed".
     */ const aspectChanged = (name)=>{
        const box = cropMeasurements.get(name);
        if (!box?.old || !box?.new || !box.old.height || !box.new.height) return false;
        return Math.abs(box.old.width / box.old.height - box.new.width / box.new.height) > ASPECT_TOLERANCE;
    };
    /**
     * Write the persistent view-transition CSS: suppress root capture when the
     * root has no animations of its own; force linear timing (baked into the
     * keyframes, so we can retime later via updateTiming); and clip +
     * object-fit: cover every cropped morph (the UA default overflows on
     * aspect-ratio change).
     *
     * `css.commit` replaces rather than appends, so we re-set the full rule set
     * each call - the crop rules are only known after `finalizeCrop` runs in the
     * update callback, so the second call writes them.
     */ const commitViewCSS = ()=>{
        if (!(0, _hasTargetMjs.hasTarget)("root", targets)) (0, _cssMjs.css).set(":root", {
            "view-transition-name": "none"
        });
        (0, _cssMjs.css).set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
            "animation-timing-function": "linear !important"
        });
        croppedNames.forEach((name)=>{
            (0, _cssMjs.css).set(`::view-transition-group(${name})`, {
                overflow: "clip"
            });
            (0, _cssMjs.css).set(`::view-transition-old(${name}), ::view-transition-new(${name})`, {
                width: "100%",
                height: "100%",
                "object-fit": "cover"
            });
        });
        /**
         * Clip the nested children of any layer that clips in the live layout,
         * so a wrapper crops its child for the whole morph (mirroring the DOM)
         * rather than only at the live-DOM handoff. No-op on browsers without
         * nested view-transition groups.
         */ clipChildren.forEach((name)=>{
            (0, _cssMjs.css).set(`::view-transition-group-children(${name})`, {
                overflow: "clip"
            });
        });
        (0, _cssMjs.css).commit(); // Write
    };
    const cleanup = ()=>{
        (0, _assignNamesMjs.releaseViewTransitionNames)(assigned, classed, grouped);
        (0, _cssMjs.css).remove(); // Write
    };
    const callback = async ()=>{
        await update();
        /**
         * Re-resolve so elements created by the update are named for the new
         * snapshot, then measure them. With both snapshots measured we can
         * settle the crop set (aspect-changing morphs + forced).
         */ resolveLayers("new");
        measureLayers("new");
        finalizeCrop();
        /**
         * Re-commit the crop CSS unconditionally: `finalizeCrop` is computed
         * here (after both snapshots are measured), so the clip rules must be
         * (re)written to match the settled set.
         */ commitViewCSS();
    };
    let transition;
    try {
        resolveLayers("old");
        /**
         * Measure the old snapshot against the optimistic crop set (the new
         * snapshot doesn't exist yet, so aspect change can't be known here;
         * `finalizeCrop` settles it post-update).
         */ measureLayers("old");
        commitViewCSS();
        transition = document.startViewTransition(callback);
    } catch (error) {
        /**
         * The prelude writes inline names before the transition exists. If it
         * throws (e.g. startViewTransition rejects in a bad UA state), release
         * them so we neither leak DOM state nor stall the queue on a promise
         * that never settles - hand back a rejection it can advance past.
         */ cleanup();
        return Promise.reject(error);
    }
    transition.finished.finally(cleanup);
    return new Promise((resolve, reject)=>{
        transition.ready.then(()=>{
            const generatedViewAnimations = (0, _getViewAnimationsMjs.getViewAnimations)();
            const animations = [];
            /**
             * Create animations for each of our explicitly-defined subjects.
             * `opacityAnimated` additionally tracks which `${name}:${type}`
             * we faded, so we can keep the UA `plus-lighter` blend only for a
             * genuine opacity crossfade (both sides fading) and drop it for a
             * slide/transform, where additive compositing would flash bright.
             */ const explicitlyAnimated = new Set();
            const opacityAnimated = new Set();
            layerTargets.forEach((target, name)=>{
                const stagger = layerStagger.get(name);
                /**
                 * Presence: `enter` only fires for a pure newcomer (a new
                 * view with no old), `exit` only for a pure leaver. A
                 * survivor (both) gets neither - it just morphs.
                 */ const enterApplies = !!stagger?.new && !stagger?.old;
                const exitApplies = !!stagger?.old && !stagger?.new;
                for (const key of definitionNames){
                    if (!target[key]) continue;
                    if (key === "enter" && !enterApplies) continue;
                    if (key === "exit" && !exitApplies) continue;
                    const type = (0, _chooseLayerTypeMjs.chooseLayerType)(key);
                    const [index, total] = staggerPosition(name, type);
                    // Skip a layer absent from its snapshot.
                    if (index === -1) continue;
                    const { keyframes, options } = target[key];
                    for (let [valueName, valueKeyframes] of Object.entries(keyframes)){
                        // Skip only missing values - `0` (e.g. opacity: 0)
                        // is valid and must reach the from-value inference.
                        if (valueKeyframes == null) continue;
                        /**
                         * The view path hands keyframes straight to WAAPI,
                         * so Motion's `x`/`y` shorthands (compiled to
                         * `transform` only via the value pipeline) have no
                         * effect. Warn and skip - use `transform`/`translate`.
                         */ if (valueName === "x" || valueName === "y") {
                            (0, _motionUtils.warnOnce)(false, `animateView() animates view-transition layers with CSS properties; the "${valueName}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`);
                            continue;
                        }
                        /**
                         * enter/exit win over new/old on a shared property -
                         * skip it here when the gated bucket also defines it.
                         */ if (key === "new" && enterApplies && target.enter?.keyframes[valueName] != null) continue;
                        if (key === "old" && exitApplies && target.exit?.keyframes[valueName] != null) continue;
                        const valueOptions = mergeTransition((0, _getValueTransitionMjs.getValueTransition)(defaultOptions, valueName), (0, _getValueTransitionMjs.getValueTransition)(options, valueName));
                        /**
                         * Infer an origin for a single-value keyframe. An
                         * `enter` mirrors the matching `exit` value (a
                         * defined exit reverses into the enter for free);
                         * otherwise the per-type default (opacity 0/1, scale
                         * 0.85). No default -> left as-is (animates from the
                         * live value).
                         *
                         * `new`/`old` fire for survivors too, where only the
                         * opacity crossfade default applies - a transform
                         * default like scale 0.85 would pop a persisting
                         * element, so gate it on the layer actually
                         * entering/leaving.
                         */ if (!Array.isArray(valueKeyframes)) {
                            const exitValue = key === "enter" ? target.exit?.keyframes[valueName] : undefined;
                            const allowDefault = valueName === "opacity" || (type === "new" ? enterApplies : exitApplies);
                            const from = exitValue != null ? Array.isArray(exitValue) ? exitValue[exitValue.length - 1] : exitValue : allowDefault ? ORIGIN_DEFAULTS[type]?.[valueName] : undefined;
                            if (from !== undefined) valueKeyframes = [
                                from,
                                valueKeyframes
                            ];
                        }
                        /**
                         * Resolve stagger function if provided, per element
                         * across this subject's resolved layers.
                         */ if (typeof valueOptions.delay === "function") valueOptions.delay = valueOptions.delay(index, total);
                        valueOptions.duration && (valueOptions.duration = (0, _motionUtils.secondsToMilliseconds)(valueOptions.duration));
                        valueOptions.delay && (valueOptions.delay = (0, _motionUtils.secondsToMilliseconds)(valueOptions.delay));
                        animations.push(new (0, _nativeAnimationMjs.NativeAnimation)({
                            ...valueOptions,
                            element: document.documentElement,
                            name: valueName,
                            pseudoElement: `::view-transition-${type}(${name})`,
                            keyframes: valueKeyframes
                        }));
                        explicitlyAnimated.add(`${name}:${type}`);
                        if (valueName === "opacity") opacityAnimated.add(`${name}:${type}`);
                    }
                }
            });
            /**
             * Handle browser generated animations
             */ for (const animation of generatedViewAnimations){
                if (animation.playState === "finished") continue;
                const { effect } = animation;
                if (!effect || !(effect instanceof KeyframeEffect)) continue;
                const { pseudoElement } = effect;
                if (!pseudoElement) continue;
                const name = (0, _getLayerInfoMjs.getViewAnimationLayerInfo)(pseudoElement);
                if (!name) continue;
                const targetDefinition = layerTargets.get(name.layer);
                /**
                 * We built our own animation for this layer, so drop the
                 * browser-generated fade we're replacing. The UA
                 * `plus-lighter` blend is a *separate* generated animation on
                 * the same pseudo (it sets `mix-blend-mode` in its keyframes):
                 * keep it *only* for a true opacity crossfade - both sides
                 * fading - so a symmetric crossfade composites without
                 * darkening, but a slide/transform (where both layers stay
                 * opaque and overlap) doesn't flash bright from the addition.
                 */ if (explicitlyAnimated.has(`${name.layer}:${name.type}`)) {
                    const isCrossfade = opacityAnimated.has(`${name.layer}:new`) && opacityAnimated.has(`${name.layer}:old`);
                    if (isCrossfade && effect.getKeyframes().some((keyframe)=>keyframe.mixBlendMode)) animations.push(new (0, _nativeAnimationWrapperMjs.NativeAnimationWrapper)(animation));
                    else animation.cancel();
                    continue;
                }
                /**
                 * Drop the orphaned half of the default crossfade. The UA
                 * fades old out and new in as a *pair*; if the opposing half
                 * was explicitly overridden with something other than an
                 * opacity fade (a clip or transform reveal), this side's
                 * default opacity fade has no partner - left to run it would
                 * dissolve what should be a static backdrop (e.g.
                 * `.new({ clipPath })` should reveal over a still old view,
                 * not fade the old out around the growing clip). Cancel it -
                 * and its `plus-lighter` sibling on the same pseudo, which
                 * would otherwise flash bright where the two opaque layers
                 * overlap. A genuine crossfade (the opposing side also fading
                 * opacity) keeps both halves and is handled above.
                 */ const opposite = name.type === "old" ? "new" : name.type === "new" ? "old" : undefined;
                if (opposite && explicitlyAnimated.has(`${name.layer}:${opposite}`) && !opacityAnimated.has(`${name.layer}:${opposite}`)) {
                    animation.cancel();
                    continue;
                }
                /**
                 * Otherwise retime the browser-generated animation to
                 * Motion's timing. This auto-enables the layout (group)
                 * morph for any resolved/named target, and applies the
                 * default timing to old/new layers we haven't explicitly
                 * overridden.
                 *
                 * group + group-children both follow the layout timing so
                 * the nesting container stays in sync with the morph.
                 */ /**
                 * A survivor's old + new are the two halves of one
                 * `plus-lighter` crossfade. They must share identical timing
                 * (so their opacities stay mirrored and sum to 1 - else the
                 * additive blend flashes bright wherever both are partly
                 * visible) and fade linearly (the bounce belongs on the
                 * group's geometry, not the opacity). So time them as the
                 * group, rather than via their own - potentially staggered,
                 * or enter/exit-derived - old/new options.
                 */ const stagger = layerStagger.get(name.layer);
                const isMorphCrossfade = (name.type === "old" || name.type === "new") && !!stagger?.old && !!stagger?.new;
                let timing;
                if (name.type.startsWith("group")) {
                    // group + group-children follow the resolved group
                    // timing - the single source shared with the crop
                    // corner-radius pass below.
                    const { delay, duration, ease } = resolveGroupTiming(name.layer);
                    timing = {
                        delay,
                        duration,
                        easing: (0, _mapEasingMjs.mapEasingToNativeEasing)(ease, duration)
                    };
                } else {
                    const timingType = isMorphCrossfade ? "group" : name.type;
                    const [index, total] = staggerPosition(name.layer, timingType);
                    const transitionName = timingType === "group" ? "layout" : "";
                    let animationTransition = resolveLayerTransition(targetDefinition, timingType, transitionName, index === -1 ? 0 : index, total);
                    /**
                     * The crossfade should resolve at the spring's
                     * *perceptual* (visual) duration - the geometry can keep
                     * bouncing, but the opacity shouldn't drag through the
                     * settle. So capture `visualDuration` before
                     * `applyGeneratorOptions` replaces it with the full
                     * overshoot duration, and use it for the fade.
                     */ const visualDuration = animationTransition.visualDuration;
                    animationTransition.duration && (animationTransition.duration = (0, _motionUtils.secondsToMilliseconds)(animationTransition.duration));
                    animationTransition = (0, _applyGeneratorMjs.applyGeneratorOptions)(animationTransition);
                    timing = {
                        delay: (0, _motionUtils.secondsToMilliseconds)(animationTransition.delay ?? 0),
                        duration: isMorphCrossfade && visualDuration !== undefined ? (0, _motionUtils.secondsToMilliseconds)(visualDuration) : animationTransition.duration,
                        easing: isMorphCrossfade ? "linear" : (0, _mapEasingMjs.mapEasingToNativeEasing)(animationTransition.ease, animationTransition.duration)
                    };
                }
                effect.updateTiming(timing);
                animations.push(new (0, _nativeAnimationWrapperMjs.NativeAnimationWrapper)(animation));
            }
            /**
             * Round each cropped layer's clip. Its `::view-transition-group`
             * has `overflow: clip`, which would otherwise square the corners
             * mid-morph; animate each corner from the old element's radius to
             * the new element's so the crop stays rounded. Timed as the group
             * (`layout`) so the radius tracks the morphing box.
             */ cropMeasurements.forEach((entry, name)=>{
                if (!croppedNames.has(name)) return;
                // Reuse the group's resolved timing - native ms delay/
                // duration + a baked ease, with no generator `type` or
                // repeat/times to leak into (or throw inside) NativeAnimation.
                const { delay, duration, ease } = resolveGroupTiming(name);
                for (const corner of (0, _borderRadiusMjs.cornerRadiusProps)){
                    // `||` (not `??`) so an empty measurement falls back to
                    // the other snapshot rather than an invalid keyframe.
                    const from = entry.old?.radii[corner] || entry.new?.radii[corner] || "0px";
                    const to = entry.new?.radii[corner] || entry.old?.radii[corner] || "0px";
                    // Nothing to round if the corner is square at both ends.
                    if (isSquareRadius(from) && isSquareRadius(to)) continue;
                    animations.push(new (0, _nativeAnimationMjs.NativeAnimation)({
                        element: document.documentElement,
                        name: corner,
                        pseudoElement: `::view-transition-group(${name})`,
                        keyframes: [
                            from,
                            to
                        ],
                        delay,
                        duration,
                        ease
                    }));
                }
            });
            resolve(new (0, _groupAnimationMjs.GroupAnimation)(animations));
        }).catch(()=>/**
         * `ready` rejects when the transition is skipped - no visual
         * change, or superseded by an interrupting transition. The DOM
         * update still applied, so settle with no animations rather than
         * surfacing it as an error to an awaiting caller. A genuine
         * failure in `update()` rejects `updateCallbackDone` (already
         * settled by now), so propagate that instead.
         */ transition.updateCallbackDone.then(()=>resolve(new (0, _groupAnimationMjs.GroupAnimation)([])), reject));
    });
}
/**
 * The options that should time a given generated layer type, so a retimed
 * group/old/new picks up any per-target transition the user provided. Checks
 * the type's buckets in priority order (e.g. `new` before `enter`).
 */ function layerOptions(target, type) {
    for (const bucket of typeBuckets[type] ?? []){
        const options = target?.[bucket]?.options;
        if (options) return options;
    }
}
/**
 * Merge a base transition (e.g. the default `options`) with a per-layer/value
 * override. An explicit `duration` on the override must win over an inherited
 * generator's own timing: a spring prefers `visualDuration`, and
 * `spring.applyToOptions` overwrites `duration` with the computed settle time -
 * so without this the override is silently discarded. Dropping the inherited
 * `type`/`visualDuration` makes the layer a plain tween of that duration, unless
 * it asked for its own generator `type`/`visualDuration`.
 */ function mergeTransition(base, override) {
    const merged = {
        ...base,
        ...override
    };
    if (override.duration !== undefined) {
        if (override.visualDuration === undefined) delete merged.visualDuration;
        if (override.type === undefined) delete merged.type;
    }
    return merged;
}

},{"motion-utils":[["secondsToMilliseconds","k1haA"],["warnOnce","3B4Kt"]],"../animation/GroupAnimation.mjs":"3phO0","../animation/NativeAnimation.mjs":"dek1a","../animation/NativeAnimationWrapper.mjs":"8vlVd","../animation/utils/get-value-transition.mjs":"jlH9x","../animation/waapi/easing/map-easing.mjs":"Ddx7M","../animation/waapi/utils/apply-generator.mjs":"iH54I","../utils/border-radius.mjs":"iRJWe","../utils/resolve-elements.mjs":"lqtyu","./utils/assign-names.mjs":"hbDEA","./utils/choose-layer-type.mjs":"1wTVA","./utils/css.mjs":"icROM","./utils/get-layer-info.mjs":"fqI6h","./utils/get-view-animations.mjs":"9A2El","./utils/has-target.mjs":"12IuU","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"hbDEA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assignViewTransitionNames", ()=>assignViewTransitionNames);
parcelHelpers.export(exports, "releaseViewTransitionNames", ()=>releaseViewTransitionNames);
var _resolveElementsMjs = require("../../utils/resolve-elements.mjs");
let nameCount = 0;
/**
 * Generated names live in their own namespace so we can tell a name we own
 * (and must clean up) from an author-defined one - and so a stale generated
 * name left behind by an interrupted transition is re-owned, not mistaken for
 * the author's and leaked.
 */ const generatedName = ()=>`motion-view-${nameCount++}`;
const isGeneratedName = (name)=>name.startsWith("motion-view-");
/**
 * Tag a captured element with a `view-transition-class` so authors can target
 * its generated layer from CSS (e.g. `::view-transition-group(.hero)`) without
 * the opaque generated name. Tracked in `classed` - separate from the generated
 * names in `assigned` - so cleanup removes the class without ever stripping an
 * author's own inline `view-transition-name`.
 */ function tagClass(element, className, classed) {
    if (!className) return;
    element.style?.setProperty("view-transition-class", className);
    classed.push(element);
}
/**
 * Set the element's `view-transition-group` so its layer reconstructs the DOM
 * hierarchy in the pseudo-tree (`contain`) - or stays flat (`none`). Tracked in
 * `grouped` for cleanup. When the element clips (any non-`visible` overflow) its
 * name is recorded in `clipChildren` so the caller can clip the nested children
 * (`::view-transition-group-children(name)`), mirroring the live clip through
 * the whole transition rather than only at the live-DOM handoff.
 *
 * Ignored by browsers without nested view-transition groups, where it harmlessly
 * degrades to the flat default.
 */ function applyGroup(element, name, group, grouped, clipChildren) {
    if (!group) return;
    element.style?.setProperty("view-transition-group", group);
    grouped.push(element);
    if (group !== "none" && clipChildren) {
        const style = getComputedStyle(element);
        if (style.overflowX !== "visible" || style.overflowY !== "visible") clipChildren.add(name);
    }
}
/**
 * Resolve a selector/Element to elements and ensure each one carries a
 * `view-transition-name` we can target from script.
 *
 * Author-defined names are reused as-is. Elements that are unnamed (or use
 * the browser's `auto`/`match-element`, whose generated name is not exposed
 * to script) are given a unique generated name, set inline so it's captured,
 * and tracked in `assigned` for later cleanup.
 *
 * `registry` maps each Element to its name so the same element keeps its name
 * across both captures (before and after the update), which is what allows a
 * persistent element to animate as a single `group` layer.
 */ function assignViewTransitionNames(definition, registry, assigned, forcedNames, className, classed = [], group, grouped = [], clipChildren) {
    const elements = (0, _resolveElementsMjs.resolveElements)(definition);
    /**
     * The new end of a paired morph: give each element the matching name from
     * the old end (by index) so the two share one layer and morph. If the new
     * end resolves to *more* elements than the old end named, the extras have no
     * counterpart - give them a fresh name so they animate as newcomers rather
     * than being silently left unnamed. We return the names actually assigned
     * (sized to the resolved elements), not the raw `forcedNames`, so stagger
     * totals and the layer set stay in step with what's on the page.
     */ if (forcedNames) return elements.map((element, i)=>{
        const existing = registry.get(element);
        if (existing) return existing;
        const name = forcedNames[i] ?? generatedName();
        element.style?.setProperty("view-transition-name", name);
        assigned.push(element);
        registry.set(element, name);
        tagClass(element, className, classed);
        applyGroup(element, name, group, grouped, clipChildren);
        return name;
    });
    /**
     * Read every current name up front, before assigning any. Interleaving the
     * reads with the inline `setProperty` writes below would dirty styles
     * between reads and force a style recalc per element; batching the reads
     * keeps it to one. Elements already in the registry keep their name and
     * need no read.
     */ const currentNames = elements.map((element)=>registry.has(element) ? undefined : getComputedStyle(element).getPropertyValue("view-transition-name"));
    return elements.map((element, i)=>{
        const existing = registry.get(element);
        if (existing) return existing;
        const current = currentNames[i];
        let name;
        if (current && current !== "none" && current !== "auto" && current !== "match-element" && !isGeneratedName(current)) /**
             * The author already named this layer - target it as-is and leave
             * it to them to clean up. `auto`/`match-element` are overridden
             * because their generated name is not exposed to script, and a
             * stale `motion-view-*` (e.g. left by an interrupted transition) is
             * re-owned rather than adopted as an author name and leaked.
             */ name = current;
        else {
            name = generatedName();
            element.style?.setProperty("view-transition-name", name);
            assigned.push(element);
        }
        registry.set(element, name);
        tagClass(element, className, classed);
        applyGroup(element, name, group, grouped, clipChildren);
        return name;
    });
}
/**
 * Remove the `view-transition-name`s we generated and the
 * `view-transition-class`es we applied. Author-defined names are never touched
 * (they're not in `assigned`). Safe to call more than once (e.g. on both a
 * finished and an interrupted transition).
 */ function releaseViewTransitionNames(assigned, classed = [], grouped = []) {
    for (const element of assigned)element.style?.removeProperty("view-transition-name");
    for (const element of classed)element.style?.removeProperty("view-transition-class");
    for (const element of grouped)element.style?.removeProperty("view-transition-group");
}

},{"../../utils/resolve-elements.mjs":"lqtyu","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1wTVA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chooseLayerType", ()=>chooseLayerType);
function chooseLayerType(valueName) {
    if (valueName === "layout") return "group";
    if (valueName === "enter" || valueName === "new") return "new";
    return "old";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"icROM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css);
let pendingRules = {};
let style = null;
const css = {
    set: (selector, values)=>{
        pendingRules[selector] = values;
    },
    commit: ()=>{
        if (!style) {
            style = document.createElement("style");
            style.id = "motion-view";
        }
        let cssText = "";
        for(const selector in pendingRules){
            const rule = pendingRules[selector];
            cssText += `${selector} {\n`;
            for (const [property, value] of Object.entries(rule))cssText += `  ${property}: ${value};\n`;
            cssText += "}\n";
        }
        style.textContent = cssText;
        document.head.appendChild(style);
        pendingRules = {};
    },
    remove: ()=>{
        if (style && style.parentElement) style.parentElement.removeChild(style);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fqI6h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getViewAnimationLayerInfo", ()=>getViewAnimationLayerInfo);
function getViewAnimationLayerInfo(pseudoElement) {
    const match = pseudoElement.match(// `group-children` (nested transitions) before `group` so it wins.
    /::view-transition-(old|new|group-children|group|image-pair)\((.*?)\)/);
    if (!match) return null;
    return {
        layer: match[2],
        type: match[1]
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9A2El":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getViewAnimations", ()=>getViewAnimations);
function getViewAnimations() {
    return document.getAnimations().filter((animation)=>{
        const { effect } = animation;
        return !!effect && effect.target === document.documentElement && effect.pseudoElement?.startsWith("::view-transition");
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"12IuU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasTarget", ()=>hasTarget);
function hasTarget(target, targets) {
    return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ioMwy":[function(require,module,exports,__globalThis) {
/**
 * Feature base class for extending VisualElement functionality.
 * Features are plugins that can be mounted/unmounted to add behavior
 * like gestures, animations, or layout tracking.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Feature", ()=>Feature);
class Feature {
    constructor(node){
        this.isMounted = false;
        this.node = node;
    }
    update() {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8h33l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkVariantsDidChange", ()=>checkVariantsDidChange);
parcelHelpers.export(exports, "createAnimationState", ()=>createAnimationState);
var _visualElementMjs = require("../../animation/interfaces/visual-element.mjs");
var _calcChildStaggerMjs = require("../../animation/utils/calc-child-stagger.mjs");
var _getVariantContextMjs = require("./get-variant-context.mjs");
var _isAnimationControlsMjs = require("./is-animation-controls.mjs");
var _isKeyframesTargetMjs = require("./is-keyframes-target.mjs");
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _resolveDynamicVariantsMjs = require("./resolve-dynamic-variants.mjs");
var _shallowCompareMjs = require("./shallow-compare.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
const reversePriorityOrder = [
    ...(0, _variantPropsMjs.variantPriorityOrder)
].reverse();
const numAnimationTypes = (0, _variantPropsMjs.variantPriorityOrder).length;
function createAnimateFunction(visualElement) {
    return (animations)=>{
        return Promise.all(animations.map(({ animation, options })=>(0, _visualElementMjs.animateVisualElement)(visualElement, animation, options)));
    };
}
function createAnimationState(visualElement) {
    let animate = createAnimateFunction(visualElement);
    let state = createState();
    let isInitialRender = true;
    /**
     * Track whether the animation state has been reset (e.g. via StrictMode
     * double-invocation or Suspense unmount/remount). On the first
     * animateChanges() call after a reset we need to behave like the initial
     * render for variant-inheritance checks, even though isInitialRender is
     * already false.
     */ let wasReset = false;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */ const buildResolvedTypeValues = (type)=>(acc, definition)=>{
            const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : undefined);
            if (resolved) {
                const { transition, transitionEnd, ...target } = resolved;
                acc = {
                    ...acc,
                    ...target,
                    ...transitionEnd
                };
            }
            return acc;
        };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */ function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */ function animateChanges(changedActiveType) {
        const { props } = visualElement;
        const context = (0, _getVariantContextMjs.getVariantContext)(visualElement.parent) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */ const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */ const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */ let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */ let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */ for(let i = 0; i < numAnimationTypes; i++){
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined ? props[type] : context[type];
            const propIsVariant = (0, _isVariantLabelMjs.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */ const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false) removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */ let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) isInherited = false;
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */ typeState.protectedKeys = {
                ...encounteredKeys
            };
            // Check if we can skip analysing this prop early
            if (// If it isn't active and hasn't *just* been set as inactive
            !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
            !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
            (0, _isAnimationControlsMjs.isAnimationControls)(prop) || typeof prop === "boolean") continue;
            /**
             * If exit is already active and wasn't just activated, skip
             * re-processing to prevent interrupting running exit animations.
             * Re-resolving exit with a changed custom value can start new
             * value animations that stop the originals, leaving the exit
             * animation promise unresolved and the component stuck in the DOM.
             */ if (type === "exit" && typeState.isActive && activeDelta !== true) {
                if (typeState.prevResolvedValues) encounteredKeys = {
                    ...encounteredKeys,
                    ...typeState.prevResolvedValues
                };
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */ const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
            type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
            i > removedVariantIndex && propIsVariant;
            let handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */ const definitionList = Array.isArray(prop) ? prop : [
                prop
            ];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */ let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false) resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */ const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues
            };
            const markToAnimate = (key)=>{
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                const motionValue = visualElement.getValue(key);
                if (motionValue) motionValue.liveStyle = false;
            };
            for(const key in allKeys){
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key)) continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */ let valueHasChanged = false;
                if ((0, _isKeyframesTargetMjs.isKeyframesTarget)(next) && (0, _isKeyframesTargetMjs.isKeyframesTarget)(prev)) valueHasChanged = !(0, _shallowCompareMjs.shallowCompare)(next, prev) || variantDidChange;
                else valueHasChanged = next !== prev;
                if (valueHasChanged) {
                    if (next !== undefined && next !== null) // If next is defined and doesn't equal prev, it needs animating
                    markToAnimate(key);
                    else // If it's undefined, it's been removed.
                    removedKeys.add(key);
                } else if (next !== undefined && removedKeys.has(key)) /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */ markToAnimate(key);
                else /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */ typeState.protectedKeys[key] = true;
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */ typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            if (typeState.isActive) encounteredKeys = {
                ...encounteredKeys,
                ...resolvedValues
            };
            if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) shouldAnimateType = false;
            /**
             * If this is an inherited prop we want to skip this animation
             * unless the inherited variants haven't changed on this render.
             */ const willAnimateViaParent = isInherited && variantDidChange;
            const needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) animations.push(...definitionList.map((animation)=>{
                const options = {
                    type
                };
                /**
                     * If we're performing the initial animation, but we're not
                     * rendering at the same time as the variant-controlling parent,
                     * we want to use the parent's transition to calculate the stagger.
                     */ if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
                    const { parent } = visualElement;
                    const parentVariant = (0, _resolveDynamicVariantsMjs.resolveVariant)(parent, animation);
                    if (parent.enteringChildren && parentVariant) {
                        const { delayChildren } = parentVariant.transition || {};
                        options.delay = (0, _calcChildStaggerMjs.calcChildStagger)(parent.enteringChildren, visualElement, delayChildren);
                    }
                }
                return {
                    animation: animation,
                    options
                };
            }));
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */ if (removedKeys.size) {
            const fallbackAnimation = {};
            /**
             * If the initial prop contains a transition we can use that, otherwise
             * allow the animation function to use the visual element's default.
             */ if (typeof props.initial !== "boolean") {
                const initialTransition = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
                if (initialTransition && initialTransition.transition) fallbackAnimation.transition = initialTransition.transition;
            }
            removedKeys.forEach((key)=>{
                const fallbackTarget = visualElement.getBaseTarget(key);
                const motionValue = visualElement.getValue(key);
                if (motionValue) motionValue.liveStyle = true;
                // @ts-expect-error - @mattgperry to figure if we should do something here
                fallbackAnimation[key] = fallbackTarget ?? null;
            });
            animations.push({
                animation: fallbackAnimation
            });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
        isInitialRender = false;
        wasReset = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */ function setActive(type, isActive) {
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive) return Promise.resolve();
        // Propagate active change to children
        visualElement.variantChildren?.forEach((child)=>child.animationState?.setActive(type, isActive));
        state[type].isActive = isActive;
        const animations = animateChanges(type);
        for(const key in state)state[key].protectedKeys = {};
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: ()=>state,
        reset: ()=>{
            state = createState();
            wasReset = true;
        }
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") return next !== prev;
    else if (Array.isArray(next)) return !(0, _shallowCompareMjs.shallowCompare)(next, prev);
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState()
    };
}

},{"../../animation/interfaces/visual-element.mjs":"gjX0x","../../animation/utils/calc-child-stagger.mjs":"fDnJH","./get-variant-context.mjs":"fpOm9","./is-animation-controls.mjs":"6fKNU","./is-keyframes-target.mjs":"4ke8d","./is-variant-label.mjs":"j6Abg","./resolve-dynamic-variants.mjs":"S4pyf","./shallow-compare.mjs":"dWptJ","./variant-props.mjs":"16oQs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fpOm9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVariantContext", ()=>getVariantContext);
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
const numVariantProps = (0, _variantPropsMjs.variantProps).length;
/**
 * Get variant context from a visual element's parent chain.
 * Uses `any` type for visualElement to avoid circular dependencies.
 */ function getVariantContext(visualElement) {
    if (!visualElement) return undefined;
    if (!visualElement.isControllingVariants) {
        const context = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
        if (visualElement.props.initial !== undefined) context.initial = visualElement.props.initial;
        return context;
    }
    const context = {};
    for(let i = 0; i < numVariantProps; i++){
        const name = (0, _variantPropsMjs.variantProps)[i];
        const prop = visualElement.props[name];
        if ((0, _isVariantLabelMjs.isVariantLabel)(prop) || prop === false) context[name] = prop;
    }
    return context;
}

},{"./is-variant-label.mjs":"j6Abg","./variant-props.mjs":"16oQs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dWptJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shallowCompare", ()=>shallowCompare);
function shallowCompare(next, prev) {
    if (!Array.isArray(prev)) return false;
    const prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(let i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ltg84":[function(require,module,exports,__globalThis) {
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copyAxisDeltaInto", ()=>copyAxisDeltaInto);
parcelHelpers.export(exports, "copyAxisInto", ()=>copyAxisInto);
parcelHelpers.export(exports, "copyBoxInto", ()=>copyBoxInto);
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dpJY8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcAxisDelta", ()=>calcAxisDelta);
parcelHelpers.export(exports, "calcBoxDelta", ()=>calcBoxDelta);
parcelHelpers.export(exports, "calcLength", ()=>calcLength);
parcelHelpers.export(exports, "calcRelativeAxis", ()=>calcRelativeAxis);
parcelHelpers.export(exports, "calcRelativeAxisPosition", ()=>calcRelativeAxisPosition);
parcelHelpers.export(exports, "calcRelativeBox", ()=>calcRelativeBox);
parcelHelpers.export(exports, "calcRelativePosition", ()=>calcRelativePosition);
parcelHelpers.export(exports, "isNear", ()=>isNear);
var _numberMjs = require("../../utils/mix/number.mjs");
const SCALE_PRECISION = 0.0001;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = (0, _numberMjs.mixNumber)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = (0, _numberMjs.mixNumber)(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1.0;
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0.0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
    const anchorPoint = anchor ? (0, _numberMjs.mixNumber)(parent.min, parent.max, anchor) : parent.min;
    target.min = anchorPoint + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
    calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
    calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout, parent, anchor = 0) {
    const anchorPoint = anchor ? (0, _numberMjs.mixNumber)(parent.min, parent.max, anchor) : parent.min;
    target.min = layout.min - anchorPoint;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent, anchor) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x, anchor?.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y, anchor?.y);
}

},{"../../utils/mix/number.mjs":"eSNQQ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jn38t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeAxisDelta", ()=>removeAxisDelta);
parcelHelpers.export(exports, "removeAxisTransforms", ()=>removeAxisTransforms);
parcelHelpers.export(exports, "removeBoxTransforms", ()=>removeBoxTransforms);
parcelHelpers.export(exports, "removePointDelta", ()=>removePointDelta);
var _numberMjs = require("../../utils/mix/number.mjs");
var _unitsMjs = require("../../value/types/numbers/units.mjs");
var _deltaApplyMjs = require("./delta-apply.mjs");
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */ function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0, _deltaApplyMjs.scalePoint)(point, 1 / scale, originPoint);
    if (boxScale !== undefined) point = (0, _deltaApplyMjs.scalePoint)(point, 1 / boxScale, originPoint);
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */ function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if ((0, _unitsMjs.percent).test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = (0, _numberMjs.mixNumber)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number") return;
    let originPoint = (0, _numberMjs.mixNumber)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis) originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */ const xKeys = [
    "x",
    "scaleX",
    "originX"
];
const yKeys = [
    "y",
    "scaleY",
    "originY"
];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

},{"../../utils/mix/number.mjs":"eSNQQ","../../value/types/numbers/units.mjs":"JFyVd","./delta-apply.mjs":"kg4pP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cjVOj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aspectRatio", ()=>aspectRatio);
parcelHelpers.export(exports, "axisDeltaEquals", ()=>axisDeltaEquals);
parcelHelpers.export(exports, "axisEquals", ()=>axisEquals);
parcelHelpers.export(exports, "axisEqualsRounded", ()=>axisEqualsRounded);
parcelHelpers.export(exports, "boxEquals", ()=>boxEquals);
parcelHelpers.export(exports, "boxEqualsRounded", ()=>boxEqualsRounded);
parcelHelpers.export(exports, "isDeltaZero", ()=>isDeltaZero);
var _deltaCalcMjs = require("./delta-calc.mjs");
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return (0, _deltaCalcMjs.calcLength)(box.x) / (0, _deltaCalcMjs.calcLength)(box.y);
}
function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

},{"./delta-calc.mjs":"dpJY8","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"897Cg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eachAxis", ()=>eachAxis);
function eachAxis(callback) {
    return [
        callback("x"),
        callback("y")
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5lWWb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildProjectionTransform", ()=>buildProjectionTransform);
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */ const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = latestTransform?.z || 0;
    if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */ if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    if (latestTransform) {
        const { transformPerspective, rotate, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
        if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
        if (rotate) transform += `rotate(${rotate}deg) `;
        // Additive `rotate()` so user `rotate` isn't clobbered.
        if (pathRotation) transform += `rotate(${pathRotation}deg) `;
        if (rotateX) transform += `rotateX(${rotateX}deg) `;
        if (rotateY) transform += `rotateY(${rotateY}deg) `;
        if (skewX) transform += `skewX(${skewX}deg) `;
        if (skewY) transform += `skewY(${skewY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */ const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
    return transform || "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"83hag":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixValues", ()=>mixValues);
var _numberMjs = require("../../utils/mix/number.mjs");
var _unitsMjs = require("../../value/types/numbers/units.mjs");
var _motionUtils = require("motion-utils");
var _borderRadiusMjs = require("../../utils/border-radius.mjs");
const numBorders = (0, _borderRadiusMjs.cornerRadiusProps).length;
const asNumber = (value)=>typeof value === "string" ? parseFloat(value) : value;
const isPx = (value)=>typeof value === "number" || (0, _unitsMjs.px).test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = (0, _numberMjs.mixNumber)(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
        target.opacityExit = (0, _numberMjs.mixNumber)(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
    } else if (isOnlyMember) target.opacity = (0, _numberMjs.mixNumber)(follow.opacity ?? 1, lead.opacity ?? 1, progress);
    /**
     * Mix border radius
     */ for(let i = 0; i < numBorders; i++){
        const borderLabel = (0, _borderRadiusMjs.cornerRadiusProps)[i];
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined) continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0, _numberMjs.mixNumber)(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if ((0, _unitsMjs.percent).test(leadRadius) || (0, _unitsMjs.percent).test(followRadius)) target[borderLabel] += "%";
        } else target[borderLabel] = leadRadius;
    }
    /**
     * Mix rotation
     */ if (follow.rotate || lead.rotate) target.rotate = (0, _numberMjs.mixNumber)(follow.rotate || 0, lead.rotate || 0, progress);
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, (0, _motionUtils.circOut));
const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, (0, _motionUtils.noop));
function compress(min, max, easing) {
    return (p)=>{
        // Could replace ifs with clamp
        if (p < min) return 0;
        if (p > max) return 1;
        return easing((0, _motionUtils.progress)(min, max, p));
    };
}

},{"../../utils/mix/number.mjs":"eSNQQ","../../value/types/numbers/units.mjs":"JFyVd","motion-utils":[["circOut","hLwRh"],["noop","7MDWX"],["progress","3Q4mc"]],"../../utils/border-radius.mjs":"iRJWe","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9tNte":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDomEvent", ()=>addDomEvent);
function addDomEvent(target, eventName, handler, options = {
    passive: true
}) {
    target.addEventListener(eventName, handler, options);
    return ()=>target.removeEventListener(eventName, handler, options);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bgX4X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByDepth", ()=>compareByDepth);
const compareByDepth = (a, b)=>a.depth - b.depth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"3HPzk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlatTree", ()=>FlatTree);
var _motionUtils = require("motion-utils");
var _compareByDepthMjs = require("./compare-by-depth.mjs");
class FlatTree {
    constructor(){
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        (0, _motionUtils.addUniqueItem)(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        (0, _motionUtils.removeItem)(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort((0, _compareByDepthMjs.compareByDepth));
        this.isDirty = false;
        this.children.forEach(callback);
    }
}

},{"motion-utils":"9bOuG","./compare-by-depth.mjs":"bgX4X","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bkgHI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "delayInSeconds", ()=>delayInSeconds);
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _motionUtils = require("motion-utils");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Timeout defined in ms
 */ function delay(callback, timeout) {
    const start = (0, _syncTimeMjs.time).now();
    const checkElapsed = ({ timestamp })=>{
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0, _frameMjs.cancelFrame)(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    (0, _frameMjs.frame).setup(checkElapsed, true);
    return ()=>(0, _frameMjs.cancelFrame)(checkElapsed);
}
function delayInSeconds(callback, timeout) {
    return delay(callback, (0, _motionUtils.secondsToMilliseconds)(timeout));
}

},{"../frameloop/sync-time.mjs":"c5O7T","motion-utils":"k1haA","../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aoLLF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cleanDirtyNodes", ()=>cleanDirtyNodes);
parcelHelpers.export(exports, "createProjectionNode", ()=>createProjectionNode);
parcelHelpers.export(exports, "mixAxis", ()=>mixAxis);
parcelHelpers.export(exports, "mixBox", ()=>mixBox);
parcelHelpers.export(exports, "propagateDirtyNodes", ()=>propagateDirtyNodes);
var _motionUtils = require("motion-utils");
var _singleValueMjs = require("../../animation/animate/single-value.mjs");
var _getAppearIdMjs = require("../../animation/optimized-appear/get-appear-id.mjs");
var _getValueTransitionMjs = require("../../animation/utils/get-value-transition.mjs");
var _microtaskMjs = require("../../frameloop/microtask.mjs");
var _syncTimeMjs = require("../../frameloop/sync-time.mjs");
var _scaleCorrectionMjs = require("../styles/scale-correction.mjs");
var _bufferMjs = require("../../stats/buffer.mjs");
var _delayMjs = require("../../utils/delay.mjs");
var _isSvgElementMjs = require("../../utils/is-svg-element.mjs");
var _isSvgSvgElementMjs = require("../../utils/is-svg-svg-element.mjs");
var _numberMjs = require("../../utils/mix/number.mjs");
var _indexMjs = require("../../value/index.mjs");
var _resolveMotionValueMjs = require("../../value/utils/resolve-motion-value.mjs");
var _mixValuesMjs = require("../animation/mix-values.mjs");
var _copyMjs = require("../geometry/copy.mjs");
var _deltaApplyMjs = require("../geometry/delta-apply.mjs");
var _deltaCalcMjs = require("../geometry/delta-calc.mjs");
var _deltaRemoveMjs = require("../geometry/delta-remove.mjs");
var _modelsMjs = require("../geometry/models.mjs");
var _utilsMjs = require("../geometry/utils.mjs");
var _stackMjs = require("../shared/stack.mjs");
var _transformMjs = require("../styles/transform.mjs");
var _eachAxisMjs = require("../utils/each-axis.mjs");
var _flatTreeMjs = require("../utils/flat-tree.mjs");
var _hasTransformMjs = require("../utils/has-transform.mjs");
var _stateMjs = require("./state.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const metrics = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
};
const transformAxes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */ const animationTarget = 1000;
let id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) sharedAnimationValues[key] = 0;
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode) return;
    const { visualElement } = projectionNode.options;
    if (!visualElement) return;
    const appearId = (0, _getAppearIdMjs.getOptimisedAppearId)(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        const { layout, layoutId } = projectionNode.options;
        window.MotionCancelOptimisedAnimation(appearId, "transform", (0, _frameMjs.frame), !(layout || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent?.()){
            /**
             * A unique ID generated for every projection node.
             */ this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */ this.animationId = 0;
            this.animationCommitId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */ this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */ this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */ this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */ this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */ this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */ this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */ this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */ this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */ this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */ this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */ this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */ this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */ this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */ this.treeScale = {
                x: 1,
                y: 1
            };
            /**
             *
             */ this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            this.layoutVersion = 0;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = ()=>this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = ()=>{
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */ this.updateProjection = ()=>{
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */ if ((0, _bufferMjs.statsBuffer).value) metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                if ((0, _bufferMjs.statsBuffer).addProjectionMetrics) (0, _bufferMjs.statsBuffer).addProjectionMetrics(metrics);
            };
            /**
             * Frame calculations
             */ this.resolvedRelativeTargetAt = 0.0;
            this.linkedParentVersion = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */ // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [
                ...parent.path,
                parent
            ] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for(let i = 0; i < this.path.length; i++)this.path[i].shouldResetTransform = true;
            if (this.root === this) this.nodes = new (0, _flatTreeMjs.FlatTree)();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new (0, _motionUtils.SubscriptionManager)());
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */ mount(instance) {
            if (this.instance) return;
            this.isSVG = (0, _isSvgElementMjs.isSVGElement)(instance) && !(0, _isSvgSvgElementMjs.isSVGSVGElement)(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) visualElement.mount(instance);
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (this.root.hasTreeAnimated && (layout || layoutId)) this.isLayoutDirty = true;
            if (attachResizeListener) {
                let cancelDelay;
                let innerWidth = 0;
                const resizeUnblockUpdate = ()=>this.root.updateBlockedByResize = false;
                // Set initial innerWidth in a frame.read callback to batch the read
                (0, _frameMjs.frame).read(()=>{
                    innerWidth = window.innerWidth;
                });
                attachResizeListener(instance, ()=>{
                    const newInnerWidth = window.innerWidth;
                    if (newInnerWidth === innerWidth) return;
                    innerWidth = newInnerWidth;
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = (0, _delayMjs.delay)(resizeUnblockUpdate, 250);
                    if ((0, _stateMjs.globalProjectionState).hasAnimatedSinceResize) {
                        (0, _stateMjs.globalProjectionState).hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) this.root.registerSharedNode(layoutId, this);
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false && visualElement && (layoutId || layout)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout })=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = undefined;
                    this.relativeTarget = undefined;
                    return;
                }
                // TODO: Check here if an animation exists
                const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
                const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
                /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */ const hasTargetChanged = !this.targetLayout || !(0, _utilsMjs.boxEqualsRounded)(this.targetLayout, newLayout);
                /*
                     * Note: Disabled to fix relative animations always triggering new
                     * layout animations. If this causes further issues, we can try
                     * a different approach to detecting relative target changes.
                     */ // || hasRelativeLayoutChanged
                /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */ const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
                if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
                    if (this.resumeFrom) {
                        this.resumingFrom = this.resumeFrom;
                        this.resumingFrom.resumingFrom = undefined;
                    }
                    const animationOptions = {
                        ...(0, _getValueTransitionMjs.getValueTransition)(layoutTransition, "layout"),
                        onPlay: onLayoutAnimationStart,
                        onComplete: onLayoutAnimationComplete
                    };
                    if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                        animationOptions.delay = 0;
                        animationOptions.type = false;
                    }
                    this.startAnimation(animationOptions);
                    /**
                         * Set animation origin after starting animation to avoid layout jump
                         * caused by stopping previous layout animation
                         */ this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
                } else {
                    /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never committed to screen and look like a jumpy box.
                         */ if (!hasLayoutChanged) finishAnimation(this);
                    if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
                }
                this.targetLayout = newLayout;
            });
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            this.eventHandlers.clear();
            (0, _frameMjs.cancelFrame)(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked()) return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetSkewAndRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */ if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty) return;
            this.isLayoutDirty = true;
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                node.shouldResetTransform = true;
                /**
                 * Percentage translates resolve against layoutBox dimensions,
                 * so ancestors with them must be re-measured after transform reset.
                 */ if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") node.isLayoutDirty = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) node.willUpdate(false);
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout) return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                const wasBlockedByResize = this.updateBlockedByResize;
                this.unblockUpdate();
                this.updateBlockedByResize = false;
                this.clearAllSnapshots();
                /**
                 * When blocked by resize, still measure layouts so
                 * callbacks like onLayoutMeasure fire (e.g. Reorder).
                 * Skip notifyLayoutUpdate to prevent animations.
                 */ if (wasBlockedByResize) this.nodes.forEach(forceLayoutMeasure);
                this.nodes.forEach(clearMeasurements);
                return;
            }
            /**
             * If this is a repeat of didUpdate then ignore the animation.
             */ if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(clearIsLayoutDirty);
                return;
            }
            this.animationCommitId = this.animationId;
            if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
            else {
                this.isUpdating = false;
                /**
                 * Ensure animation-blocked nodes (e.g. during drag)
                 * get measured even when memoized (willUpdate skipped).
                 */ this.nodes.forEach(ensureDraggedNodesSnapshotted);
                /**
                 * Write
                 */ this.nodes.forEach(resetTransformStyle);
                /**
                 * Read ==================
                 */ // Update layout measurements of updated children
                this.nodes.forEach(updateLayout);
                /**
                 * Write
                 */ // Notify listeners that the layout is updated
                this.nodes.forEach(notifyLayoutUpdate);
            }
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */ const now = (0, _syncTimeMjs.time).now();
            (0, _frameMjs.frameData).delta = (0, _motionUtils.clamp)(0, 1000 / 60, now - (0, _frameMjs.frameData).timestamp);
            (0, _frameMjs.frameData).timestamp = now;
            (0, _frameMjs.frameData).isProcessing = true;
            (0, _frameMjs.frameSteps).update.process((0, _frameMjs.frameData));
            (0, _frameMjs.frameSteps).preRender.process((0, _frameMjs.frameData));
            (0, _frameMjs.frameSteps).render.process((0, _frameMjs.frameData));
            (0, _frameMjs.frameData).isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                (0, _microtaskMjs.microtask).read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                (0, _frameMjs.frame).preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */ (0, _frameMjs.frame).postRender(()=>{
                if (this.isLayoutDirty) this.root.didUpdate();
                else this.root.checkUpdateFailed();
            });
        }
        /**
         * Update measurements
         */ updateSnapshot() {
            if (this.snapshot || !this.instance) return;
            this.snapshot = this.measure();
            if (this.snapshot && !(0, _deltaCalcMjs.calcLength)(this.snapshot.measuredBox.x) && !(0, _deltaCalcMjs.calcLength)(this.snapshot.measuredBox.y)) this.snapshot = undefined;
        }
        updateLayout() {
            if (!this.instance) return;
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */ if (this.resumeFrom && !this.resumeFrom.instance) for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                node.updateScroll();
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutVersion++;
            if (!this.layoutCorrected) this.layoutCorrected = (0, _modelsMjs.createBox)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
            if (needsMeasurement && this.instance) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot
                };
            }
        }
        resetTransform() {
            if (!resetTransform) return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
            const hasProjection = this.projectionDelta && !(0, _utilsMjs.isDeltaZero)(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested && this.instance && (hasProjection || (0, _hasTransformMjs.hasTransform)(this.latestValues) || transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */ if (removeTransform) layoutBox = this.removeTransform(layoutBox);
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement) return (0, _modelsMjs.createBox)();
            const box = visualElement.measureViewportBox();
            const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
            if (!wasInScrollRoot) {
                // Remove viewport scroll to give page-relative coordinates
                const { scroll } = this.root;
                if (scroll) {
                    (0, _deltaApplyMjs.translateAxis)(box.x, scroll.offset.x);
                    (0, _deltaApplyMjs.translateAxis)(box.y, scroll.offset.y);
                }
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = (0, _modelsMjs.createBox)();
            (0, _copyMjs.copyBoxInto)(boxWithoutScroll, box);
            if (this.scroll?.wasRoot) return boxWithoutScroll;
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */ for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */ if (scroll.wasRoot) (0, _copyMjs.copyBoxInto)(boxWithoutScroll, box);
                    (0, _deltaApplyMjs.translateAxis)(boxWithoutScroll.x, scroll.offset.x);
                    (0, _deltaApplyMjs.translateAxis)(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false, output) {
            const withTransforms = output || (0, _modelsMjs.createBox)();
            (0, _copyMjs.copyBoxInto)(withTransforms, box);
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
                    (0, _deltaApplyMjs.translateAxis)(withTransforms.x, -node.scroll.offset.x);
                    (0, _deltaApplyMjs.translateAxis)(withTransforms.y, -node.scroll.offset.y);
                }
                if (!(0, _hasTransformMjs.hasTransform)(node.latestValues)) continue;
                (0, _deltaApplyMjs.transformBox)(withTransforms, node.latestValues, node.layout?.layoutBox);
            }
            if ((0, _hasTransformMjs.hasTransform)(this.latestValues)) (0, _deltaApplyMjs.transformBox)(withTransforms, this.latestValues, this.layout?.layoutBox);
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = (0, _modelsMjs.createBox)();
            (0, _copyMjs.copyBoxInto)(boxWithoutTransform, box);
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                if (!(0, _hasTransformMjs.hasTransform)(node.latestValues)) continue;
                let sourceBox;
                if (node.instance) {
                    (0, _hasTransformMjs.hasScale)(node.latestValues) && node.updateSnapshot();
                    sourceBox = (0, _modelsMjs.createBox)();
                    (0, _copyMjs.copyBoxInto)(sourceBox, node.measurePageBox());
                }
                (0, _deltaRemoveMjs.removeBoxTransforms)(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
            }
            if ((0, _hasTransformMjs.hasTransform)(this.latestValues)) (0, _deltaRemoveMjs.removeBoxTransforms)(boxWithoutTransform, this.latestValues);
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent) return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */ if (this.relativeParent.resolvedRelativeTargetAt !== (0, _frameMjs.frameData).timestamp) this.relativeParent.resolveTargetDelta(true);
        }
        resolveTargetDelta(forceRecalculation = false) {
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */ const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */ const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
            if (canSkip) return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */ if (!this.layout || !(layout || layoutId)) return;
            this.resolvedRelativeTargetAt = (0, _frameMjs.frameData).timestamp;
            const relativeParent = this.getClosestProjectingParent();
            if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) this.removeRelativeTarget();
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */ if (!this.targetDelta && !this.relativeTarget) {
                if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
                else this.removeRelativeTarget();
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */ if (!this.relativeTarget && !this.targetDelta) return;
            /**
             * Lazy-init target data structure
             */ if (!this.target) {
                this.target = (0, _modelsMjs.createBox)();
                this.targetWithTransforms = (0, _modelsMjs.createBox)();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */ if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                (0, _deltaCalcMjs.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || undefined);
            /**
                 * If we've only got a targetDelta, resolve it into a target
                 */ } else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) this.applyTransform(this.layout.layoutBox, false, this.target);
                else (0, _copyMjs.copyBoxInto)(this.target, this.layout.layoutBox);
                (0, _deltaApplyMjs.applyBoxDelta)(this.target, this.targetDelta);
            } else /**
                 * If no target, use own layout as target
                 */ (0, _copyMjs.copyBoxInto)(this.target, this.layout.layoutBox);
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */ if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
                else this.relativeParent = this.relativeTarget = undefined;
            }
            /**
             * Increase debug counter for resolved target deltas
             */ if ((0, _bufferMjs.statsBuffer).value) metrics.calculatedTargetDeltas++;
        }
        getClosestProjectingParent() {
            if (!this.parent || (0, _hasTransformMjs.hasScale)(this.parent.latestValues) || (0, _hasTransformMjs.has2DTranslate)(this.parent.latestValues)) return undefined;
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(relativeParent, layout, parentLayout) {
            this.relativeParent = relativeParent;
            this.linkedParentVersion = relativeParent.layoutVersion;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = (0, _modelsMjs.createBox)();
            this.relativeTargetOrigin = (0, _modelsMjs.createBox)();
            (0, _deltaCalcMjs.calcRelativePosition)(this.relativeTargetOrigin, layout, parentLayout, this.options.layoutAnchor || undefined);
            (0, _copyMjs.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = undefined;
        }
        calcProjection() {
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */ if (this.isProjectionDirty || this.parent?.isProjectionDirty) canSkip = false;
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */ if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */ if (this.resolvedRelativeTargetAt === (0, _frameMjs.frameData).timestamp) canSkip = false;
            if (canSkip) return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */ this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
            if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = undefined;
            if (!this.layout || !(layout || layoutId)) return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */ (0, _copyMjs.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */ const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */ (0, _deltaApplyMjs.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */ if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
                lead.targetWithTransforms = (0, _modelsMjs.createBox)();
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */ if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
            else {
                (0, _copyMjs.copyAxisDeltaInto)(this.prevProjectionDelta.x, this.projectionDelta.x);
                (0, _copyMjs.copyAxisDeltaInto)(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */ (0, _deltaCalcMjs.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !(0, _utilsMjs.axisDeltaEquals)(this.projectionDelta.x, this.prevProjectionDelta.x) || !(0, _utilsMjs.axisDeltaEquals)(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */ if ((0, _bufferMjs.statsBuffer).value) metrics.calculatedProjections++;
        }
        hide() {
            this.isVisible = false;
        // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
        // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.visualElement?.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = undefined;
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = (0, _modelsMjs.createDelta)();
            this.projectionDelta = (0, _modelsMjs.createDelta)();
            this.projectionDeltaWithTransform = (0, _modelsMjs.createDelta)();
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
            const mixedValues = {
                ...this.latestValues
            };
            const targetDelta = (0, _modelsMjs.createDelta)();
            if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = undefined;
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = (0, _modelsMjs.createBox)();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            // The path decides whether the layout shift is worth curving
            // (distance floor) and resolves the interpolator from the delta.
            const interpolate = pathFn?.interpolateProjection(delta);
            this.mixTargetDelta = (latest)=>{
                const progress = latest / 1000;
                const point = interpolate?.(progress);
                if (point) {
                    targetDelta.x.translate = point.x;
                    targetDelta.x.scale = (0, _numberMjs.mixNumber)(delta.x.scale, 1, progress);
                    targetDelta.x.origin = delta.x.origin;
                    targetDelta.x.originPoint = delta.x.originPoint;
                    targetDelta.y.translate = point.y;
                    targetDelta.y.scale = (0, _numberMjs.mixNumber)(delta.y.scale, 1, progress);
                    targetDelta.y.origin = delta.y.origin;
                    targetDelta.y.originPoint = delta.y.originPoint;
                } else {
                    mixAxisDeltaLinear(targetDelta.x, delta.x, progress);
                    mixAxisDeltaLinear(targetDelta.y, delta.y, progress);
                }
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                    (0, _deltaCalcMjs.calcRelativePosition)(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || undefined);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */ if (prevRelativeTarget && (0, _utilsMjs.boxEquals)(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
                    if (!prevRelativeTarget) prevRelativeTarget = (0, _modelsMjs.createBox)();
                    (0, _copyMjs.copyBoxInto)(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    (0, _mixValuesMjs.mixValues)(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                if (point && point.rotate !== undefined) {
                    // Dedicated `pathRotation` channel, not `rotate`, so an
                    // animating `rotate` is composed with, never clobbered.
                    if (!this.animationValues) this.animationValues = mixedValues;
                    this.animationValues.pathRotation = point.rotate;
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation?.stop();
            this.resumingFrom?.currentAnimation?.stop();
            if (this.pendingAnimation) {
                (0, _frameMjs.cancelFrame)(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */ this.pendingAnimation = (0, _frameMjs.frame).update(()=>{
                (0, _stateMjs.globalProjectionState).hasAnimatedSinceResize = true;
                this.motionValue || (this.motionValue = (0, _indexMjs.motionValue)(0));
                this.motionValue.jump(0, false);
                this.currentAnimation = (0, _singleValueMjs.animateSingleValue)(this.motionValue, [
                    0,
                    1000
                ], {
                    ...options,
                    velocity: 0,
                    isSync: true,
                    onUpdate: (latest)=>{
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: ()=>{
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    }
                });
                if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout) return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */ if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || (0, _modelsMjs.createBox)();
                const xLength = (0, _deltaCalcMjs.calcLength)(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = (0, _deltaCalcMjs.calcLength)(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            (0, _copyMjs.copyBoxInto)(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */ (0, _deltaApplyMjs.transformBox)(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */ (0, _deltaCalcMjs.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new (0, _stackMjs.NodeStack)());
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.lead || this : this;
        }
        getPrevLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId) return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity } = {}) {
            const stack = this.getStack();
            if (stack) stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition) this.setOptions({
                transition
            });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) return stack.relegate(this);
            else return false;
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement) return;
            // If there's no detected skew or rotation values, we can early return without a forced render.
            let hasDistortingTransform = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */ const { latestValues } = visualElement;
            if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
            // If there's no distorting values, we don't need to do any more.
            if (!hasDistortingTransform) return;
            const resetValues = {};
            if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
            // Check the skew and rotate value of all axes and reset to 0
            for(let i = 0; i < transformAxes.length; i++){
                resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
                resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
            }
            // Force a render of this element to apply the transform with all skews and rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for(const key in resetValues){
                visualElement.setStaticValue(key, resetValues[key]);
                if (this.animationValues) this.animationValues[key] = resetValues[key];
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        applyProjectionStyles(targetStyle, styleProp) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                targetStyle.visibility = "hidden";
                return;
            }
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                targetStyle.visibility = "";
                targetStyle.opacity = "";
                targetStyle.pointerEvents = (0, _resolveMotionValueMjs.resolveMotionValue)(styleProp?.pointerEvents) || "";
                targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
                return;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                if (this.options.layoutId) {
                    targetStyle.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
                    targetStyle.pointerEvents = (0, _resolveMotionValueMjs.resolveMotionValue)(styleProp?.pointerEvents) || "";
                }
                if (this.hasProjected && !(0, _hasTransformMjs.hasTransform)(this.latestValues)) {
                    targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
                    this.hasProjected = false;
                }
                return;
            }
            targetStyle.visibility = "";
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            let transform = (0, _transformMjs.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) transform = transformTemplate(valuesToRender, transform);
            targetStyle.transform = transform;
            const { x, y } = this.projectionDelta;
            targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */ targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
            else /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */ targetStyle.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
            /**
             * Apply scale correction
             */ for(const key in 0, _scaleCorrectionMjs.scaleCorrectors){
                if (valuesToRender[key] === undefined) continue;
                const { correct, applyTo, isCSSVariable } = (0, _scaleCorrectionMjs.scaleCorrectors)[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */ const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for(let i = 0; i < num; i++)targetStyle[applyTo[i]] = corrected;
                } else // If this is a CSS variable, set it directly on the instance.
                // Replacing this function from creating styles to setting them
                // would be a good place to remove per frame object creation
                if (isCSSVariable) this.options.visualElement.renderState.vars[key] = corrected;
                else targetStyle[key] = corrected;
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */ if (this.options.layoutId) targetStyle.pointerEvents = lead === this ? (0, _resolveMotionValueMjs.resolveMotionValue)(styleProp?.pointerEvents) || "" : "none";
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node)=>node.currentAnimation?.stop());
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    const snapshot = node.resumeFrom?.snapshot || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") (0, _eachAxisMjs.eachAxis)((axis)=>{
            const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
            const length = (0, _deltaCalcMjs.calcLength)(axisSnapshot);
            axisSnapshot.min = layout[axis].min;
            axisSnapshot.max = axisSnapshot.min + length;
        });
        else if (animationType === "x" || animationType === "y") {
            const snapAxis = animationType === "x" ? "y" : "x";
            (0, _copyMjs.copyAxisInto)(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout[snapAxis]);
        } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) (0, _eachAxisMjs.eachAxis)((axis)=>{
            const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
            const length = (0, _deltaCalcMjs.calcLength)(layout[axis]);
            axisSnapshot.max = axisSnapshot.min + length;
            /**
                 * Ensure relative target gets resized and rerendererd
                 */ if (node.relativeTarget && !node.currentAnimation) {
                node.isProjectionDirty = true;
                node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
            }
        });
        const layoutDelta = (0, _modelsMjs.createDelta)();
        (0, _deltaCalcMjs.calcBoxDelta)(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = (0, _modelsMjs.createDelta)();
        if (isShared) (0, _deltaCalcMjs.calcBoxDelta)(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        else (0, _deltaCalcMjs.calcBoxDelta)(visualDelta, layout, snapshot.layoutBox);
        const hasLayoutChanged = !(0, _utilsMjs.isDeltaZero)(layoutDelta);
        let hasRelativeLayoutChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */ if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const anchor = node.options.layoutAnchor || undefined;
                    const relativeSnapshot = (0, _modelsMjs.createBox)();
                    (0, _deltaCalcMjs.calcRelativePosition)(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
                    const relativeLayout = (0, _modelsMjs.createBox)();
                    (0, _deltaCalcMjs.calcRelativePosition)(relativeLayout, layout, parentLayout.layoutBox, anchor);
                    if (!(0, _utilsMjs.boxEqualsRounded)(relativeSnapshot, relativeLayout)) hasRelativeLayoutChanged = true;
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeLayoutChanged
        });
    } else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */ node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */ if ((0, _bufferMjs.statsBuffer).value) metrics.nodes++;
    if (!node.parent) return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */ if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */ node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function forceLayoutMeasure(node) {
    node.isLayoutDirty = true;
    node.updateLayout();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
/**
 * When a node is animation-blocked (e.g. during drag) and its component
 * didn't re-render (memoized), willUpdate() is never called so there's
 * no snapshot. Use the previous layout as a snapshot and mark dirty so
 * resetTransform/updateLayout/notifyLayoutUpdate process it normally.
 */ function ensureDraggedNodesSnapshotted(node) {
    if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
        node.snapshot = node.layout;
        node.isLayoutDirty = true;
    }
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
    output.translate = (0, _numberMjs.mixNumber)(delta.translate, 0, p);
    output.scale = (0, _numberMjs.mixNumber)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0, _numberMjs.mixNumber)(from.min, to.min, p);
    output.max = (0, _numberMjs.mixNumber)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== undefined;
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [
        0.4,
        0,
        0.1,
        1
    ]
};
const userAgentContains = (string)=>typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */ const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : (0, _motionUtils.noop);
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return animationType === "position" || animationType === "preserve-aspect" && !(0, _deltaCalcMjs.isNear)((0, _utilsMjs.aspectRatio)(snapshot), (0, _utilsMjs.aspectRatio)(layout), 0.2);
}
function checkNodeWasScrollRoot(node) {
    return node !== node.root && node.scroll?.wasRoot;
}

},{"motion-utils":[["clamp","2BS9B"],["noop","7MDWX"],["SubscriptionManager","9fEBk"]],"../../animation/animate/single-value.mjs":"7SfpZ","../../animation/optimized-appear/get-appear-id.mjs":"eZ2sD","../../animation/utils/get-value-transition.mjs":"jlH9x","../../frameloop/microtask.mjs":"fREU6","../../frameloop/sync-time.mjs":"c5O7T","../styles/scale-correction.mjs":"7HdIu","../../stats/buffer.mjs":"bK1s2","../../utils/delay.mjs":"bkgHI","../../utils/is-svg-element.mjs":"71mHY","../../utils/is-svg-svg-element.mjs":"cF6lu","../../utils/mix/number.mjs":"eSNQQ","../../value/index.mjs":"c1jKT","../../value/utils/resolve-motion-value.mjs":"1iuCH","../animation/mix-values.mjs":"83hag","../geometry/copy.mjs":"ltg84","../geometry/delta-apply.mjs":"kg4pP","../geometry/delta-calc.mjs":"dpJY8","../geometry/delta-remove.mjs":"jn38t","../geometry/models.mjs":"4RI28","../geometry/utils.mjs":"cjVOj","../shared/stack.mjs":"8wCbz","../styles/transform.mjs":"5lWWb","../utils/each-axis.mjs":"897Cg","../utils/flat-tree.mjs":"3HPzk","../utils/has-transform.mjs":"aDFUL","./state.mjs":"jATSc","../../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8wCbz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeStack", ()=>NodeStack);
var _motionUtils = require("motion-utils");
class NodeStack {
    constructor(){
        this.members = [];
    }
    add(node) {
        (0, _motionUtils.addUniqueItem)(this.members, node);
        for(let i = this.members.length - 1; i >= 0; i--){
            const member = this.members[i];
            if (member === node || member === this.lead || member === this.prevLead) continue;
            const inst = member.instance;
            if ((!inst || inst.isConnected === false) && !member.snapshot) {
                (0, _motionUtils.removeItem)(this.members, member);
                member.unmount();
            }
        }
        node.scheduleRender();
    }
    remove(node) {
        (0, _motionUtils.removeItem)(this.members, node);
        if (node === this.prevLead) this.prevLead = undefined;
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) this.promote(prevLead);
        }
    }
    relegate(node) {
        for(let i = this.members.indexOf(node) - 1; i >= 0; i--){
            const member = this.members[i];
            if (member.isPresent !== false && member.instance?.isConnected !== false) {
                this.promote(member);
                return true;
            }
        }
        return false;
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead) return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.updateSnapshot();
            node.scheduleRender();
            const { layoutDependency: prevDep } = prevLead.options;
            const { layoutDependency: nextDep } = node.options;
            if (prevDep === undefined || prevDep !== nextDep) {
                node.resumeFrom = prevLead;
                if (preserveFollowOpacity) prevLead.preserveOpacity = true;
                if (prevLead.snapshot) {
                    node.snapshot = prevLead.snapshot;
                    node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
                }
                if (node.root?.isUpdating) node.isLayoutDirty = true;
            }
            if (node.options.crossfade === false) prevLead.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((member)=>{
            member.options.onExitComplete?.();
            member.resumingFrom?.options.onExitComplete?.();
        });
    }
    scheduleRender() {
        this.members.forEach((member)=>member.instance && member.scheduleRender(false));
    }
    removeLeadSnapshot() {
        if (this.lead?.snapshot) this.lead.snapshot = undefined;
    }
}

},{"motion-utils":"9bOuG","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"jATSc":[function(require,module,exports,__globalThis) {
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "globalProjectionState", ()=>globalProjectionState);
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */ hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */ hasEverUpdated: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"aqCdB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentProjectionNode", ()=>DocumentProjectionNode);
var _addDomEventMjs = require("../../events/add-dom-event.mjs");
var _createProjectionNodeMjs = require("./create-projection-node.mjs");
const DocumentProjectionNode = (0, _createProjectionNodeMjs.createProjectionNode)({
    attachResizeListener: (ref, notify)=>(0, _addDomEventMjs.addDomEvent)(ref, "resize", notify),
    measureScroll: ()=>({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
        }),
    checkIsScrollRoot: ()=>true
});

},{"../../events/add-dom-event.mjs":"9tNte","./create-projection-node.mjs":"aoLLF","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"423yW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nodeGroup", ()=>nodeGroup);
const notify = (node)=>!node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
    const nodes = new Set();
    const subscriptions = new WeakMap();
    const dirtyAll = ()=>nodes.forEach(notify);
    return {
        add: (node)=>{
            nodes.add(node);
            subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
        },
        remove: (node)=>{
            nodes.delete(node);
            const unsubscribe = subscriptions.get(node);
            if (unsubscribe) {
                unsubscribe();
                subscriptions.delete(node);
            }
            dirtyAll();
        },
        dirty: dirtyAll
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c032s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLProjectionNode", ()=>HTMLProjectionNode);
parcelHelpers.export(exports, "rootProjectionNode", ()=>rootProjectionNode);
var _createProjectionNodeMjs = require("./create-projection-node.mjs");
var _documentProjectionNodeMjs = require("./DocumentProjectionNode.mjs");
const rootProjectionNode = {
    current: undefined
};
const HTMLProjectionNode = (0, _createProjectionNodeMjs.createProjectionNode)({
    measureScroll: (instance)=>({
            x: instance.scrollLeft,
            y: instance.scrollTop
        }),
    defaultParent: ()=>{
        if (!rootProjectionNode.current) {
            const documentNode = new (0, _documentProjectionNodeMjs.DocumentProjectionNode)({});
            documentNode.mount(window);
            documentNode.setOptions({
                layoutScroll: true
            });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value)=>{
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance)=>Boolean(window.getComputedStyle(instance).position === "fixed")
});

},{"./create-projection-node.mjs":"aoLLF","./DocumentProjectionNode.mjs":"aqCdB","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"fE1rO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LayoutAnimationBuilder", ()=>LayoutAnimationBuilder);
parcelHelpers.export(exports, "parseAnimateLayoutArgs", ()=>parseAnimateLayoutArgs);
var _motionUtils = require("motion-utils");
var _groupAnimationMjs = require("../animation/GroupAnimation.mjs");
var _microtaskMjs = require("../frameloop/microtask.mjs");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _htmlprojectionNodeMjs = require("../projection/node/HTMLProjectionNode.mjs");
var _htmlvisualElementMjs = require("../render/html/HTMLVisualElement.mjs");
var _storeMjs = require("../render/store.mjs");
var _hasTransformMjs = require("../projection/utils/has-transform.mjs");
var _resolveElementsMjs = require("../utils/resolve-elements.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
const layoutSelector = "[data-layout],[data-layout-id]";
/**
 * All imperatively-created projection nodes live in one persistent tree,
 * shared across animateLayout() calls (and with any React-created nodes,
 * via the singleton document root). Keyed by element for reuse.
 */ const layoutNodes = new WeakMap();
/**
 * Builders created within the same synchronous tick are flushed together
 * as a single "commit": every node is snapshotted before any updateDom
 * runs, mirroring React batching renders from different parts of the tree.
 */ let pendingBuilders;
function collectLayoutElements(scope) {
    const elements = [];
    if (scope instanceof HTMLElement && scope.matches(layoutSelector)) elements.push(scope);
    scope.querySelectorAll(layoutSelector).forEach((element)=>{
        if (element instanceof HTMLElement) elements.push(element);
    });
    return elements;
}
/**
 * Process any work scheduled on the frameloop now. A previous animation
 * may have been seeked while paused (controls.time = x) without a frame
 * having rendered it - we must materialise that state into the DOM
 * before taking snapshots.
 */ function flushPendingFrame() {
    if ((0, _frameMjs.frameData).isProcessing) return;
    const now = (0, _syncTimeMjs.time).now();
    (0, _frameMjs.frameData).delta = (0, _motionUtils.clamp)(0, 1000 / 60, now - (0, _frameMjs.frameData).timestamp);
    (0, _frameMjs.frameData).timestamp = now;
    (0, _frameMjs.frameData).isProcessing = true;
    (0, _frameMjs.frameSteps).update.process((0, _frameMjs.frameData));
    (0, _frameMjs.frameSteps).preRender.process((0, _frameMjs.frameData));
    (0, _frameMjs.frameSteps).render.process((0, _frameMjs.frameData));
    (0, _frameMjs.frameData).isProcessing = false;
}
function getProjectionParent(element) {
    let ancestor = element.parentElement;
    while(ancestor){
        const node = layoutNodes.get(ancestor);
        if (node && node.instance) return node;
        ancestor = ancestor.parentElement;
    }
    return undefined;
}
function createVisualElement() {
    return new (0, _htmlvisualElementMjs.HTMLVisualElement)({
        props: {},
        presenceContext: null,
        visualState: {
            latestValues: {},
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {}
            }
        }
    }, {
        allowProjection: true
    });
}
function readNodeOptions(element, transition) {
    const layoutAttr = element.getAttribute("data-layout");
    const layoutId = element.getAttribute("data-layout-id") ?? undefined;
    return {
        layoutId,
        layout: layoutAttr !== null ? true : undefined,
        animationType: !layoutAttr || layoutAttr === "true" ? "both" : layoutAttr,
        transition
    };
}
function prepareNode(element, transition) {
    let node = layoutNodes.get(element);
    if (!node) {
        let visualElement = (0, _storeMjs.visualElementStore).get(element);
        if (!visualElement) visualElement = createVisualElement();
        /**
         * A first-time element may carry a projection transform in its
         * inline style (e.g. it was cloned from an element mid-animation).
         * That transform isn't tracked in latestValues so the engine can't
         * reset it before measuring - clear it now so the first layout
         * measurement isn't inflated.
         */ if (element.style.transform && !(0, _hasTransformMjs.hasTransform)(visualElement.latestValues)) element.style.transform = "";
        node = new (0, _htmlprojectionNodeMjs.HTMLProjectionNode)(visualElement.latestValues, getProjectionParent(element));
        visualElement.projection = node;
        node.setOptions({
            ...readNodeOptions(element, transition),
            visualElement
        });
        node.mount(element);
        layoutNodes.set(element, node);
    } else node.setOptions(readNodeOptions(element, transition));
    node.isPresent = true;
    if (node.options.onExitComplete) node.setOptions({
        onExitComplete: undefined
    });
    return node;
}
function sortDocumentOrder(elements) {
    return [
        ...elements
    ].sort((a, b)=>a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
}
function dropNode(element, node) {
    node.setOptions({
        onExitComplete: undefined
    });
    /**
     * Stop any lingering animation so it can't leak into future updates.
     * A follow node can share its currentAnimation with a surviving lead
     * (via resumingFrom), in which case it isn't ours to stop.
     */ const stack = node.getStack();
    if (!stack || node.isLead()) node.currentAnimation?.stop();
    node.unmount();
    layoutNodes.delete(element);
}
function flushPendingBuilders() {
    const builders = pendingBuilders;
    pendingBuilders = undefined;
    flushPendingFrame();
    /**
     * Discover and mount every node across all builders before snapshotting
     * any of them. Mounting during an active update flags isLayoutDirty,
     * which would make that node's own willUpdate skip its snapshot.
     * Document order guarantees ancestors mount before descendants, even
     * when they're discovered by different builders.
     */ const targets = new Map();
    for (const builder of builders)for (const element of builder.collectTargets()){
        const owners = targets.get(element);
        owners ? owners.push(builder) : targets.set(element, [
            builder
        ]);
    }
    const union = new Map();
    for (const element of sortDocumentOrder(targets.keys())){
        const owners = targets.get(element);
        const node = prepareNode(element, owners[owners.length - 1].transitionFor(element));
        for (const owner of owners)owner.adopt(element, node);
        union.set(element, node);
    }
    union.forEach((node)=>{
        node.isLayoutDirty = false;
        node.willUpdate();
    });
    const updatePromises = [];
    for (const builder of builders){
        const result = builder.runUpdate();
        if (result) updatePromises.push(result);
    }
    const commit = ()=>{
        /**
         * Process all additions before any removals so that, even across
         * builders, a removed member knows whether a replacement with the
         * same layoutId was added in this commit.
         */ const newMemberIds = new Set();
        for (const builder of builders)builder.reconcileAdditions(newMemberIds);
        for (const builder of builders)builder.reconcileRemovals(newMemberIds);
        let root;
        union.forEach((node)=>root || (root = node.root));
        for (const builder of builders)root || (root = builder.getRoot());
        root?.didUpdate();
        /**
         * The root flushes the update on a microtask, synchronously
         * processing the frame that creates the layout animations. Collect
         * them in a later microtask step of the same pass.
         */ (0, _microtaskMjs.microtask).render(()=>{
            for (const builder of builders)builder.finalize();
        });
    };
    updatePromises.length ? Promise.all(updatePromises).then(commit) : commit();
}
class LayoutAnimationBuilder {
    constructor(scope, updateDom, defaultOptions){
        this.scope = scope;
        this.updateDom = updateDom;
        this.defaultOptions = defaultOptions;
        this.sharedTransitions = new Map();
        this.notifyReady = ()=>{};
        this.rejectReady = ()=>{};
        this.tracked = new Map();
        this.restorePoints = new Map();
        this.readyPromise = new Promise((resolve, reject)=>{
            this.notifyReady = resolve;
            this.rejectReady = reject;
        });
        if (!pendingBuilders) {
            pendingBuilders = [];
            queueMicrotask(flushPendingBuilders);
        }
        pendingBuilders.push(this);
    }
    shared(id, transition) {
        this.sharedTransitions.set(id, transition);
        return this;
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
    transitionFor(element) {
        const layoutId = element.getAttribute("data-layout-id");
        return layoutId && this.sharedTransitions.get(layoutId) || this.defaultOptions;
    }
    adopt(element, node) {
        this.tracked.set(element, node);
        this.restorePoints.set(element, {
            parent: element.parentElement,
            next: element.nextSibling
        });
    }
    collectTargets() {
        return collectLayoutElements(this.scope);
    }
    runUpdate() {
        try {
            const result = this.updateDom();
            if (result && typeof result.then === "function") return result.then(undefined, (error)=>{
                this.updateError = error;
            });
        } catch (error) {
            this.updateError = error;
        }
        return undefined;
    }
    reconcileAdditions(newMemberIds) {
        for (const element of collectLayoutElements(this.scope)){
            if (this.tracked.has(element)) continue;
            const node = prepareNode(element, this.transitionFor(element));
            this.adopt(element, node);
            node.options.layoutId && newMemberIds.add(node.options.layoutId);
        }
    }
    reconcileRemovals(newMemberIds) {
        this.tracked.forEach((node, element)=>{
            if (element.isConnected) return;
            const restore = this.restorePoints.get(element);
            this.restorePoints.delete(element);
            const { layoutId } = node.options;
            const stack = node.getStack();
            const hasSurvivor = stack && stack.members.some((member)=>member !== node && member.instance?.isConnected);
            /**
             * A removed lead with a surviving stack member - and no
             * replacement member added this commit - runs an exit
             * crossfade: restore the element to its old position in the
             * DOM, relegate it and let the survivor take over. It's
             * removed again once the animation completes.
             */ if (layoutId && node.isLead() && hasSurvivor && !newMemberIds.has(layoutId)) {
                if (restore && restore.parent.isConnected) {
                    restore.parent.insertBefore(element, restore.next && restore.next.parentNode === restore.parent ? restore.next : null);
                    node.isPresent = false;
                    node.setOptions({
                        onExitComplete: ()=>{
                            element.remove();
                            dropNode(element, node);
                        }
                    });
                    if (node.relegate()) return;
                    element.remove();
                }
            }
            dropNode(element, node);
            this.tracked.delete(element);
        });
    }
    getRoot() {
        let root;
        this.tracked.forEach((node)=>root || (root = node.root));
        return root;
    }
    finalize() {
        if (this.updateError) {
            this.rejectReady(this.updateError);
            return;
        }
        const animations = new Set();
        this.tracked.forEach((node)=>{
            if (node.instance && node.currentAnimation) animations.add(node.currentAnimation);
        });
        this.notifyReady(new (0, _groupAnimationMjs.GroupAnimation)([
            ...animations
        ]));
    }
}
function parseAnimateLayoutArgs(scopeOrUpdateDom, updateDomOrOptions, options) {
    if (typeof scopeOrUpdateDom === "function") return {
        scope: document,
        updateDom: scopeOrUpdateDom,
        defaultOptions: updateDomOrOptions
    };
    const scope = scopeOrUpdateDom instanceof Document ? scopeOrUpdateDom : (0, _resolveElementsMjs.resolveElements)(scopeOrUpdateDom)[0] ?? document;
    return {
        scope,
        updateDom: updateDomOrOptions,
        defaultOptions: options
    };
}

},{"motion-utils":"2BS9B","../animation/GroupAnimation.mjs":"3phO0","../frameloop/microtask.mjs":"fREU6","../frameloop/sync-time.mjs":"c5O7T","../projection/node/HTMLProjectionNode.mjs":"c032s","../render/html/HTMLVisualElement.mjs":"hgbUy","../render/store.mjs":"mujCZ","../projection/utils/has-transform.mjs":"aDFUL","../utils/resolve-elements.mjs":"lqtyu","../frameloop/frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2khJi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelSync", ()=>cancelSync);
parcelHelpers.export(exports, "sync", ()=>sync);
var _orderMjs = require("./order.mjs");
var _frameMjs = require("./frame.mjs");
/**
 * @deprecated
 *
 * Import as `frame` instead.
 */ const sync = (0, _frameMjs.frame);
/**
 * @deprecated
 *
 * Use cancelFrame(callback) instead.
 */ const cancelSync = (0, _orderMjs.stepsOrder).reduce((acc, key)=>{
    acc[key] = (process)=>(0, _frameMjs.cancelFrame)(process);
    return acc;
}, {});

},{"./order.mjs":"EBPja","./frame.mjs":"3rwlg","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"ljyQP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SwitchLayoutGroupContext", ()=>SwitchLayoutGroupContext);
var _react = require("react");
"use client";
/**
 * Internal, exported only for usage in Framer
 */ const SwitchLayoutGroupContext = (0, _react.createContext)({});

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"bQVvo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isRefObject", ()=>isRefObject);
function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"gPeAb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "featureBundle", ()=>featureBundle);
var _animationsMjs = require("../../../motion/features/animations.mjs");
var _dragMjs = require("../../../motion/features/drag.mjs");
var _gesturesMjs = require("../../../motion/features/gestures.mjs");
var _layoutMjs = require("../../../motion/features/layout.mjs");
const featureBundle = {
    ...(0, _animationsMjs.animations),
    ...(0, _gesturesMjs.gestureAnimations),
    ...(0, _dragMjs.drag),
    ...(0, _layoutMjs.layout)
};

},{"../../../motion/features/animations.mjs":"34nUG","../../../motion/features/drag.mjs":"c2AQu","../../../motion/features/gestures.mjs":"7gPn7","../../../motion/features/layout.mjs":"7Djqs","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"34nUG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animations", ()=>animations);
var _indexMjs = require("./animation/index.mjs");
var _exitMjs = require("./animation/exit.mjs");
const animations = {
    animation: {
        Feature: (0, _indexMjs.AnimationFeature)
    },
    exit: {
        Feature: (0, _exitMjs.ExitAnimationFeature)
    }
};

},{"./animation/index.mjs":"6QDvY","./animation/exit.mjs":"cHgKM","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6QDvY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFeature", ()=>AnimationFeature);
var _motionDom = require("motion-dom");
class AnimationFeature extends (0, _motionDom.Feature) {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */ constructor(node){
        super(node);
        node.animationState || (node.animationState = (0, _motionDom.createAnimationState)(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if ((0, _motionDom.isAnimationControls)(animate)) this.unmountControls = animate.subscribe(this.node);
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */ mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
    }
    unmount() {
        this.node.animationState.reset();
        this.unmountControls?.();
    }
}

},{"motion-dom":[["createAnimationState","8h33l"],["Feature","ioMwy"],["isAnimationControls","6fKNU"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cHgKM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExitAnimationFeature", ()=>ExitAnimationFeature);
var _motionDom = require("motion-dom");
let id = 0;
class ExitAnimationFeature extends (0, _motionDom.Feature) {
    constructor(){
        super(...arguments);
        this.id = id++;
        this.isExitComplete = false;
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent, onExitComplete } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) return;
        if (isPresent && prevIsPresent === false) {
            /**
             * When re-entering, if the exit animation already completed
             * (element is at rest), reset to initial values so the enter
             * animation replays from the correct position.
             */ if (this.isExitComplete) {
                const { initial, custom } = this.node.getProps();
                if (typeof initial === "string" || typeof initial === "object" && initial !== null && !Array.isArray(initial)) {
                    const resolved = (0, _motionDom.resolveVariant)(this.node, initial, custom);
                    if (resolved) {
                        const { transition, transitionEnd, ...target } = resolved;
                        for(const key in target)this.node.getValue(key)?.jump(target[key]);
                    }
                }
                this.node.animationState.reset();
                this.node.animationState.animateChanges();
            } else this.node.animationState.setActive("exit", false);
            this.isExitComplete = false;
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) exitAnimation.then(()=>{
            this.isExitComplete = true;
            onExitComplete(this.id);
        });
    }
    mount() {
        const { register, onExitComplete } = this.node.presenceContext || {};
        if (onExitComplete) onExitComplete(this.id);
        if (register) this.unmount = register(this.id);
    }
    unmount() {}
}

},{"motion-dom":[["Feature","ioMwy"],["resolveVariant","S4pyf"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"c2AQu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag", ()=>drag);
var _indexMjs = require("../../gestures/drag/index.mjs");
var _indexMjs1 = require("../../gestures/pan/index.mjs");
var _measureLayoutMjs = require("./layout/MeasureLayout.mjs");
var _motionDom = require("motion-dom");
const drag = {
    pan: {
        Feature: (0, _indexMjs1.PanGesture)
    },
    drag: {
        Feature: (0, _indexMjs.DragGesture),
        ProjectionNode: (0, _motionDom.HTMLProjectionNode),
        MeasureLayout: (0, _measureLayoutMjs.MeasureLayout)
    }
};

},{"../../gestures/drag/index.mjs":"6AvKz","../../gestures/pan/index.mjs":"cj2YO","./layout/MeasureLayout.mjs":"icBIk","motion-dom":"c032s","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6AvKz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragGesture", ()=>DragGesture);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _visualElementDragControlsMjs = require("./VisualElementDragControls.mjs");
class DragGesture extends (0, _motionDom.Feature) {
    constructor(node){
        super(node);
        this.removeGroupControls = (0, _motionUtils.noop);
        this.removeListeners = (0, _motionUtils.noop);
        this.controls = new (0, _visualElementDragControlsMjs.VisualElementDragControls)(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
        this.removeListeners = this.controls.addListeners() || (0, _motionUtils.noop);
    }
    update() {
        const { dragControls } = this.node.getProps();
        const { dragControls: prevDragControls } = this.node.prevProps || {};
        if (dragControls !== prevDragControls) {
            this.removeGroupControls();
            if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
        }
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
        /**
         * In React 19, during list reorder reconciliation, components may
         * briefly unmount and remount while the drag is still active. If we're
         * actively dragging, we should NOT end the pan session - it will
         * continue tracking pointer events via its window-level listeners.
         *
         * The pan session will be properly cleaned up when:
         * 1. The drag ends naturally (pointerup/pointercancel)
         * 2. The component is truly removed from the DOM
         */ if (!this.controls.isDragging) this.controls.endPanSession();
    }
}

},{"motion-dom":"ioMwy","motion-utils":"7MDWX","./VisualElementDragControls.mjs":"lB3qJ","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"lB3qJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualElementDragControls", ()=>VisualElementDragControls);
parcelHelpers.export(exports, "elementDragControls", ()=>elementDragControls);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _addPointerEventMjs = require("../../events/add-pointer-event.mjs");
var _eventInfoMjs = require("../../events/event-info.mjs");
var _getContextWindowMjs = require("../../utils/get-context-window.mjs");
var _isRefObjectMjs = require("../../utils/is-ref-object.mjs");
var _panSessionMjs = require("../pan/PanSession.mjs");
var _constraintsMjs = require("./utils/constraints.mjs");
const elementDragControls = new WeakMap();
class VisualElementDragControls {
    constructor(visualElement){
        this.openDragLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = {
            x: 0,
            y: 0
        };
        /**
         * The permitted boundaries of travel, in pixels.
         */ this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */ this.elastic = (0, _motionDom.createBox)();
        /**
         * The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
         */ this.latestPointerEvent = null;
        /**
         * The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
         */ this.latestPanInfo = null;
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */ const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false) return;
        const onSessionStart = (event)=>{
            if (snapToCursor) this.snapToCursor((0, _eventInfoMjs.extractEventInfo)(event).point);
            this.stopAnimation();
        };
        const onStart = (event, info)=>{
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openDragLock) this.openDragLock();
                this.openDragLock = (0, _motionDom.setDragLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openDragLock) return;
            }
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin and pointer offset
             */ (0, _motionDom.eachAxis)((axis)=>{
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */ if ((0, _motionDom.percent).test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = (0, _motionDom.calcLength)(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) (0, _motionDom.frame).update(()=>onDragStart(event, info), false, true);
            (0, _motionDom.addValueToWillChange)(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info)=>{
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openDragLock) return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */ this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */ if (onDrag) (0, _motionDom.frame).update(()=>onDrag(event, info), false, true);
        };
        const onSessionEnd = (event, info)=>{
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            this.stop(event, info);
            this.latestPointerEvent = null;
            this.latestPanInfo = null;
        };
        const resumeAnimation = ()=>{
            const { dragSnapToOrigin: snap } = this.getProps();
            if (snap || this.constraints) this.startAnimation({
                x: 0,
                y: 0
            });
        };
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new (0, _panSessionMjs.PanSession)(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            distanceThreshold,
            contextWindow: (0, _getContextWindowMjs.getContextWindow)(this.visualElement),
            element: this.visualElement.current
        });
    }
    /**
     * @internal
     */ stop(event, panInfo) {
        const finalEvent = event || this.latestPointerEvent;
        const finalPanInfo = panInfo || this.latestPanInfo;
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging || !finalPanInfo || !finalEvent) return;
        const { velocity } = finalPanInfo;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) (0, _motionDom.frame).postRender(()=>onDragEnd(finalEvent, finalPanInfo));
    }
    /**
     * @internal
     */ cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) projection.isAnimationBlocked = false;
        this.endPanSession();
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    /**
     * Clean up the pan session without modifying other drag state.
     * This is used during unmount to ensure event listeners are removed
     * without affecting projection animations or drag locks.
     * @internal
     */ endPanSession() {
        this.panSession && this.panSession.end();
        this.panSession = undefined;
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) next = (0, _constraintsMjs.applyConstraints)(next, this.constraints[axis], this.elastic[axis]);
        axisValue.set(next);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && (0, _isRefObjectMjs.isRefObject)(dragConstraints)) {
            if (!this.constraints) this.constraints = this.resolveRefConstraints();
        } else if (dragConstraints && layout) this.constraints = (0, _constraintsMjs.calcRelativeConstraints)(layout.layoutBox, dragConstraints);
        else this.constraints = false;
        this.elastic = (0, _constraintsMjs.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative. This only applies to relative (non-ref)
         * constraints, as ref-based constraints from calcViewportConstraints are already in the
         * correct coordinate space for the motion value transform offset.
         */ if (prevConstraints !== this.constraints && !(0, _isRefObjectMjs.isRefObject)(dragConstraints) && layout && this.constraints && !this.hasMutatedConstraints) (0, _motionDom.eachAxis)((axis)=>{
            if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = (0, _constraintsMjs.rebaseAxisConstraints)(layout.layoutBox[axis], this.constraints[axis]);
        });
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !(0, _isRefObjectMjs.isRefObject)(constraints)) return false;
        const constraintsElement = constraints.current;
        (0, _motionUtils.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout) return false;
        /**
         * Refresh the root scroll offset so the constraint's viewport box
         * translates to correct page coordinates. The scroll captured at
         * drag mount can be stale if the document was scrolled afterwards —
         * e.g. via the browser restoring scroll on refresh, or an ancestor
         * layout effect running after this element's mount (#2829).
         *
         * Clear the cached scroll first so `updateScroll` bypasses its
         * per-animationId cache and re-reads the live value.
         */ if (projection.root) {
            projection.root.scroll = undefined;
            projection.root.updateScroll();
        }
        const constraintsBox = (0, _motionDom.measurePageBox)(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = (0, _constraintsMjs.calcViewportConstraints)(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */ if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints((0, _motionDom.convertBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) measuredConstraints = (0, _motionDom.convertBoundingBoxToBox)(userConstraints);
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = (0, _motionDom.eachAxis)((axis)=>{
            if (!shouldDrag(axis, drag, this.currentDirection)) return;
            let transition = constraints && constraints[axis] || {};
            if (dragSnapToOrigin === true || dragSnapToOrigin === axis) transition = {
                min: 0,
                max: 0
            };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */ const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        (0, _motionDom.addValueToWillChange)(this.visualElement, axis);
        return axisValue.start((0, _motionDom.animateMotionValue)(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
        (0, _motionDom.eachAxis)((axis)=>this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */ getAxisMotionValue(axis) {
        const dragKey = `_drag${axis.toUpperCase()}`;
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
    }
    snapToCursor(point) {
        (0, _motionDom.eachAxis)((axis)=>{
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection)) return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                /**
                 * The layout measurement includes the current transform value,
                 * so we need to add it back to get the correct snap position.
                 * This fixes an issue where elements with initial coordinates
                 * would snap to the wrong position on the first drag.
                 */ const current = axisValue.get() || 0;
                axisValue.set(point[axis] - (0, _motionDom.mixNumber)(min, max, 0.5) + current);
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */ scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!(0, _isRefObjectMjs.isRefObject)(dragConstraints) || !projection || !this.constraints) return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */ this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */ const boxProgress = {
            x: 0,
            y: 0
        };
        (0, _motionDom.eachAxis)((axis)=>{
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue && this.constraints !== false) {
                const latest = axisValue.get();
                boxProgress[axis] = (0, _constraintsMjs.calcOrigin)({
                    min: latest,
                    max: latest
                }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */ const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        /**
         * Reset constraints so resolveConstraints() will recalculate them
         * with the freshly measured layout rather than returning the cached value.
         */ this.constraints = false;
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */ (0, _motionDom.eachAxis)((axis)=>{
            if (!shouldDrag(axis, drag, null)) return;
            /**
             * Calculate a new transform based on the previous box progress
             */ const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set((0, _motionDom.mixNumber)(min, max, boxProgress[axis]));
        });
        /**
         * Flush the updated transform to the DOM synchronously to prevent
         * a visual flash at the element's CSS layout position (0,0) when
         * the transform was stripped for measurement.
         */ this.visualElement.render();
    }
    addListeners() {
        if (!this.visualElement.current) return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */ const stopPointerListener = (0, _addPointerEventMjs.addPointerEvent)(element, "pointerdown", (event)=>{
            const { drag, dragListener = true } = this.getProps();
            const target = event.target;
            /**
             * Only block drag if clicking on a text input child element
             * (input, textarea, select, contenteditable) where users might
             * want to select text or interact with the control.
             *
             * Buttons and links don't block drag since they don't have
             * click-and-move actions of their own.
             */ const isClickingTextInputChild = target !== element && (0, _motionDom.isElementTextInput)(target);
            if (drag && dragListener && !isClickingTextInputChild) this.start(event);
        });
        /**
         * If using ref-based constraints, observe both the draggable element
         * and the constraint container for size changes via ResizeObserver.
         * Setup is deferred because dragConstraints.current is null when
         * addListeners first runs (React hasn't committed the ref yet).
         */ let stopResizeObservers;
        const measureDragConstraints = ()=>{
            const { dragConstraints } = this.getProps();
            if ((0, _isRefObjectMjs.isRefObject)(dragConstraints) && dragConstraints.current) {
                this.constraints = this.resolveRefConstraints();
                if (!stopResizeObservers) stopResizeObservers = startResizeObservers(element, dragConstraints.current, ()=>this.scalePositionWithinConstraints());
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        (0, _motionDom.frame).read(measureDragConstraints);
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */ const stopResizeListener = (0, _motionDom.addDomEvent)(window, "resize", ()=>this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */ const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged })=>{
            if (this.isDragging && hasLayoutChanged) {
                (0, _motionDom.eachAxis)((axis)=>{
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue) return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        });
        return ()=>{
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
            stopResizeObservers && stopResizeObservers();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = (0, _constraintsMjs.defaultElastic), dragMomentum = true } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum
        };
    }
}
function skipFirstCall(callback) {
    let isFirst = true;
    return ()=>{
        if (isFirst) {
            isFirst = false;
            return;
        }
        callback();
    };
}
function startResizeObservers(element, constraintsElement, onResize) {
    const stopElement = (0, _motionDom.resize)(element, skipFirstCall(onResize));
    const stopContainer = (0, _motionDom.resize)(constraintsElement, skipFirstCall(onResize));
    return ()=>{
        stopElement();
        stopContainer();
    };
}
function shouldDrag(direction, drag, currentDirection) {
    return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */ function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) direction = "y";
    else if (Math.abs(offset.x) > lockThreshold) direction = "x";
    return direction;
}

},{"motion-dom":[["addDomEvent","9tNte"],["addValueToWillChange","5XxCw"],["animateMotionValue","jreNm"],["calcLength","dpJY8"],["convertBoundingBoxToBox","8hG8z"],["convertBoxToBoundingBox","8hG8z"],["createBox","4RI28"],["eachAxis","897Cg"],["frame","3rwlg"],["isElementTextInput","3XfQc"],["measurePageBox","6TKnr"],["mixNumber","eSNQQ"],["percent","JFyVd"],["resize","eQnMS"],["setDragLock","hkkB9"]],"motion-utils":"e5pKF","../../events/add-pointer-event.mjs":"2iEGL","../../events/event-info.mjs":"8iMhP","../../utils/get-context-window.mjs":"auzKB","../../utils/is-ref-object.mjs":"bQVvo","../pan/PanSession.mjs":"6oiOP","./utils/constraints.mjs":"1mOT9","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2iEGL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPointerEvent", ()=>addPointerEvent);
var _motionDom = require("motion-dom");
var _eventInfoMjs = require("./event-info.mjs");
function addPointerEvent(target, eventName, handler, options) {
    return (0, _motionDom.addDomEvent)(target, eventName, (0, _eventInfoMjs.addPointerInfo)(handler), options);
}

},{"motion-dom":"9tNte","./event-info.mjs":"8iMhP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"8iMhP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPointerInfo", ()=>addPointerInfo);
parcelHelpers.export(exports, "extractEventInfo", ()=>extractEventInfo);
var _motionDom = require("motion-dom");
function extractEventInfo(event) {
    return {
        point: {
            x: event.pageX,
            y: event.pageY
        }
    };
}
const addPointerInfo = (handler)=>(event)=>(0, _motionDom.isPrimaryPointer)(event) && handler(event, extractEventInfo(event));

},{"motion-dom":"9kgmE","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"auzKB":[function(require,module,exports,__globalThis) {
// Fixes https://github.com/motiondivision/motion/issues/2270
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContextWindow", ()=>getContextWindow);
const getContextWindow = ({ current })=>{
    return current ? current.ownerDocument.defaultView : null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"6oiOP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanSession", ()=>PanSession);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _addPointerEventMjs = require("../../events/add-pointer-event.mjs");
var _eventInfoMjs = require("../../events/event-info.mjs");
var _distanceMjs = require("../../utils/distance.mjs");
const overflowStyles = /*#__PURE__*/ new Set([
    "auto",
    "scroll"
]);
/**
 * @internal
 */ class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}){
        /**
         * @internal
         */ this.startEvent = null;
        /**
         * @internal
         */ this.lastMoveEvent = null;
        /**
         * @internal
         */ this.lastMoveEventInfo = null;
        /**
         * Raw (untransformed) event info, re-transformed each frame
         * so transformPagePoint sees the current parent matrix.
         * @internal
         */ this.lastRawMoveEventInfo = null;
        /**
         * @internal
         */ this.handlers = {};
        /**
         * @internal
         */ this.contextWindow = window;
        /**
         * Scroll positions of scrollable ancestors and window.
         * @internal
         */ this.scrollPositions = new Map();
        /**
         * Cleanup function for scroll listeners.
         * @internal
         */ this.removeScrollListeners = null;
        this.onElementScroll = (event)=>{
            this.handleScroll(event.target);
        };
        this.onWindowScroll = ()=>{
            this.handleScroll(window);
        };
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            // Re-transform raw point through current transformPagePoint so
            // animated parent transforms (e.g. rotation) are picked up each frame
            if (this.lastRawMoveEventInfo) this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursor.
            const isDistancePastThreshold = (0, _distanceMjs.distance2D)(info.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!isPanStarted && !isDistancePastThreshold) return;
            const { point } = info;
            const { timestamp } = (0, _motionDom.frameData);
            this.history.push({
                ...point,
                timestamp
            });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info)=>{
            this.lastMoveEvent = event;
            this.lastRawMoveEventInfo = info;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            (0, _motionDom.frame).update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info)=>{
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            // Resume animation if dragSnapToOrigin is set OR if no drag started (user just clicked)
            // This ensures constraint animations continue when interrupted by a click
            if (this.dragSnapToOrigin || !this.startEvent) resumeAnimation && resumeAnimation();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) onEnd(event, panInfo);
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!(0, _motionDom.isPrimaryPointer)(event)) return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.distanceThreshold = distanceThreshold;
        this.contextWindow = contextWindow || window;
        const info = (0, _eventInfoMjs.extractEventInfo)(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = (0, _motionDom.frameData);
        this.history = [
            {
                ...point,
                timestamp
            }
        ];
        const { onSessionStart } = handlers;
        onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
        // Listen in the capture phase so a descendant calling
        // stopPropagation() (e.g. in its own pointerup handler) can't
        // prevent the gesture from ending. See #2794.
        const eventOptions = {
            passive: true,
            capture: true
        };
        this.removeListeners = (0, _motionUtils.pipe)((0, _addPointerEventMjs.addPointerEvent)(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), (0, _addPointerEventMjs.addPointerEvent)(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), (0, _addPointerEventMjs.addPointerEvent)(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
        // Start scroll tracking if element provided
        if (element) this.startScrollTracking(element);
    }
    /**
     * Start tracking scroll on ancestors and window.
     */ startScrollTracking(element) {
        // Store initial scroll positions for scrollable ancestors
        let current = element.parentElement;
        while(current){
            const style = getComputedStyle(current);
            if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) this.scrollPositions.set(current, {
                x: current.scrollLeft,
                y: current.scrollTop
            });
            current = current.parentElement;
        }
        // Track window scroll
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        });
        // Capture listener catches element scroll events as they bubble
        window.addEventListener("scroll", this.onElementScroll, {
            capture: true
        });
        // Direct window scroll listener (window scroll doesn't bubble)
        window.addEventListener("scroll", this.onWindowScroll);
        this.removeScrollListeners = ()=>{
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: true
            });
            window.removeEventListener("scroll", this.onWindowScroll);
        };
    }
    /**
     * Handle scroll compensation during drag.
     *
     * For element scroll: adjusts history origin since pageX/pageY doesn't change.
     * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
     */ handleScroll(target) {
        const initial = this.scrollPositions.get(target);
        if (!initial) return;
        const isWindow = target === window;
        const current = isWindow ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: target.scrollLeft,
            y: target.scrollTop
        };
        const delta = {
            x: current.x - initial.x,
            y: current.y - initial.y
        };
        if (delta.x === 0 && delta.y === 0) return;
        if (isWindow) // Window scroll: pageX/pageY changes, so update lastMoveEventInfo
        {
            if (this.lastMoveEventInfo) {
                this.lastMoveEventInfo.point.x += delta.x;
                this.lastMoveEventInfo.point.y += delta.y;
            }
        } else // Element scroll: pageX/pageY unchanged, so adjust history origin
        if (this.history.length > 0) {
            this.history[0].x -= delta.x;
            this.history[0].y -= delta.y;
        }
        this.scrollPositions.set(target, current);
        (0, _motionDom.frame).update(this.updatePoint, true);
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        this.removeScrollListeners && this.removeScrollListeners();
        this.scrollPositions.clear();
        (0, _motionDom.cancelFrame)(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? {
        point: transformPagePoint(info.point)
    } : info;
}
function subtractPoint(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1)
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) return {
        x: 0,
        y: 0
    };
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while(i >= 0){
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp > (0, _motionUtils.secondsToMilliseconds)(timeDelta)) break;
        i--;
    }
    if (!timestampedPoint) return {
        x: 0,
        y: 0
    };
    /**
     * If the selected point is the pointer-down origin (history[0]),
     * there are better movement points available, and the time gap
     * is suspiciously large (>2x timeDelta), use the next point instead.
     * This prevents stale pointer-down points from diluting velocity
     * in hold-then-flick gestures.
     */ if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > (0, _motionUtils.secondsToMilliseconds)(timeDelta) * 2) timestampedPoint = history[1];
    const time = (0, _motionUtils.millisecondsToSeconds)(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) return {
        x: 0,
        y: 0
    };
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time
    };
    if (currentVelocity.x === Infinity) currentVelocity.x = 0;
    if (currentVelocity.y === Infinity) currentVelocity.y = 0;
    return currentVelocity;
}

},{"motion-dom":[["cancelFrame","3rwlg"],["frame","3rwlg"],["frameData","3rwlg"],["isPrimaryPointer","9kgmE"]],"motion-utils":[["millisecondsToSeconds","k1haA"],["secondsToMilliseconds","k1haA"],["pipe","cCPPw"]],"../../events/add-pointer-event.mjs":"2iEGL","../../events/event-info.mjs":"8iMhP","../../utils/distance.mjs":"7yx8i","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7yx8i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "distance2D", ()=>distance2D);
const distance = (a, b)=>Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"1mOT9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyConstraints", ()=>applyConstraints);
parcelHelpers.export(exports, "calcOrigin", ()=>calcOrigin);
parcelHelpers.export(exports, "calcRelativeAxisConstraints", ()=>calcRelativeAxisConstraints);
parcelHelpers.export(exports, "calcRelativeConstraints", ()=>calcRelativeConstraints);
parcelHelpers.export(exports, "calcViewportAxisConstraints", ()=>calcViewportAxisConstraints);
parcelHelpers.export(exports, "calcViewportConstraints", ()=>calcViewportConstraints);
parcelHelpers.export(exports, "defaultElastic", ()=>defaultElastic);
parcelHelpers.export(exports, "rebaseAxisConstraints", ()=>rebaseAxisConstraints);
parcelHelpers.export(exports, "resolveAxisElastic", ()=>resolveAxisElastic);
parcelHelpers.export(exports, "resolveDragElastic", ()=>resolveDragElastic);
parcelHelpers.export(exports, "resolvePointElastic", ()=>resolvePointElastic);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */ function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) // If we have a min point defined, and this is outside of that, constrain
    point = elastic ? (0, _motionDom.mixNumber)(min, point, elastic.min) : Math.max(point, min);
    else if (max !== undefined && point > max) // If we have a max point defined, and this is outside of that, constrain
    point = elastic ? (0, _motionDom.mixNumber)(max, point, elastic.max) : Math.min(point, max);
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */ function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */ function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */ function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min, max] = [
        max,
        min
    ];
    return {
        min,
        max
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */ function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */ function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = (0, _motionDom.calcLength)(source);
    const targetLength = (0, _motionDom.calcLength)(target);
    if (targetLength > sourceLength) origin = (0, _motionUtils.progress)(target.min, target.max - sourceLength, source.min);
    else if (sourceLength > targetLength) origin = (0, _motionUtils.progress)(source.min, source.max - targetLength, target.min);
    return (0, _motionUtils.clamp)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */ function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) relativeConstraints.min = constraints.min - layout.min;
    if (constraints.max !== undefined) relativeConstraints.max = constraints.max - layout.min;
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */ function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) dragElastic = 0;
    else if (dragElastic === true) dragElastic = defaultElastic;
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel)
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

},{"motion-dom":[["calcLength","dpJY8"],["mixNumber","eSNQQ"]],"motion-utils":[["clamp","2BS9B"],["progress","3Q4mc"]],"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"cj2YO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanGesture", ()=>PanGesture);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
var _addPointerEventMjs = require("../../events/add-pointer-event.mjs");
var _getContextWindowMjs = require("../../utils/get-context-window.mjs");
var _panSessionMjs = require("./PanSession.mjs");
const asyncHandler = (handler)=>(event, info)=>{
        if (handler) (0, _motionDom.frame).update(()=>handler(event, info), false, true);
    };
class PanGesture extends (0, _motionDom.Feature) {
    constructor(){
        super(...arguments);
        this.removePointerDownListener = (0, _motionUtils.noop);
    }
    onPointerDown(pointerDownEvent) {
        this.session = new (0, _panSessionMjs.PanSession)(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: (0, _getContextWindowMjs.getContextWindow)(this.node)
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: asyncHandler(onPan),
            onEnd: (event, info)=>{
                delete this.session;
                if (onPanEnd) (0, _motionDom.frame).postRender(()=>onPanEnd(event, info));
            }
        };
    }
    mount() {
        this.removePointerDownListener = (0, _addPointerEventMjs.addPointerEvent)(this.node.current, "pointerdown", (event)=>this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}

},{"motion-dom":[["Feature","ioMwy"],["frame","3rwlg"]],"motion-utils":"7MDWX","../../events/add-pointer-event.mjs":"2iEGL","../../utils/get-context-window.mjs":"auzKB","./PanSession.mjs":"6oiOP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"icBIk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MeasureLayout", ()=>MeasureLayout);
var _jsxRuntime = require("react/jsx-runtime");
var _motionDom = require("motion-dom");
var _react = require("react");
var _usePresenceMjs = require("../../../components/AnimatePresence/use-presence.mjs");
var _layoutGroupContextMjs = require("../../../context/LayoutGroupContext.mjs");
var _switchLayoutGroupContextMjs = require("../../../context/SwitchLayoutGroupContext.mjs");
"use client";
/**
 * Track whether we've taken any snapshots yet. If not,
 * we can safely skip notification of didUpdate.
 *
 * Difficult to capture in a test but to prevent flickering
 * we must set this to true either on update or unmount.
 * Running `next-env/layout-id` in Safari will show this behaviour if broken.
 */ let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends (0, _react.Component) {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */ componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        if (projection) {
            if (layoutGroup.group) layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
            if (hasTakenAnySnapshot) projection.root.didUpdate();
            projection.addEventListener("animationComplete", ()=>{
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: ()=>this.safeToRemove()
            });
        }
        (0, _motionDom.globalProjectionState).hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (!projection) return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */ projection.isPresent = isPresent;
        if (prevProps.layoutDependency !== layoutDependency) projection.setOptions({
            ...projection.options,
            layoutDependency
        });
        hasTakenAnySnapshot = true;
        if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined || prevProps.isPresent !== isPresent) projection.willUpdate();
        else this.safeToRemove();
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) projection.promote();
            else if (!projection.relegate()) /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */ (0, _motionDom.frame).postRender(()=>{
                const stack = projection.getStack();
                if (!stack || !stack.members.length) this.safeToRemove();
            });
        }
        return null;
    }
    componentDidUpdate() {
        const { visualElement, layoutAnchor } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.options.layoutAnchor = layoutAnchor;
            projection.root.didUpdate();
            (0, _motionDom.microtask).postRender(()=>{
                if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
        const { projection } = visualElement;
        hasTakenAnySnapshot = true;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0, _usePresenceMjs.usePresence)();
    const layoutGroup = (0, _react.useContext)((0, _layoutGroupContextMjs.LayoutGroupContext));
    return (0, _jsxRuntime.jsx)(MeasureLayoutWithContext, {
        ...props,
        layoutGroup: layoutGroup,
        switchLayoutGroup: (0, _react.useContext)((0, _switchLayoutGroupContextMjs.SwitchLayoutGroupContext)),
        isPresent: isPresent,
        safeToRemove: safeToRemove
    });
}

},{"react/jsx-runtime":"b2Fbn","motion-dom":[["frame","3rwlg"],["globalProjectionState","jATSc"],["microtask","fREU6"]],"react":"gOP0N","../../../components/AnimatePresence/use-presence.mjs":"je6VE","../../../context/LayoutGroupContext.mjs":"6uliG","../../../context/SwitchLayoutGroupContext.mjs":"ljyQP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7gPn7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gestureAnimations", ()=>gestureAnimations);
var _hoverMjs = require("../../gestures/hover.mjs");
var _focusMjs = require("../../gestures/focus.mjs");
var _pressMjs = require("../../gestures/press.mjs");
var _indexMjs = require("./viewport/index.mjs");
const gestureAnimations = {
    inView: {
        Feature: (0, _indexMjs.InViewFeature)
    },
    tap: {
        Feature: (0, _pressMjs.PressGesture)
    },
    focus: {
        Feature: (0, _focusMjs.FocusGesture)
    },
    hover: {
        Feature: (0, _hoverMjs.HoverGesture)
    }
};

},{"../../gestures/hover.mjs":"5fMYN","../../gestures/focus.mjs":"j84iV","../../gestures/press.mjs":"kpxP6","./viewport/index.mjs":"7JNth","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"5fMYN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HoverGesture", ()=>HoverGesture);
var _motionDom = require("motion-dom");
var _eventInfoMjs = require("../events/event-info.mjs");
function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) (0, _motionDom.frame).postRender(()=>callback(event, (0, _eventInfoMjs.extractEventInfo)(event)));
}
class HoverGesture extends (0, _motionDom.Feature) {
    mount() {
        const { current } = this.node;
        if (!current) return;
        this.unmount = (0, _motionDom.hover)(current, (_element, startEvent)=>{
            handleHoverEvent(this.node, startEvent, "Start");
            return (endEvent)=>handleHoverEvent(this.node, endEvent, "End");
        });
    }
    unmount() {}
}

},{"motion-dom":[["Feature","ioMwy"],["frame","3rwlg"],["hover","6Wgah"]],"../events/event-info.mjs":"8iMhP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j84iV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FocusGesture", ()=>FocusGesture);
var _motionDom = require("motion-dom");
var _motionUtils = require("motion-utils");
class FocusGesture extends (0, _motionDom.Feature) {
    constructor(){
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */ try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        } catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState) return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState) return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = (0, _motionUtils.pipe)((0, _motionDom.addDomEvent)(this.node.current, "focus", ()=>this.onFocus()), (0, _motionDom.addDomEvent)(this.node.current, "blur", ()=>this.onBlur()));
    }
    unmount() {}
}

},{"motion-dom":[["addDomEvent","9tNte"],["Feature","ioMwy"]],"motion-utils":"cCPPw","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"kpxP6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PressGesture", ()=>PressGesture);
var _motionDom = require("motion-dom");
var _eventInfoMjs = require("../events/event-info.mjs");
function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) return;
    if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) (0, _motionDom.frame).postRender(()=>callback(event, (0, _eventInfoMjs.extractEventInfo)(event)));
}
class PressGesture extends (0, _motionDom.Feature) {
    mount() {
        const { current } = this.node;
        if (!current) return;
        const { globalTapTarget, propagate } = this.node.props;
        this.unmount = (0, _motionDom.press)(current, (_element, startEvent)=>{
            handlePressEvent(this.node, startEvent, "Start");
            return (endEvent, { success })=>handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
        }, {
            useGlobalTarget: globalTapTarget,
            stopPropagation: propagate?.tap === false
        });
    }
    unmount() {}
}

},{"motion-dom":[["Feature","ioMwy"],["frame","3rwlg"],["press","gbIuG"]],"../events/event-info.mjs":"8iMhP","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7JNth":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InViewFeature", ()=>InViewFeature);
var _motionDom = require("motion-dom");
var _observersMjs = require("./observers.mjs");
const thresholdNames = {
    some: 0,
    all: 1
};
class InViewFeature extends (0, _motionDom.Feature) {
    constructor(){
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.stopObserver?.();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount]
        };
        const onIntersectionUpdate = (entry)=>{
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */ if (this.isInView === isIntersecting) return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */ if (once && !isIntersecting && this.hasEnteredView) return;
            else if (isIntersecting) this.hasEnteredView = true;
            if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */ const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        this.stopObserver = (0, _observersMjs.observeIntersection)(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined") return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = [
            "amount",
            "margin",
            "root"
        ].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) this.startObserver();
    }
    unmount() {
        this.stopObserver?.();
        this.hasEnteredView = false;
        this.isInView = false;
    }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name)=>viewport[name] !== prevViewport[name];
}

},{"motion-dom":"ioMwy","./observers.mjs":"9MnqU","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"9MnqU":[function(require,module,exports,__globalThis) {
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeIntersection", ()=>observeIntersection);
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */ const observers = new WeakMap();
const fireObserverCallback = (entry)=>{
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries)=>{
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */ if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */ if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
        root,
        ...options
    });
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return ()=>{
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"7Djqs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "layout", ()=>layout);
var _motionDom = require("motion-dom");
var _measureLayoutMjs = require("./layout/MeasureLayout.mjs");
const layout = {
    layout: {
        ProjectionNode: (0, _motionDom.HTMLProjectionNode),
        MeasureLayout: (0, _measureLayoutMjs.MeasureLayout)
    }
};

},{"motion-dom":"c032s","./layout/MeasureLayout.mjs":"icBIk","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"2Ow3s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMotionTemplate", ()=>useMotionTemplate);
var _motionDom = require("motion-dom");
var _useCombineValuesMjs = require("./use-combine-values.mjs");
"use client";
/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */ function useMotionTemplate(fragments, ...values) {
    /**
     * Create a function that will build a string from the latest motion values.
     */ const numFragments = fragments.length;
    function buildValue() {
        let output = ``;
        for(let i = 0; i < numFragments; i++){
            output += fragments[i];
            const value = values[i];
            if (value) output += (0, _motionDom.isMotionValue)(value) ? value.get() : value;
        }
        return output;
    }
    return (0, _useCombineValuesMjs.useCombineMotionValues)(values.filter((0, _motionDom.isMotionValue)), buildValue);
}

},{"motion-dom":"75Nnh","./use-combine-values.mjs":"j54h2","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"j54h2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCombineMotionValues", ()=>useCombineMotionValues);
var _motionDom = require("motion-dom");
var _useIsomorphicEffectMjs = require("../utils/use-isomorphic-effect.mjs");
var _useMotionValueMjs = require("./use-motion-value.mjs");
"use client";
function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */ const value = (0, _useMotionValueMjs.useMotionValue)(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */ const updateValue = ()=>value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */ updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */ (0, _useIsomorphicEffectMjs.useIsomorphicLayoutEffect)(()=>{
        const scheduleUpdate = ()=>(0, _motionDom.frame).preRender(updateValue, false, true);
        const subscriptions = values.map((v)=>v.on("change", scheduleUpdate));
        return ()=>{
            subscriptions.forEach((unsubscribe)=>unsubscribe());
            (0, _motionDom.cancelFrame)(updateValue);
        };
    });
    return value;
}

},{"motion-dom":"3rwlg","../utils/use-isomorphic-effect.mjs":"CyVnr","./use-motion-value.mjs":"dagTW","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"dagTW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMotionValue", ()=>useMotionValue);
var _motionDom = require("motion-dom");
var _react = require("react");
var _motionConfigContextMjs = require("../context/MotionConfigContext.mjs");
var _useConstantMjs = require("../utils/use-constant.mjs");
"use client";
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, _useConstantMjs.useConstant)(()=>(0, _motionDom.motionValue)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, _react.useContext)((0, _motionConfigContextMjs.MotionConfigContext));
    if (isStatic) {
        const [, setLatest] = (0, _react.useState)(initial);
        (0, _react.useEffect)(()=>value.on("change", setLatest), []);
    }
    return value;
}

},{"motion-dom":"c1jKT","react":"gOP0N","../context/MotionConfigContext.mjs":"5ZNBi","../utils/use-constant.mjs":"bFn8i","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}],"etDnc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMotionValueEvent", ()=>useMotionValueEvent);
var _react = require("react");
"use client";
function useMotionValueEvent(value, event, callback) {
    /**
     * useInsertionEffect will create subscriptions before any other
     * effects will run. Effects run upwards through the tree so it
     * can be that binding a useLayoutEffect higher up the tree can
     * miss changes from lower down the tree.
     */ (0, _react.useInsertionEffect)(()=>value.on(event, callback), [
        value,
        event,
        callback
    ]);
}

},{"react":"gOP0N","@parcel/transformer-js/src/esmodule-helpers.js":"hDUPi"}]},[], null, "parcelRequire037a", {})

