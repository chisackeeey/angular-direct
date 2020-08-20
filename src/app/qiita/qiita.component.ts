import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { QiitaService } from './service/qiita.service';
import { FlagService } from '../state/flag/flag.service';
import { OnBeforeunload } from '../guard/auth.guard';

@Component({
  selector: 'app-qiita',
  templateUrl: './qiita.component.html',
  styleUrls: ['./qiita.component.css'],
})
export class QiitaComponent implements OnBeforeunload {
  result$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private service: QiitaService, private flagService: FlagService) {
    this.service.getItem();
    this.result$ = this.service.getResult();
    this.loading$ = this.service.getLoading();
  }
}
