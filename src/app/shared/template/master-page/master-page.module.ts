import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterPageRoutingModule } from './master-page-routing.module';
import { IndexMasterComponent } from './index-master/index-master.component';
import { ComponentsSharedModule } from "src/app/shared/components-shared/components-shared.module";
import { ListElementComponent } from '../../../pages/crud/list-element/list-element.component';
import { EditComponent } from '../../../pages/crud/edit/edit.component';
import { CreateComponent } from '../../../pages/crud/create/create.component';


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
        ComponentsSharedModule
    ]
})
export class MasterPageModule { }
