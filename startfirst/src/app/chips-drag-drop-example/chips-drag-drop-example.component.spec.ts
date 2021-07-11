import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsDragDropExampleComponent } from './chips-drag-drop-example.component';

describe('ChipsDragDropExampleComponent', () => {
  let component: ChipsDragDropExampleComponent;
  let fixture: ComponentFixture<ChipsDragDropExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsDragDropExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsDragDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
