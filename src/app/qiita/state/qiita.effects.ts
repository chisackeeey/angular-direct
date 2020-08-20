import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { QiitaApiService } from '../api/qiita-api.service';
import * as QiitaActions from './qiita.actions';

import * as FlagActions from '../../state/flag/flag.actions';

@Injectable({ providedIn: 'root' })
export class qiitaEffects {
  constructor(private actions$: Actions, private api: QiitaApiService) {}

  getItem = createEffect(() =>
    this.actions$.pipe(
      ofType(QiitaActions.getItem),
      switchMap(() => this.api.getItem().pipe(map(() => FlagActions.reload())))
    )
  );
}
