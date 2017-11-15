import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTradingComponent } from './history-trading.component';

describe('HistoryTradingComponent', () => {
  let component: HistoryTradingComponent;
  let fixture: ComponentFixture<HistoryTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
