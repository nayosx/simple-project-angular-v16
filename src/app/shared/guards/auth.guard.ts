import { CanActivateFn } from '@angular/router';
import { environment } from 'src/environments/environment';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem(environment.U_DATA)) {
    return true;
  }
  return false;
};


