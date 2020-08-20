import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QiitaRoutingModule } from './qiita-routing.module';
import { QiitaComponent } from './qiita.component';
import { QiitaStoreModule } from './state/qiita-store.module';

@NgModule({
  declarations: [QiitaComponent],
  imports: [CommonModule, QiitaRoutingModule, QiitaStoreModule],
})
export class QiitaModule {}
