import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

  // propriétés

  public playersList: TennisPlayer[] = [
    {
      id: 1,
      name: 'Jim',
      firstName: 'JIIIM'
    }
    ,
    {
      id: 2,
      name: 'Pete',
      firstName: 'PEEETE'
    }, {
      id: 3,
      name: 'Pat',
      firstName: 'PAAAT'
    }, {
      id: 4,
      name: 'Stephan',
      firstName: 'STEPHAAAN'
    }
  ];

  public cible = this.playersList[1];


  public player: TennisPlayer = {
    id: 1,
    name: 'Sampras',
    firstName: 'Pete'
  };
  modify = false;

  // constructeurs et initialiseurs
  constructor() { }

  ngOnInit(): void {
  }

  public changeCible(pl: TennisPlayer) {
    this.cible = pl;
  }

  // méthodes et fonctions
  public onClick() {
    this.player.firstName = "Jim";
    this.player.name = "Courier";
    this.modify = !this.modify;
  }

  public showText() {
    return this.modify;
  }
}
