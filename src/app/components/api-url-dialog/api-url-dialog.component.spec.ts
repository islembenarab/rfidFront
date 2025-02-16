import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUrlDialogComponent } from './api-url-dialog.component';

describe('ApiUrlDialogComponent', () => {
  let component: ApiUrlDialogComponent;
  let fixture: ComponentFixture<ApiUrlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUrlDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUrlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
