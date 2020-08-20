import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, BeforeunloadGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
  },
  {
    path: 'qiita',
    loadChildren: () =>
      import('./qiita/qiita.module').then((m) => m.QiitaModule),
    canDeactivate: [BeforeunloadGuard],
  },
  {
    path: 'end',
    loadChildren: () => import('./end/end.module').then((m) => m.EndModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
