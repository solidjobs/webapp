import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageManagerService} from './services/language-manager.service';
import {SessionManagerService} from './services/session-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    translate: TranslateService,
    @Inject(SessionManagerService) sessionManager,
    public _sessionManager: SessionManagerService
  ) {
    new LanguageManagerService(translate).chooseLanguage();
    this.sessionManager = sessionManager;
  }

  get sessionManager(): SessionManagerService {
    return this._sessionManager;
  }

  set sessionManager(value: SessionManagerService) {
    this._sessionManager = value;
  }
}
