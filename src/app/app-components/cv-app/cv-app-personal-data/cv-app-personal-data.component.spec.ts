import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAppPersonalDataComponent } from './cv-app-personal-data.component';

describe('CvAppPersonalDataComponent', () => {
  let component: CvAppPersonalDataComponent;
  let fixture: ComponentFixture<CvAppPersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAppPersonalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAppPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
