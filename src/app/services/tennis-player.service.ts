import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayerService {
  private playersList: TennisPlayer[] = [
    {
      id: 0,
      name: 'Jim',
      firstName: 'JIIIM',
      mail: ''
    },
    {
      id: 1,
      name: 'Pete',
      firstName: 'PEEETE',
      mail: 'ge@gefe'
    }, {
      id: 2,
      name: 'Pat',
      firstName: 'PAAAT',
      mail: 'fed@ghie'
    }, {
      id: 3,
      name: 'Stephan',
      firstName: 'STEPHAAAN',
      mail: 'gdesdfse@g.gfed'
    }
  ];

  public selectedPlayer: TennisPlayer;
  public nom = 'Titi';
  constructor(private http: HttpClient) {
    if (this.playersList && this.playersList.length){
      this.selectedPlayer = this.playersList[0];
    }

  }

  getAllPlayer(): TennisPlayer[]{

    return this.playersList;
  }

  add(newPlayer: TennisPlayer): void{
    this.playersList.push(newPlayer);
  }

  update(updatedPlayer: TennisPlayer): void{
    console.log(updatedPlayer);

    this.playersList[updatedPlayer.id] = updatedPlayer;


  }

}
