import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Language} from '../../models/language';
import {ConfigurationService} from '../../configuration/configuration.service';
import {LanguageMapper} from '../../helpers/mappers/language-mapper';
import {SessionManagerService} from '../session-manager.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelApiLanguageService {

  private _path = 'cv/language';

  constructor(private http: HttpClient, private sessionManager: SessionManagerService) {
  }

  /**
   * Get Languages list from API_PANEL
   */
  public getLanguages(): Observable<any> {
    return this.http.get(ConfigurationService.getPanelApiUrl() + this._path,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      })
      .pipe(
        map(LanguageMapper.mapList)
      );
  }

  /**
   *
   * @param id
   */
  public deleteLanguage(id: number): Observable<any> {
    return this.http.delete(ConfigurationService.getPanelApiUrl() + this._path + '/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      });
  }

  /**
   *
   * @param language
   */
  public updateLanguage(language: Language): Observable<any> {
    return this.http.put(ConfigurationService.getPanelApiUrl() + this._path + '/' + language.id,
      {
        language: language.language
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      });
  }

  /**
   *
   */
  public createLanguage(): Observable<any> {
    return this.http.post(ConfigurationService.getPanelApiUrl() + this._path,
      {
        language: 'Nuevo idioma'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
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
