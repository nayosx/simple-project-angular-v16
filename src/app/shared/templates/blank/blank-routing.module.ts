import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { environment } from 'src/environments/environment';
import { IndexBlankComponent } from './layout-blank/index-blank.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IndexBlankComponent,
        children: [
          {
            path: environment.routes.login,
            component: LoginComponent,
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule { }
