import { Component, EventEmitter, Output } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  // Ao usar output assim como no input, é criado uma propriedade no componente com o mesmo nome da propriedade no componente filho,
// neste caso buttonClickEmitter
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>() //<> to especificando a tipagem do valor a er transmitido

  onButtonClick() : void {
    console.log(`onButtonClick`);
    this.buttonClickEmitter.emit(true)
    
  }
}