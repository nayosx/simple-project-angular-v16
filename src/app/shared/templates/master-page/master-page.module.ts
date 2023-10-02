import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { MasterPageRoutingModule } from './master-page-routing.module';
import { IndexMasterComponent } from './layout-master/index-master.component';
import { ComponentsSharedModule } from "src/app/shared/components/components-shared.module";
import { ListElementComponent } from '../../../pages/crud/list-element/list-element.component';
import { EditComponent } from '../../../pages/crud/edit/edit.component';
import { CreateComponent } from '../../../pages/crud/create/create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        IndexMasterComponent,
        ListElementComponent,
        EditComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        MasterPageRoutingModule,
        ComponentsSharedModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MasterPageModule { }
