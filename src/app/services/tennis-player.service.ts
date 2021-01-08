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
      mail: ''
    }, {
      id: 2,
      name: 'Pat',
      firstName: 'PAAAT',
      mail: ''
    }, {
      id: 3,
      name: 'Stephan',
      firstName: 'STEPHAAAN',
      mail: ''
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
    debugger
}

}
