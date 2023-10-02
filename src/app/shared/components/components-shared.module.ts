import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CollapseModule,
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
    LoadingComponent,
  ]
})
export class ComponentsSharedModule { }
