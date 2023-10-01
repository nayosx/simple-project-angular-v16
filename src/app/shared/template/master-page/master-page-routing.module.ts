import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from 'src/app/pages/crud/create/create.component';
import { EditComponent } from 'src/app/pages/crud/edit/edit.component';
import { ListElementComponent } from 'src/app/pages/crud/list-element/list-element.component';

const routes: Routes = [
  {
    path: 'details',
    component: ListElementComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPageRoutingModule { }
