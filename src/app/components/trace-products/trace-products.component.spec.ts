import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceProductsComponent } from './trace-products.component';

describe('TraceProductsComponent', () => {
  let component: TraceProductsComponent;
  let fixture: ComponentFixture<TraceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraceProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
