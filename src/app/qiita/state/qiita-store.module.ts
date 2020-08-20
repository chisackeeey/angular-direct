import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { qiitaFeatureName } from './qiita.state';
import { qiitaReducer } from './qiita.reducer';
import { qiitaEffects } from './qiita.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(qiitaFeatureName, qiitaReducer),
    EffectsModule.forFeature([qiitaEffects]),
  ],
})
export class QiitaStoreModule {}
