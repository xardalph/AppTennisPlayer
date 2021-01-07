import { Component, OnInit } from '@angular/core';
import {TennisPlayerService} from '../../services/tennis-player.service';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private fb: FormBuilder, private tplayerService: TennisPlayerService) { }

  playerForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    firstName: ['', Validators.required]
  });
  ngOnInit(): void {
  }

  shouldShowRequiredError(control: AbstractControl): boolean {
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl): boolean {
    return !control.pristine && control.invalid;
  }

  submit(): void {
    // tslint:disable-next-line:no-debugger
    this.tplayerService.add(this.playerForm.value);
//    this.player = this.playerForm.value;
  }
}
