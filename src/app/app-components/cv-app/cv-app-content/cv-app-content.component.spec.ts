import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CvAppContentComponent } from './cv-app-content.component';

describe('CvAppContentComponent', () => {
  let component: CvAppContentComponent;
  let fixture: ComponentFixture<CvAppContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAppContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAppContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
