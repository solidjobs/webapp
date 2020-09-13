import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAppHeaderComponent } from './cv-app-header.component';

describe('CvAppHeaderComponent', () => {
  let component: CvAppHeaderComponent;
  let fixture: ComponentFixture<CvAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
