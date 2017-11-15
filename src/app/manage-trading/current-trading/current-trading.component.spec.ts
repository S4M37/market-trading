import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTradingComponent } from './current-trading.component';

describe('CurrentTradingComponent', () => {
  let component: CurrentTradingComponent;
  let fixture: ComponentFixture<CurrentTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
