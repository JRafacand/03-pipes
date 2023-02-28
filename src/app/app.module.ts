import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es';
import  localeFr from '@angular/common/locales/fr';
import  localeGr from '@angular/common/locales/de';
import { AppComponent } from './app.component';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeGr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es'
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
