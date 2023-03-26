import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  private course: any;
  private loading = true;

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

}
