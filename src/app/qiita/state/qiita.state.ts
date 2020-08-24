import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface QiitaState {
  result: number;
  loading: boolean;
}

export const initialState: QiitaState = {
  result: 0,
  loading: false,
};

export const qiitaFeatureName = 'qiita';

export const selectQiitaFeature = createFeatureSelector<QiitaState>(
  qiitaFeatureName
);

export const selectResult = createSelector(
  selectQiitaFeature,
  (state) => state.result
);

export const selectLoading = createSelector(
  selectQiitaFeature,
  (state) => state.loading
);
