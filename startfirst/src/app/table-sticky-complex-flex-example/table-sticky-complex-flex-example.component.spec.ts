import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyComplexFlexExampleComponent } from './table-sticky-complex-flex-example.component';

describe('TableStickyComplexFlexExampleComponent', () => {
  let component: TableStickyComplexFlexExampleComponent;
  let fixture: ComponentFixture<TableStickyComplexFlexExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStickyComplexFlexExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyComplexFlexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
