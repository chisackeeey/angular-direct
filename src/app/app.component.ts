import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { FlagService } from './state/flag/flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(location: PlatformLocation, private service: FlagService) {
    location.onPopState(() => {
      this.service.browserBackDo();
    });
  }
}
