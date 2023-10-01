import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { IndexBlankComponent } from './index-blank/index-blank.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ComponentsSharedModule } from '../../components-shared/components-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexBlankComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    ComponentsSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlankModule { }
