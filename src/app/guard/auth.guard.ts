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
    this.service
      .getReloadFlag()
      .pipe(first())
      .subscribe((result: number) => {
        this.reloadFlag = result;
      });
    console.log('aaa' + this.reloadFlag);

    if (this.reloadFlag === 0) {
      this.router.navigate(['/error']);
      return false;
    }

    return true;
  }
}
