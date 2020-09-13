import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv-app-modal',
  templateUrl: './cv-app-modal.component.html',
  styleUrls: ['./cv-app-modal.component.css']
})

export class CvAppModalComponent implements OnInit {
  ngOnInit() {
    if (!localStorage.getItem('modal')) {
      localStorage.setItem('modal', '1');
      setTimeout(function() {
        document.getElementById('open-modal').click();
      }, 2000);
    }
  }

  constructor() {
  }
}
