import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {TennisPlayerService} from '../../services/tennis-player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  constructor(private fb: FormBuilder, private tplayerService: TennisPlayerService) { }

  playerForm = this.fb.group({
    id: [this.tplayerService.selectedPlayer.id],
    name: [this.tplayerService.selectedPlayer.name, [Validators.required]],
    firstName: [this.tplayerService.selectedPlayer.firstName, Validators.required],
    email: [this.tplayerService.selectedPlayer.mail, Validators.required]
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

    this.tplayerService.update(this.playerForm.value);

  }

}
