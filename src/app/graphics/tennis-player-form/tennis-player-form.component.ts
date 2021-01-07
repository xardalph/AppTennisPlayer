import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TennisPlayer } from 'src/app/Model/tennis-player';
import { TennisPlayerService } from 'src/app/services/tennis-player.service';

@Component({
  selector: 'app-tennis-player-form',
  templateUrl: './tennis-player-form.component.html',
  styleUrls: ['./tennis-player-form.component.scss']
})
export class TennisPlayerFormComponent implements OnInit {



  public player: TennisPlayer = {
    id: 1,
    firstName: 'Pete',
    name: 'Sampras',
    mail: 't@t.com'
  };

  constructor(private fb: FormBuilder, private _tplayerService: TennisPlayerService) {

  }

  playerForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    firstName: [''],
    mail: ['', [Validators.required, Validators.email]]

  });

  ngOnInit(): void {
    // initialiser les données du formulaire avec une valeur (en cas de modification par exemple)
    this.playerForm.setValue(this.player);
  }

  submit(): void {
      this.player = this.playerForm.value;
  }


  shouldShowRequiredError(control: AbstractControl): boolean{
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl): boolean{
    return !control.pristine && control.invalid;
  }

  getNom(): string {
    return this._tplayerService.nom;
  }

}
