import { Component, OnInit } from '@angular/core';

declare function loadGoogleOauth(): any;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  private _loading = true;
  private _loadGoogleOauth = null;

  public privacyAccepted = false;
  public commercialAccepted = false;
  public access = false;

  constructor() { }

  ngOnInit() {
    this.loadGoogleOauth = loadGoogleOauth;

    setTimeout(
      () => {
        this.loading = false;
        this.loadGoogleOauth();
      }, 2000
    );
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  get loadGoogleOauth(): any {
    return this._loadGoogleOauth;
  }

  set loadGoogleOauth(value: any) {
    this._loadGoogleOauth = value;
  }
}
