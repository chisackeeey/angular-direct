import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { QiitaApiService } from '../api/qiita-api.service';
import * as QiitaActions from './qiita.actions';

@Injectable({ providedIn: 'root' })
export class qiitaEffects {
  constructor(private actions$: Actions, private api: QiitaApiService) {}

  getItem = createEffect(() =>
    this.actions$.pipe(
      ofType(QiitaActions.getItem),
      switchMap(
        () =>
          this.api.getItem().pipe(
            map((result) => {
              return QiitaActions.setResult({ result: result.length });
            })
          ) // 通信が成功したらリロードフラグを1に設定する
      )
    )
  );
}
