import { Component, OnInit } from '@angular/core';
import { FlagService } from '../state/flag/flag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor(private router: Router, private service: FlagService) {}

  gotoTop() {
    const url = sessionStorage.getItem('url');
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.service.reset();
  }
}
