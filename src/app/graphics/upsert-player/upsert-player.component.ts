import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-upsert-player',
  templateUrl: './upsert-player.component.html',
  styleUrls: ['./upsert-player.component.css']
})
export class UpsertPlayerComponent implements OnInit {

  update = 1;

  constructor(private fb: FormBuilder) { }

  UpsertPlayerComponent = this.fb.group({

    name: ['', [Validators.required]],
    firstName: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  DoAdd(): void {

    this.update = 0;

  }
  DoUpdate(): void{
    this.update = 1;
  }
  shouldUpdate(): boolean {

    return !!this.update;
  }

}
