import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from 'src/app/pages/crud/create/create.component';
import { EditComponent } from 'src/app/pages/crud/edit/edit.component';
import { ListElementComponent } from 'src/app/pages/crud/list-element/list-element.component';
import { environment } from 'src/environments/environment';
import { IndexMasterComponent } from './layout-master/index-master.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IndexMasterComponent,
        children: [
          {
            path: environment.routes.crud.home,
            component: ListElementComponent
          },
          {
            path: environment.routes.crud.add,
            component: CreateComponent
          },
          {
            path: `${environment.routes.crud.edit}/:id`,
            component: EditComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPageRoutingModule { }
