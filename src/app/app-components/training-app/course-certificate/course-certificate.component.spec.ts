import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCertificateComponent } from './course-certificate.component';

describe('CourseCertificateComponent', () => {
  let component: CourseCertificateComponent;
  let fixture: ComponentFixture<CourseCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
