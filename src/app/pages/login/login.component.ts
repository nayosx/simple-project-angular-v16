import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageOption } from 'src/app/shared/models/message.model';
import { User } from 'src/app/shared/models/user.model';
import { UserFakerService } from 'src/app/shared/services/user-faker.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

  alert: MessageOption = {
    msg: '',
    className: 'alert-danger'
  };
  isError: boolean = false;
  loginForm: FormGroup;

  msgMail:string = environment.messages.errorValidMail;
  msgPassword:string = environment.messages.errorPasswordRequired;

  constructor(
    private userService: UserFakerService,
    private formBuilder: FormBuilder,
    private sessionService:SessionStorageService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if(typeof this.sessionService.getItem(environment.U_DATA) !== undefined) {
      this.router.navigate([`${environment.routes.crud.home}`]);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._validateUser();
    }
  }

  private _validateUser(): void {
    const user: User = this.loginForm.value as User;
    this.userService.verify(user).subscribe({
      next: response => {
        if (response.isOk) {
          this.alert.msg = response.msg;
          this.isError = false;
          this.sessionService.setItem(environment.U_DATA, response.data);
          this.router.navigate([`${environment.routes.crud.home}`]);
          
        } else {
          this.alert.msg = response.msg;
          this.isError = true;
        }
      }
    });
  }

}