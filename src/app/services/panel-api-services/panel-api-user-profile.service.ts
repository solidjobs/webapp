import { Injectable } from '@angular/core';
import {SessionManagerService} from '../session-manager.service';
import {UserProfile} from '../../models/user-profile';
import {ConfigurationService} from '../../configuration/configuration.service';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {UserProfileMapper} from '../../helpers/mappers/user-profile-mapper';
import {PanelApiService} from '../panel-api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PanelApiUserProfileService {

  private _path = 'users/profile';
  private _pathUsername = 'users/profile/username';
  private _pathPassword = 'users/profile/password';
  private _pathEmail = 'users/profile/email';
  private _pathEmailConfirm = 'users/profile/email/confirm';
  private _pathLogout = 'users/logout';

  constructor(
    private oldHttp: Http, private http: HttpClient,
    private sessionManager: SessionManagerService) {

  }

  getUserProfile(): Observable<UserProfile> {
    const options = PanelApiService.getDefaultRequestOptions();

    return this.oldHttp.get(
      ConfigurationService.getPanelApiUrl() + this.path,
      options
    ).map(UserProfileMapper.map);
  }
  /**
   * @param username
   * @returns {Observable<Response>}
   */
  updateUsername(username: string): Observable<UserProfile> {
    const options = PanelApiService.getDefaultRequestOptions();

    return this.oldHttp.put(
      ConfigurationService.getPanelApiUrl() + this.pathUsername,
      {username: username},
      options
    ).map(UserProfileMapper.map);
  }

  /**
   *
   * @param currentPassword
   * @param newPassword
   */
  updatePassword(currentPassword: string, newPassword: string) {
    const options = PanelApiService.getDefaultRequestOptions();

    return this.oldHttp.put(
      ConfigurationService.getPanelApiUrl() + this.pathPassword,
      {
        currentPassword: currentPassword,
        newPassword: newPassword
      },
      options
    ).map(UserProfileMapper.map);
  }

  updateEmail(email: string) {
    const options = PanelApiService.getDefaultRequestOptions();

    return this.oldHttp.put(
      ConfigurationService.getPanelApiUrl() + this.pathEmail,
      {
        email: email
      },
      options
    ).map(UserProfileMapper.map);
  }

  verifyEmail(key: string) {
    const options = PanelApiService.getDefaultRequestOptions();

    return this.oldHttp.put(
      ConfigurationService.getPanelApiUrl() + this.pathEmailConfirm,
      {
        key: key
      },
      options
    ).map(UserProfileMapper.map);

  }

  logout(callback = function() {}, ) {
    const headers = new HttpHeaders().set('token', SessionManagerService.session);

    this.http.put(
      ConfigurationService.getPanelApiUrl() + this.pathLogout,
      {},
      {headers: headers, withCredentials: true}
    ).subscribe(
      json => function(sessionManager: SessionManagerService) {
        sessionManager.token = '';
        callback();
      }(this.sessionManager),
      error => console.log('error on logout')
    );
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

  get pathUsername(): string {
    return this._pathUsername;
  }

  set pathUsername(value: string) {
    this._pathUsername = value;
  }

  get pathPassword(): string {
    return this._pathPassword;
  }

  set pathPassword(value: string) {
    this._pathPassword = value;
  }

  get pathEmail(): string {
    return this._pathEmail;
  }

  set pathEmail(value: string) {
    this._pathEmail = value;
  }

  get pathLogout(): string {
    return this._pathLogout;
  }

  set pathLogout(value: string) {
    this._pathLogout = value;
  }

  get pathEmailConfirm(): string {
    return this._pathEmailConfirm;
  }

  set pathEmailConfirm(value: string) {
    this._pathEmailConfirm = value;
  }
}
