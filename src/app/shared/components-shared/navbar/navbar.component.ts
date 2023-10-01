import { Component, ViewEncapsulation } from '@angular/core';
import { SessionStorageService } from '../../services/session-storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  constructor(
    private sessionService:SessionStorageService,
    private router: Router,
  ) {}

  handleSession():void {
    this.sessionService.clearStorage();
    this.router.navigate(['']);
  }

}