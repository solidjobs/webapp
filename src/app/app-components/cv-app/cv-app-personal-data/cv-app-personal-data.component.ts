import {Component, OnInit} from '@angular/core';
import {Cv} from '../../../models/cv';
import {PanelApiCvService} from '../../../services/panel-api-services/panel-api-cv.service';

declare var M: any;

@Component({
  selector: 'app-cv-app-personal-data',
  templateUrl: './cv-app-personal-data.component.html',
  styleUrls: ['./cv-app-personal-data.component.css']
})
export class CvAppPersonalDataComponent implements OnInit {

  public toastSavedHtml = `<span>Guardado correctamente.</span><button class="btn-flat toast-action" onclick="M.Toast.dismissAll();">OK</button>`;

  private _cv: Cv;
  private _error: any;
  private _loaded: boolean;
  private _saving = false;

  constructor(private panelApiCvService: PanelApiCvService) {
  }

  ngOnInit() {
    if (!this.loaded) {
      this.loadCv();
    }
  }

  /**
   * Load CV data
   */
  loadCv() {
    this.panelApiCvService.getCv().subscribe(
      (data) => {
        this.cv = data;
        this.loaded = true;
        this.saving = false;
      },
      (error) => {
        this.error = error;
      }
    );
  }

  /**
   *
   * @param form
   */
  onSubmitCVForm(form) {
    this.saving = true;
    this.saveCV(this.cv);
  }

  /**
   *
   * @param cv
   */
  saveCV(cv) {
    this.panelApiCvService.updateCV(cv).subscribe(
      (data) => {
        this.cv = data;
        this.loaded = true;
        this.saving = false;
        this.showSavedToast();
      },
      (error) => {
        this.error = error;
      }
    );
  }

  /**
   *
   * @param profilePicture
   */
  changeProfilePictureDialog(profilePicture) {
    profilePicture.click();
  }

  /**
   *
   * @param profilePicture
   */
  changeProfilePicture(event) {
    this.loaded = false;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('profile_picture', file, file.name);
      const headers = new Headers();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      this.panelApiCvService.updatePicture(formData, headers).subscribe(
        (response: any) => {
          this.loadCv();
        }
      );
    }
  }

  get cv(): Cv {
    return this._cv;
  }

  set cv(value: Cv) {
    this._cv = value;
    this.loaded = true;
  }

  get error(): any {
    return this._error;
  }

  set error(value: any) {
    this._error = value;
    alert('ERROR');
  }

  get loaded(): boolean {
    return this._loaded;
  }

  set loaded(value: boolean) {
    this._loaded = value;
  }

  get saving(): boolean {
    return this._saving;
  }

  set saving(value: boolean) {
    this._saving = value;
  }


  /**
   * Show toast saved confirmation
   */
  showSavedToast() {
    M.toast({html: this.toastSavedHtml});
  }
}
