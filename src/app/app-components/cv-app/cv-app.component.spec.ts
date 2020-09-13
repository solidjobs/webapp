import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAppComponent } from './cv-app.component';

describe('CvAppComponent', () => {
  let component: CvAppComponent;
  let fixture: ComponentFixture<CvAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
