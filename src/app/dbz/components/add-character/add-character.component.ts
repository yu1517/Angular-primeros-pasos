import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {             //va a emitir el caracter 
    console.log(this.character);
    if (this.character.name.length === 0) return;

    //emito una copia del objeto para evitar problemas con la mutabilidad
    //this.onNewCharacter.emit({-...this.character});        -> echo por el compa gpt
    this.onNewCharacter.emit(this.character);

    //reinicio el formulario despues de emitir el evento
    this.character = { name: '', power: 0 };
    // this.character.name = '';
    // this.character.power = 0;
  }
}
