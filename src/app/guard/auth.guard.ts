import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { FlagService } from '../state/flag/flag.service';

export interface OnBeforeunload {
  // shouldConfirmOnBeforeunload: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BeforeunloadGuard implements CanDeactivate<OnBeforeunload> {
  browserBackFlag: number;

  constructor(
    private service: FlagService,
    private router: Router,
    private location: Location
  ) {
    this.browserBackFlag = 0;
  }

  canDeactivate(
    component: OnBeforeunload,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
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
      this.router.navigate(['/error']);
      return false;
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
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
    if (this.reloadFlag === 0) {
      // リロードフラグが0の場合にエラー画面に飛ばす
      this.router.navigate(['/error']);
      return false;
    }

    return true;
  }
}
