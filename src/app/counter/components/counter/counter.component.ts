import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <!-- <h1>{{title2}}</h1> -->
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `,
    standalone: false,  
})
export class CounterComponent {
    //public title2: string = 'Hola Counter!';
    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter():void {
        this.counter = 10;
    }
}