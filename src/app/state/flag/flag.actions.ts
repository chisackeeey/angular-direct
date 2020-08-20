import { createAction } from '@ngrx/store';

export const reloadDo = createAction('[Flag]Reload Do');

export const reloadUndo = createAction('[Flag]Reload Undo');

export const browserBackDo = createAction('[Flag]Browser Back Do');

export const browserBackUndo = createAction('[Flag]Browser Back Undo');

export const reset = createAction('[Flag]Reset');
