import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule   //lo tengo que importar ya que heroe y list tienen ngif y else, etc, mirar documentacion
    ]
})
export class HeroesModule {

}