import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QiitaService } from './service/qiita.service';
import { FlagService } from '../state/flag/flag.service';

@Component({
  selector: 'app-qiita',
  templateUrl: './qiita.component.html',
  styleUrls: ['./qiita.component.css'],
})
export class QiitaComponent implements OnInit {
  result$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(private service: QiitaService, private flagService: FlagService) {
    this.service.getItem();
    this.result$ = this.service.getResult();
    this.loading$ = this.service.getLoading();
    this.flagService.reloadDo();
  }

  ngOnInit(): void {}
}
