import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoadingComponent } from './loading/loading.component';
import { InputErrorComponent } from './input-error/input-error.component';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    LoadingComponent,
    InputErrorComponent
  ],
  imports: [
    CommonModule,
    CollapseModule,
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
    LoadingComponent,
    InputErrorComponent
  ]
})
export class ComponentsSharedModule { }
