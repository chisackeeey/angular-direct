import { createReducer, on, Action } from '@ngrx/store';
import { QiitaState, initialState } from './qiita.state';
import * as QiitaActions from './qiita.actions';

export const qiitaReducer = createReducer(
  initialState,
  on(QiitaActions.getItem, (state) => {
    return { ...state, loading: true };
  }),
  on(QiitaActions.setResult, (state, { result }) => {
    return { ...state, loading: false, result };
  })
);

export function reducer(state: QiitaState, action: Action) {
  return qiitaReducer(state, action);
}
