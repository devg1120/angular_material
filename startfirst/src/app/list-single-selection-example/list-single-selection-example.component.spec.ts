import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleSelectionExampleComponent } from './list-single-selection-example.component';

describe('ListSingleSelectionExampleComponent', () => {
  let component: ListSingleSelectionExampleComponent;
  let fixture: ComponentFixture<ListSingleSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingleSelectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
