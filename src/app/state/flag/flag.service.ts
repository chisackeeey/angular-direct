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

  reload() {
    this.store.dispatch(FlagActions.reload());
  }

  browserBack() {
    this.store.dispatch(FlagActions.browserBack());
  }

  reset() {
    this.store.dispatch(FlagActions.reset());
  }
}
