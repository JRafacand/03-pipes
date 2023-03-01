import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es';
import  localeFr from '@angular/common/locales/fr';
import  localeGr from '@angular/common/locales/de';
import { AppComponent } from './app.component';
import { PipersonalizadoPipe } from './pipes/pipersonalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AsterisPipe } from './pipes/asteris.pipe';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeGr);
@NgModule({
  declarations: [
    AppComponent,
    PipersonalizadoPipe,
    DomseguroPipe,
    AsterisPipe
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
