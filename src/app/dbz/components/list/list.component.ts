import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()       //HIJO
  public characterList: Character[] = [{
    name: 'Trunks',                    //si no me mandan nada, estos van a ser los valores por defecto
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    if (!id) return;
    //console.log({ id });
    this.onDelete.emit(id);
  }
}
