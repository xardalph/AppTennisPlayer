import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TennisPlayerComponent} from './graphics/tennis-player/tennis-player.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'players', component: TennisPlayerComponent},
  { path: '', component: TennisPlayerComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
