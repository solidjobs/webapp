import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAppComponent } from './training-app.component';

describe('TrainingAppComponent', () => {
  let component: TrainingAppComponent;
  let fixture: ComponentFixture<TrainingAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
