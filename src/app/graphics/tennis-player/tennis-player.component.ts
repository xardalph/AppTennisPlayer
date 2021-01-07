import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';
import {TennisPlayerService} from "../../services/tennis-player.service";

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

  // propriétés


  // constructeurs et initialiseurs
  constructor(private playersList: TennisPlayerService) {}

  public cible = this.playersList.playersList[1];


  public player: TennisPlayer = (this.playersList.playersList)[1];
  modify = false;



  ngOnInit(): void {
  }


  public  changeCible(pl: TennisPlayer): void{
    this.cible = pl;
  }

  // méthodes et fonctions
  public onClick(): void{
    this.player.firstName = 'Jim';
    this.player.name = 'Courier';
    this.modify = !this.modify;
  }

  public showText() {
    return this.modify;
  }
}
