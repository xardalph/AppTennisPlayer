import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TennisPlayerComponent } from './graphics/tennis-player/tennis-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TennisPlayerFormComponent } from './graphics/tennis-player-form/tennis-player-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlayerDetailComponent } from './graphics/player-detail/player-detail.component';
import { PlayerListComponent } from './graphics/player-list/player-list.component';
import { AddPlayerComponent } from './graphics/add-player/add-player.component';
import { UpsertPlayerComponent } from './graphics/upsert-player/upsert-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    TennisPlayerFormComponent,
    PlayerDetailComponent,
    PlayerListComponent,
    AddPlayerComponent,
    UpsertPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
