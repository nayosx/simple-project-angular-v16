import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SessionStorageService } from '../../services/session-storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit{

  isCollapsed = true;
  mailUser:string = '';

  constructor(
    private sessionService:SessionStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const algo = this.sessionService.getItem(environment.U_DATA) as User;
    console.log(algo);
    this.mailUser = algo.email;
  }

  handleSession():void {
    this.sessionService.clearStorage();
    this.router.navigate([`/${environment.routes.login}`]);
  }

  handleBurger():void {
    this.isCollapsed = !this.isCollapsed;
    console.log('handle burger', this.isCollapsed);
  }

}
