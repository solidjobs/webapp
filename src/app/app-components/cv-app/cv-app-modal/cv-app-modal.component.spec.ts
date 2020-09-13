import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAppModalComponent } from './cv-app-modal.component';

describe('CvAppModalComponent', () => {
  let component: CvAppModalComponent;
  let fixture: ComponentFixture<CvAppModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAppModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
