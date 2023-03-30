import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-course-certificate',
  templateUrl: './course-certificate.component.html',
  styleUrls: ['./course-certificate.component.css']
})
export class CourseCertificateComponent implements OnInit {

  Math = Math;

  loading = true;
  courses = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.load();
  }

  load() {
    const token = localStorage.getItem('session');
    const headers = {token: token};
    this.http.get(environment.trainingApiUrl + 'course', {headers}).subscribe((courses: any[]) => {
      this.courses = courses.filter(course => course.status === 1);
      this.loading = false;
    });
  }
}
