import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';


@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.css']
})
export class TennisPlayerComponent implements OnInit {

  public name = "Evan";
  public player: TennisPlayer = {
    id:1,
    name:'toto',
    firstname:'pete'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
