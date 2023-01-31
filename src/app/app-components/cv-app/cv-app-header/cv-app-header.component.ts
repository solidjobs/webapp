import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PanelApiCvService} from '../../../services/panel-api-services/panel-api-cv.service';
import {Cv} from '../../../models/cv';

declare function signOut(callback): any;

@Component({
  selector: 'app-cv-app-header',
  templateUrl: './cv-app-header.component.html',
  styleUrls: ['./cv-app-header.component.css']

})
export class CvAppHeaderComponent implements OnInit {

  routeIndex = {
    '/cv': 0,
    '/cv/contenido': 1,
    '/cv/exportar': 2
  };

  private _activeRoute: number;
  private _cv: Cv;

  /**
   *
   * @param router
   * @param cvService
   */
  constructor(private router: Router, private cvService: PanelApiCvService) {

  }

  ngOnInit() {
    this.activeRoute = this.routeIndex[this.router.url];
    this.loadCv();
  }

  loadCv() {
    this.cvService.getCv().subscribe(
      (cv: Cv) => {
        this.cv = cv;
      }
    )
  }

  closeSideNav() {
    this.activeRoute = 0;

    const element: HTMLElement = document.getElementsByClassName('sidenav-overlay')[0] as HTMLElement;

    element.click();

    const personalData: HTMLElement = document.getElementById('tab-test1') as HTMLElement;

    personalData.click();
  }

  isTrainingActivated() {
    return localStorage.getItem('training') == '1';
  }

  /**
   * Close session
   */
  closeSession() {
    signOut(function () {
      localStorage.removeItem('session');
      document.location.href = '/login';
    });
  }

  get activeRoute(): number {
    return this._activeRoute;
  }

  set activeRoute(value: number) {
    this._activeRoute = value;
  }

  get cv(): Cv {
    return this._cv;
  }

  set cv(value: Cv) {
    this._cv = value;
  }
}
