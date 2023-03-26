import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: any;
  loading = true;
  courseQuery = '';
  errorMessage: string;
  error: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    const token = localStorage.getItem('session');
    const headers = {token: token};
    this.http.get('https://studies.solidjobs.org/course', {headers}).subscribe((courses: any[]) => {
      this.course = courses.find(course => course.status === 0);
      this.loading = false;
      this.evalAction();
    });
  }

  evalAction() {
    if (this.course) {
      this.router.navigate(['/studies/course', this.course.uuid]);
    } else {
      this.loading = false;
    }
  }

  createCourse() {
    this.loading = true;
    this.errorMessage = null;

    const token = localStorage.getItem('session');
    const headers = {token: token};
    this.http.post('https://studies.solidjobs.org/course', {prompt: this.courseQuery}, {headers}).subscribe((course: any) => {
      this.router.navigate(['/studies/course', course.uuid]);
    }, (error) => {
      this.loading = false;
      this.handleErrorResponse(error);
    });
  }

  handleErrorResponse(error) {
    if (error.status === 429) {
      this.errorMessage = 'Has superado el límite de solicitudes. Por favor, inténtalo de nuevo más tarde.';
    } else {
      switch (error.error.type) {
        case 'COURSE_RATIO':
          this.errorMessage = 'Ha ocurrido un error al generar el curso. Por favor, inténtalo de nuevo.';
          break;
        case 'API_COMMUNICATION':
          this.errorMessage = 'No se ha podido comunicar con la API. Por favor, inténtalo de nuevo.';
          break;
        case 'UNKNOWN':
        default:
          this.errorMessage = 'Ha ocurrido un error desconocido. Por favor, inténtalo de nuevo.';
          break;
      }
    }

    this.error = error.error;
  }
}
