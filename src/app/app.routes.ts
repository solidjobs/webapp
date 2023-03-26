import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomepageComponent} from './app-components/homepage/homepage.component';
import {AuthGuardService} from './services/guards/auth-guard.service';
import {GoogleLoginComponent} from './app-components/google-login/google-login.component';
import {CvAppComponent} from './app-components/cv-app/cv-app.component';
import {CvAppPersonalDataComponent} from './app-components/cv-app/cv-app-personal-data/cv-app-personal-data.component';
import {CvAppContentComponent} from './app-components/cv-app/cv-app-content/cv-app-content.component';
import {CvAppExportComponent} from './app-components/cv-app/cv-app-export/cv-app-export.component';
import {TrainingAppComponent} from "./app-components/training-app/training-app.component";
import {CreateCourseComponent} from './app-components/training-app/create-course/create-course.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: GoogleLoginComponent},
  {
    path: 'cv', component: CvAppComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: CvAppPersonalDataComponent
      }
      , {
        path: 'contenido',
        component: CvAppContentComponent
      }
      , {
        path: 'exportar',
        component: CvAppExportComponent
      }
    ]
  },
  {
    path: 'studies', component: TrainingAppComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: CreateCourseComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
