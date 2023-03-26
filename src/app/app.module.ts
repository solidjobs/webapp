import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SessionManagerService} from './services/session-manager.service';
import {PanelApiService} from './services/panel-api.service';
import { HomepageComponent } from './app-components/homepage/homepage.component';
import {AppRoutingModule} from './app.routes';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './services/guards/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GoogleLoginComponent } from './app-components/google-login/google-login.component';
import { GoogleLoginModalComponent } from './app-components/google-login/google-login-modal/google-login-modal.component';
import { CvAppComponent } from './app-components/cv-app/cv-app.component';
import { CvAppModalComponent } from './app-components/cv-app/cv-app-modal/cv-app-modal.component';
import { CvAppContentComponent } from './app-components/cv-app/cv-app-content/cv-app-content.component';
import { CvAppExportComponent } from './app-components/cv-app/cv-app-export/cv-app-export.component';
import { CvAppPersonalDataComponent } from './app-components/cv-app/cv-app-personal-data/cv-app-personal-data.component';
import { CvAppHeaderComponent } from './app-components/cv-app/cv-app-header/cv-app-header.component';
import {PanelApiCvService} from './services/panel-api-services/panel-api-cv.service';
import {PanelApiCvExportPdfService} from './services/panel-api-services/panel-api-cv-export-pdf.service';
import {LoadingComponent} from './app-components/commons/loading/loading.component';
import {PanelApiTokenService} from './services/panel-api-services/panel-api-token.service';
import { TrainingAppComponent } from './app-components/training-app/training-app.component';
import { CreateCourseComponent } from './app-components/training-app/create-course/create-course.component';
import { TrainingHeaderComponent } from './app-components/training-app/training-header/training-header.component';
import { CourseComponent } from './app-components/training-app/course/course.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GoogleLoginComponent,
    GoogleLoginModalComponent,
    CvAppComponent,
    CvAppModalComponent,
    CvAppContentComponent,
    CvAppExportComponent,
    CvAppPersonalDataComponent,
    CvAppHeaderComponent,
    LoadingComponent,
    TrainingAppComponent,
    CreateCourseComponent,
    TrainingHeaderComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
      }),
  ],
  providers: [
    AuthGuardService,
    SessionManagerService,
    PanelApiService,
    PanelApiCvService,
    PanelApiCvExportPdfService,
    PanelApiTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
