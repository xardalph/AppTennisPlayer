import { Component, Input, OnInit, Output } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';
import {TennisPlayerService} from '../../services/tennis-player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  constructor(public tplayerService: TennisPlayerService) {
  }

  ngOnInit(): void {
  }

}
