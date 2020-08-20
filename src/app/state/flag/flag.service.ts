import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as FlagActions from './flag.actions';
import { selectReloadFlag, selectBrowserBackFlag } from './flag.state';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  constructor(private store: Store<[]>) {}

  getReloadFlag() {
    return this.store.select(selectReloadFlag);
  }

  getBrowserBackFlag() {
    return this.store.select(selectBrowserBackFlag);
  }

  reloadDo() {
    this.store.dispatch(FlagActions.reloadDo());
  }

  reloadUndo() {
    this.store.dispatch(FlagActions.reloadUndo());
  }

  browserBackDo() {
    this.store.dispatch(FlagActions.browserBackDo());
  }

  browserBackUndo() {
    this.store.dispatch(FlagActions.browserBackUndo());
  }

  reset() {
    this.store.dispatch(FlagActions.reset());
  }
}
