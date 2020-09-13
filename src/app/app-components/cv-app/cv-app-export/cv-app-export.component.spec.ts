import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAppExportComponent } from './cv-app-export.component';

describe('CvAppExportComponent', () => {
  let component: CvAppExportComponent;
  let fixture: ComponentFixture<CvAppExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAppExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAppExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
