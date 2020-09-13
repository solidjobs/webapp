import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {SessionManagerService} from './session-manager.service';

@Injectable()
export class PanelApiService {

  public static getDefaultRequestOptions(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', SessionManagerService.session);

    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = headers;

    return options;
  }

  constructor() { }

}
