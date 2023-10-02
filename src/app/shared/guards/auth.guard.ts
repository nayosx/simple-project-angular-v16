import { CanActivateFn, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {inject} from '@angular/core';


export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(sessionStorage.getItem(environment.U_DATA)) {
    return true;
  } else {
    router.navigate([`/${environment.routes.login}`]);
    return false;
  }
};