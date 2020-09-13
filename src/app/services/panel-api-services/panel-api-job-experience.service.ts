import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigurationService} from '../../configuration/configuration.service';
import {JobExperienceMapper} from '../../helpers/mappers/job-experience-mapper';
import {SessionManagerService} from '../session-manager.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelApiJobExperienceService {

  private _path = 'cv/job_experience';

  constructor(private http: HttpClient, private sessionManager: SessionManagerService) { }

  /**
   * Get JobExperiences list from API_PANEL
   */

  public getJobExperiences(): Observable<any> {
    return this.http.get(ConfigurationService.getPanelApiUrl() + this._path,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      }
      )
      .pipe(map(JobExperienceMapper.mapList));
  }

  public deleteJobExperience(id: number): Observable<any> {
    return this.http.delete(ConfigurationService.getPanelApiUrl() + this.path + '/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      }
      );
  }

  /**
   *
   * @param jobExperience
   */
  public editJobExperience(jobExperience): Observable<any> {

    const body = {
      professionalCategory: jobExperience.professionalCategory,
      companyName: jobExperience.companyName,
      startDate: jobExperience.startDate === '' ? null : jobExperience.startDate,
      endDate: jobExperience.endDate === '' ? null : jobExperience.endDate,
      city: jobExperience.city === '' ? null : jobExperience.city,
      description: jobExperience.description === '' ? null : jobExperience.description,
      show: jobExperience.show,
      current: jobExperience.current ? 1 : 0
    };

    if (body.endDate === null) {
      body.current = 1;
    }

    return this.http.put(ConfigurationService.getPanelApiUrl() + this.path + '/' + jobExperience.id,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      }
      );
  }

  /**
   *
   */
  public createJobExperience(): Observable<any> {
    return this.http.post(ConfigurationService.getPanelApiUrl() + this.path,
      {
        professionalCategory: 'Nuevo puesto',
        companyName: 'Nueva empresa',
        show: 1
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      }
      );
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }
}
