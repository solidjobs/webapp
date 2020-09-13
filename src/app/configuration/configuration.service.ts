import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ConfigurationService {

  public static getPanelApiUrl(): string {
    return environment.panelApiUrl;
  }

  constructor() { }
}
