import { Component } from '@angular/core';
//este decorador no es mas que una funcion que transforma mi clase a que sea un componente 

@Component({
  selector: 'app-root',       //como quiero llamar mi componente 
  templateUrl: './app.component.html',      //es lo que usamos para mostrar la app
  standalone: false,  
})

export class AppComponent {
  public title: string = 'Hola Mundo!';
  /*
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }*/
}
