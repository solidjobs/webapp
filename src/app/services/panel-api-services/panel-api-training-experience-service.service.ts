import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigurationService} from '../../configuration/configuration.service';
import {LanguageMapper} from '../../helpers/mappers/language-mapper';
import {TrainingExperienceMapper} from '../../helpers/mappers/training-experience-mapper';
import {TrainingExperience} from '../../models/training-experience';
import {SessionManagerService} from '../session-manager.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelApiTrainingExperienceServiceService {

  private _path = 'cv/training_experience';

  constructor(private http: HttpClient, private sessionManager: SessionManagerService) { }

  /**
   * Get TrainingExperience list from API_PANEL
   */
  public getTrainingExperience(): Observable<any> {
    return this.http.get(ConfigurationService.getPanelApiUrl() + this._path,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      })
      .pipe(map(TrainingExperienceMapper.mapList));
  }

  /**
   *
   * @param id
   */
  deleteTrainingExperience(id: number) {
    return this.http.delete(ConfigurationService.getPanelApiUrl() + this.path + '/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      })
  }

  /**
   *
   * @param trainingExperience
   */
  updateTrainingExperience(trainingExperience: TrainingExperience) {
    return this.http.put(ConfigurationService.getPanelApiUrl() + this.path + '/' + trainingExperience.id,
      {
        titleName: trainingExperience.titleName,
        institutionName: trainingExperience.institutionName,
        city: trainingExperience.city === '' ? null : trainingExperience.city,
        description: trainingExperience.description === '' ? null : trainingExperience.description,
        startDate: trainingExperience.startDate < 1 ? null : trainingExperience.startDate,
        endDate: trainingExperience.endDate < 1 ? null : trainingExperience.endDate,
        show: trainingExperience.show
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      })
  }

  /**
   *
   */
  createTrainingExperience() {
    return this.http.post(ConfigurationService.getPanelApiUrl() + this.path,
      {
        titleName: 'Nuevo título',
        institutionName: 'Nueva institución',
        show: 1
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      })
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

}
