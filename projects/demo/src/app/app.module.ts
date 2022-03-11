import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalzzzModule } from 'projects/hudan0604/modalzzz/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModalzzzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
