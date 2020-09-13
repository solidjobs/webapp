import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../../configuration/configuration.service';
import {Observable} from 'rxjs/Observable';
import {SessionManagerService} from '../session-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PanelApiCvExportPdfService {

  private _path = 'cv/export/pdf';

  constructor(private httpClient: HttpClient, private sessionManager: SessionManagerService) { }

  /**
   * Get PDF from API_PANEL
   */
  public getPDF(): Observable<Blob> {
    return this.httpClient.post<Blob>(ConfigurationService.getPanelApiUrl() + this.path,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        responseType: 'blob' as 'json',
        withCredentials: true
      });
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }
}
