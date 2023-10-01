import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CollapseModule,
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
  ]
})
export class ComponentsSharedModule { }
