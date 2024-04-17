import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import {MatSliderModule} from '@angular/material/slider'; 



@NgModule({
  declarations: [
    CardComponent, 
    CardRoxoComponent, 
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent, 
  ],
  imports: [
    CommonModule,
    MatSliderModule
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
