import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TennisPlayerComponent } from './graphics/tennis-player/tennis-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
