import { createAction, props } from '@ngrx/store';

export const getItem = createAction('[Qiita]getItem');

export const setResult = createAction(
  '[Qiita]Set Result',
  props<{ result: string }>()
);
