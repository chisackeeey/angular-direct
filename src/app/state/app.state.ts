import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { FlagState } from './flag/flag.state';
import { flagReducer } from './flag/flag.reducers';

export interface State {
  flag: FlagState;
}

export const reducers: ActionReducerMap<State> = {
  flag: flagReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
