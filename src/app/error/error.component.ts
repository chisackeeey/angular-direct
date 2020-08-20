import { Component, OnInit } from '@angular/core';
import { FlagService } from '../state/flag/flag.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor(private service: FlagService) {}

  ngOnInit(): void {
    this.service.reset();
  }
}
