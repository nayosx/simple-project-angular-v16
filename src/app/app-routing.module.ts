import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexMasterComponent } from './shared/template/master-page/index-master/index-master.component';
import { IndexBlankComponent } from './shared/template/blank/index-blank/index-blank.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: IndexBlankComponent,
    loadChildren: () => import('./shared/template/blank/blank.module').then(m => m.BlankModule),
    canActivate: []
  },
  {
    path: '',
    component: IndexMasterComponent,
    loadChildren: () => import('./shared/template/master-page/master-page.module').then(m => m.MasterPageModule),
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
