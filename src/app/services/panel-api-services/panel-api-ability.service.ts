import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ability} from '../../models/ability';
import {ConfigurationService} from '../../configuration/configuration.service';
import {AbilityMapper} from '../../helpers/mappers/ability-mapper';
import {SessionManagerService} from '../session-manager.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PanelApiAbilityService {

  private _path = 'cv/ability';

  constructor(private http: HttpClient, private sessionManager: SessionManagerService) { }

  /**
   * Get Languages list from API_PANEL
   */
  public getAbilities(): Observable<any> {
    return this.http.get(ConfigurationService.getPanelApiUrl() + this._path,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      })
      .pipe(map(AbilityMapper.mapList));
  }

  /**
   *
   * @param id
   */
  public deleteAbility(id: number): Observable<any> {
    return this.http.delete(ConfigurationService.getPanelApiUrl() + this.path + '/' + id,
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
   * @param ability
   */
  public updateAbility(ability: Ability): Observable<any> {
    return this.http.put(ConfigurationService.getPanelApiUrl() + this.path + '/' + ability.id,
      {
        ability: ability.ability
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('session') || ''
        },
        withCredentials: true
      });
  }

  public createAbility(): Observable<any> {
    return this.http.post(ConfigurationService.getPanelApiUrl() + this.path,
      {
        ability: 'Nueva habilidad'
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
