import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankModule } from './shared/template/blank/blank.module';
import { MasterPageModule } from './shared/template/master-page/master-page.module';
import { AutocompleteOffDirective } from './shared/directives/autocomplete-off.directive';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
