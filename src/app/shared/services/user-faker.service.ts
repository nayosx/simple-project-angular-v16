import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ResponseUser } from '../models/user-response.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFakerService {

  private user:User = {
    id: 1,
    name: 'User Tomdux',
    email: 'info@tomdux.com',
    password: '12345678'
  };

  constructor() { }

  public verify(args:User):Observable< ResponseUser> {
    let response:ResponseUser = {
      isError: true,
      isOk: false,
      data: null,
      msg: 'Usuario invalido'
    };
    if(this.user.email == args.email) {
      if(args.password == this.user.password) {
        response.msg = 'Usuario valido';
        response.isOk = true;
        response.isError = false;
        const user:User = {...this.user};
        user.password = '';
        response.data = user;
      } else {
        response.msg = 'Contraseña invalida';
      }
    }
    return of(response);
  }
}
