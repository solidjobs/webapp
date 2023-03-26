import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-training-header',
  templateUrl: './training-header.component.html',
  styleUrls: ['./training-header.component.css']
})
export class TrainingHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  index = 0;

  url_index = {
    '/studies': 0,
    '/studies/certificates': 1
  }

  ngOnInit() {
     this.index = this.url_index[this.router.url];
  }

}
