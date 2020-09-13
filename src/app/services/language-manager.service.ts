import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageManagerService {

  private languages: string[] = ['en', 'es'];
  private defaultLanguage = 0;
  private _selectedLanguage: number;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.languages[this.defaultLanguage]);
  }

  /**
   * get the selected language
   * if there isn't set it
   */
  public chooseLanguage() {
    if (this.selectedLanguage == null) {
      const browserLang = this.translate.getBrowserLang();

      if (this.languages.indexOf(browserLang) > -1) {
        this.selectedLanguage = this.languages.indexOf(browserLang);
      } else {
        this.selectedLanguage = this.defaultLanguage;
      }
    }

    this.translate.use(this.languages[this.selectedLanguage]);
  }

  get selectedLanguage(): number {
    return this._selectedLanguage;
  }

  set selectedLanguage(value: number) {
    this._selectedLanguage = value;
  }
}
