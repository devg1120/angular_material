import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickerFormsExampleComponent } from './date-range-picker-forms-example.component';

describe('DateRangePickerFormsExampleComponent', () => {
  let component: DateRangePickerFormsExampleComponent;
  let fixture: ComponentFixture<DateRangePickerFormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePickerFormsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePickerFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
