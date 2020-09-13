import {Injectable} from '@angular/core';
import {PanelApiTokenService} from './panel-api-services/panel-api-token.service';
import {Router} from '@angular/router';
import {Token} from '../models/token';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SessionManagerService {

  private static _sessionKey = 'session';
  private static _session: string;
  static ERROR_REQUIRES_LOGIN = 'REQUIRES_LOGIN';

  private _error;
  private _token: string;

  constructor(
    private router: Router,
    private panelApiPanelToken: PanelApiTokenService) {
    if (localStorage.getItem(SessionManagerService.sessionKey) !== null) {
      this.token = localStorage.getItem(SessionManagerService.sessionKey);
    }
  }

  /**
   * Generates a new anonymous token
   **/

  public generateNewToken() {
    this.panelApiPanelToken.createToken().subscribe(
      token => this.token = token.hash,
      error => this.error = error
    );
  }

  public getNewToken(): Observable<Token> {
    return this.panelApiPanelToken.createToken();
  }

  public checkSession() {
    this.panelApiPanelToken.checkToken().subscribe(
      () => {},
      error => this.error = error
    );
  }

  logOut() {
    this._token = undefined;
    localStorage.removeItem(SessionManagerService.sessionKey);
    localStorage.clear();
  }

  public isLoggedIn() {
    return this._token !== undefined && this._token !== null;
  }

  /**
   * @param value
   */
  public manageSessionError(value: any) {
    document.location.href = '/login'; // hard redirect for force reload scripts
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    localStorage.setItem(SessionManagerService.sessionKey, value);
    console.log();
    document.cookie = 'token=' + value + ';path=/;';
    this._token = value;
    SessionManagerService.session = value;
  }

  get error() {
    return this._error;
  }

  set error(value) {
    this.manageSessionError(value);
    this._error = value;
  }

  static get sessionKey(): string {
    return this._sessionKey;
  }

  static get session(): string {
    return this._session;
  }

  static set session(value: string) {
    this._session = value;
  }
}
