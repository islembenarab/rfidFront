import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearApiUrlComponent } from './clear-api-url.component';

describe('ClearApiUrlComponent', () => {
  let component: ClearApiUrlComponent;
  let fixture: ComponentFixture<ClearApiUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearApiUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearApiUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
