import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiitaComponent } from './qiita.component';

describe('QiitaComponent', () => {
  let component: QiitaComponent;
  let fixture: ComponentFixture<QiitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QiitaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
