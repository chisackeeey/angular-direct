import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface FlagState {
  reloadFlag: number;
  browserBackFlag: number;
}

export const initialFlagState: FlagState = {
  reloadFlag: 0,
  browserBackFlag: 0,
};

export const counterFeatureName = 'flag';

export const selectCounterFeature = createFeatureSelector<FlagState>(
  counterFeatureName
);
export const selectReloadFlag = createSelector(
  selectCounterFeature,
  (state) => state.reloadFlag
);

export const selectBrowserBackFlag = createSelector(
  selectCounterFeature,
  (state) => state.browserBackFlag
);
