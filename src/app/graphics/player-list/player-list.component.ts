import { Component, OnInit } from '@angular/core';
import {TennisPlayerService} from '../../services/tennis-player.service';
import {TennisPlayer} from '../../Model/tennis-player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  public cible;
  public playersList;

  // constructeurs et initialiseurs
  constructor(private tplayerService: TennisPlayerService) {
    this.cible = this.tplayerService.getAllPlayer()[0];


  }

  ngOnInit(): void {

    // même tableau partagé
    this.playersList = this.tplayerService.getAllPlayer();
  }

  public changeCible(pl: TennisPlayer): void{
    this.tplayerService.selectedPlayer = pl;
    this.cible = pl;
  }

  isSelected(pl: TennisPlayer): boolean{

    // const result = pl == this.cible;
    return this.cible === pl;

  }
}
