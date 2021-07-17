import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectionExampleComponent } from './list-selection-example.component';

describe('ListSelectionExampleComponent', () => {
  let component: ListSelectionExampleComponent;
  let fixture: ComponentFixture<ListSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSelectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
