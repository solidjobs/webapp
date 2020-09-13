import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SessionManagerService} from '../session-manager.service';
import {ConfigurationService} from '../../configuration/configuration.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CvMapper} from '../../helpers/mappers/cv-mapper';
import {Cv} from '../../models/cv';
import {map} from 'rxjs/operators';

@Injectable()
export class PanelApiCvService {
  private _path = 'cv';

  /**
   * Constructor PanelApiCvServices
   *
   * @param http
   * @param sessionManager
   */
  constructor(private http: HttpClient,
              private sessionManager: SessionManagerService) {
  }

  /**
   * get CV from panel api
   */
  public getCv(): Observable<Cv> {
    return this.http.get(ConfigurationService.getPanelApiUrl() + this.path + '',
      {
        headers:
          {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('session') || ''
          }
        , withCredentials: true
      })
      .pipe(map(CvMapper.map));
  }

  /**
   *
   * @param cv
   */
  public updateCV(cv: Cv): Observable<Cv> {
    return this.http.put(ConfigurationService.getPanelApiUrl() + this.path,
      {
        firstName: cv.firstName,
        lastName: cv.lastName,
        phone: cv.phone,
        email: cv.email,
        city: cv.city,
        localAddress: cv.localAddress,
        jobName: cv.jobName
      },
      {
        headers:
          {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('session') || ''
          }
        , withCredentials: true
      })
      .pipe(map(CvMapper.map));
  }

  /**
   *
   * @param formData
   * @param headers
   */
  public updatePicture(formData, headers) {
    // profile_picture

    headers['token'] = localStorage.getItem('session') || '';

    return this.http.post(ConfigurationService.getPanelApiUrl() + 'users/picture',
      formData, {
        headers: headers,
        withCredentials: true
      });
  }

  /**
   * Returns the API PATH for CV
   */
  get path(): string {
    return this._path;
  }
}
