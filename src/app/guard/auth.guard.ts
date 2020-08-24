import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { FlagService } from '../state/flag/flag.service';

@Injectable({
  providedIn: 'root',
})
export class BeforeunloadGuard implements CanDeactivate<any> {
  browserBackFlag: number;

  constructor(private service: FlagService, private router: Router) {
    this.browserBackFlag = 0;
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.service
      .getBrowserBackFlag()
      .pipe(first())
      .subscribe((result: number) => {
        this.browserBackFlag = result;
      });
    console.log(this.browserBackFlag);
    if (this.browserBackFlag === 1) {
      // ブラウザバックフラグが1の場合にエラー画面に飛ばす
      this.router.navigate(['/error']);
      this.service.browserBackUndo(); // ここでブラウザバックフラグ0にしないと無限ループする
      sessionStorage.setItem('url', '/top');
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  reloadFlag: number;

  constructor(private service: FlagService, private router: Router) {
    this.reloadFlag = 0;
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.service.browserBackUndo(); // ブラウザバックフラグを0に設定する
    this.service
      .getReloadFlag()
      .pipe(first())
      .subscribe((result: number) => {
        this.reloadFlag = result;
      });
    console.log(this.reloadFlag);
    if (this.reloadFlag === 0) {
      // リロードフラグが0の場合にエラー画面に飛ばす
      this.router.navigate(['/error']);
      sessionStorage.setItem('url', '/top');
    }

    return true;
  }
}
