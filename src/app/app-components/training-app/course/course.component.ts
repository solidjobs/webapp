import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  Math = Math;

  courseUuid: string;
  course: any;
  lectures: any[];
  currentLectureIndex: number = 0;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.courseUuid = this.route.snapshot.paramMap.get('uuid');

    this.getCourse();
    this.getLectures();
  }

  getCourse() {
    const token = localStorage.getItem('session');
    const headers = {token: token};
    this.http.get(environment.trainingApiUrl + 'course', {headers}).subscribe((courses: any[]) => {
      this.course = courses.find(course => course.uuid === this.courseUuid);
    });
  }

  getLectures() {
    const token = localStorage.getItem('session');
    const headers = {token: token};
    this.http.get(environment.trainingApiUrl + `course/${this.courseUuid}`, {headers}).subscribe((lectures: any[]) => {
      this.lectures = lectures;
      this.loading = false;
    });
  }

  markAsDone(lecture) {
    const token = localStorage.getItem('session');
    const headers = {token: token};
    const body = {status: 1};
    this.http
      .put(environment.trainingApiUrl + `course/${this.courseUuid}/lecture/${lecture.uuid}`, body, {headers})
      .subscribe(() => {
        lecture.status = 1;
        this.goToNextLecture();
      }, () => {
        alert('Primero has de ver los vídeos. No es técnicamente posible que ya los hayas visto.');
      });
  }

  goToNextLecture() {
    if (this.currentLectureIndex < this.lectures.length - 1) {
      this.currentLectureIndex++;
    } else {
      this.getCourse();
    }
  }

  goToPreviousLecture() {
    if (this.currentLectureIndex > 0) {
      this.currentLectureIndex--;
    }
  }

  isCourseCompleted() {
    return this.lectures.every(lecture => lecture.status === 1);
  }

  getVideoUrl(youtubeCode: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeCode}?autoplay=1`);
  }
}
