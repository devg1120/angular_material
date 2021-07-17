import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerOverviewExampleComponent } from './divider-overview-example.component';

describe('DividerOverviewExampleComponent', () => {
  let component: DividerOverviewExampleComponent;
  let fixture: ComponentFixture<DividerOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerOverviewExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
