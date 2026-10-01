/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rsp-rules/use-layout-effect-rule
import React, {useId, useSyncExternalStore} from 'preact/compat';
import type {JSX, ReactNode} from '@react-types/shared/preact';

export interface SSRProviderProps {
  children: ReactNode;
}
/** Preact 11 generates hydration-safe ids without a provider. Retained for API compatibility. */
export function SSRProvider(props: SSRProviderProps): JSX.Element {
  return <>{props.children}</>;
}
/** @private */
export function useSSRSafeId(defaultId?: string): string {
  let id = useId();
  return defaultId || `react-aria-${id}`;
}
const subscribe = () => () => {};
const getSnapshot = () => false;
const getServerSnapshot = () => true;
/** Returns true during server rendering and the initial hydration render. */
export function useIsSSR(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
