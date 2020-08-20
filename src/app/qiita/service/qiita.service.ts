import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as QiitaActions from '../state/qiita.actions';
import { selectResult, selectLoading } from '../state/qiita.state';

@Injectable({
  providedIn: 'root',
})
export class QiitaService {
  constructor(private store: Store<[]>) {}

  getResult() {
    return this.store.select(selectResult);
  }

  getLoading() {
    return this.store.select(selectLoading);
  }

  getItem() {
    this.store.dispatch(QiitaActions.getItem());
  }
}
