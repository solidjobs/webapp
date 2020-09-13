import { Component, OnInit } from '@angular/core';
import {SessionManagerService} from '../../services/session-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [SessionManagerService]
})
export class HomepageComponent implements OnInit {

  constructor(public sessionManager: SessionManagerService, private router: Router) { }

  ngOnInit() {
    this.sessionManager.checkSession();
    if (this.sessionManager.isLoggedIn()) {
      this.router.navigate(['/cv']).then();
    }
  }

}
