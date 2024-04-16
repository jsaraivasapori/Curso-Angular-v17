import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [
    CardComponent, 
    CardRoxoComponent, 
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    CardComponent, 
    CardRoxoComponent, 
    //Componentes filhos nao preciso exportar, pois ja estou exportando o pai deles
    // CardButtonComponent,
    // CardRoxoButtonComponent
  ]
})
export class CardsModule { }
