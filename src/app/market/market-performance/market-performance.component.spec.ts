import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPerformanceComponent } from './market-performance.component';

describe('MarketPerformanceComponent', () => {
  let component: MarketPerformanceComponent;
  let fixture: ComponentFixture<MarketPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
