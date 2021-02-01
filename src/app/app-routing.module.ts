import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TennisPlayerComponent} from './graphics/tennis-player/tennis-player.component';
import {RouterModule, Routes} from '@angular/router';
import {BonjourComponent} from './graphics/bonjour/bonjour.component';

const routes: Routes = [
  { path: 'players', component: TennisPlayerComponent},
  { path: '', component: TennisPlayerComponent},
  { path: 'bonjour/:id', component: BonjourComponent  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
