import {Injectable} from '@angular/core';
import {Token} from '../../models/token';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from '../../configuration/configuration.service';
import {TokenMapper} from '../../helpers/mappers/token-mapper';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionManagerService} from '../session-manager.service';
import 'rxjs/add/operator/map'

@Injectable()
export class PanelApiTokenService {

  private _path = 'login';

  constructor(private http: HttpClient) {
  }

  public createToken(): Observable<Token> {
    return this.http.get(ConfigurationService.getPanelApiUrl() + this.path)
      .map(TokenMapper.map);
  }

  public createTokenByEmailAndPassword(email: string, password: string): Observable<Token> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    email = undefined === (email) ? null : email;
    password = undefined === (password) ? null : password;
    const data: any = {email: email, password: password};

    return this.http.put(
      ConfigurationService.getPanelApiUrl() + this.path,
      data
    )
      .map(TokenMapper.map);
  }

  public registerUser(username: string, email: string, password: string, password2: string, userhash: string, promotionCode: string): Observable<any> {

    const headers = new HttpHeaders();

    const data: any = {username: username, email: email, password: password, googleHash: userhash, code: promotionCode};

    return this.http.post(ConfigurationService.getPanelApiUrl() + 'register',
      data, {headers: headers})
  }

  public forgotPassword(email: string, googleHash: string) {

    const data: any = {email: email, googleHash: googleHash};

    return this.http.post(ConfigurationService.getPanelApiUrl() + 'login/forgot-password',
      data);
  }

  public forgotPasswordChange(key: string, password: string) {

    const data: any = {key: key, password: password};

    return this.http.post(ConfigurationService.getPanelApiUrl() + 'login/forgot-password/password',
      data)
  }

  checkToken(): Observable<any> {
    const headers = new HttpHeaders().set('token', SessionManagerService.session);

    return this.http.get(ConfigurationService.getPanelApiUrl() + 'users/me', {headers: headers, withCredentials: true});
  }

  get path(): string {
    return this._path;
  }
}
