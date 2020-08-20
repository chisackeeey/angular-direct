import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QiitaComponent } from './qiita.component';

const routes: Routes = [{ path: '', component: QiitaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QiitaRoutingModule {}
