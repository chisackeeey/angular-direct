import { createReducer, on, Action } from '@ngrx/store';
import { FlagState, initialFlagState } from './flag.state';
import * as AppActions from './flag.actions';

export const flagReducer = createReducer(
  initialFlagState,
  on(AppActions.reloadDo, (state) => ({ ...state, reloadFlag: 1 })),
  on(AppActions.reloadUndo, (state) => ({ ...state, reloadFlag: 0 })),
  on(AppActions.browserBackDo, (state) => ({
    ...state,
    browserBackFlag: 1,
  })),
  on(AppActions.browserBackUndo, (state) => ({
    ...state,
    browserBackFlag: 0,
  })),
  on(AppActions.reset, (state) => ({
    ...state,
    reloadFlag: 0,
    browserBackFlag: 0,
  }))
);

export function reducer(state: FlagState, action: Action) {
  return flagReducer(state, action);
}
