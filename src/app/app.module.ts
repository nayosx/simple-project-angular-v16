import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankModule } from './shared/templates/blank/blank.module';
import { MasterPageModule } from './shared/templates/master-page/master-page.module';
import { AutocompleteOffDirective } from './shared/directives/autocomplete-off.directive';
import { ComponentsSharedModule } from './shared/components/components-shared.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './shared/interceptors/http-interceptor.service';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteOffDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlankModule,
    MasterPageModule,
    ComponentsSharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
