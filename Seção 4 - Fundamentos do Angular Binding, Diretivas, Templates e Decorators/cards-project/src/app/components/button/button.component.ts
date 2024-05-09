import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>() // so avisa o pai, nao envia nada
  
  //obrigtório passar valor para esse input
  @Input( {required:true, alias:'text'})buttonText:string = '' 
  @Input({ required: true, alias: 'style' }) buttonStyle: 'white' | 'purple' = 'white'
  @Input({alias:'disabled'})isDisabled : boolean = false;

  onButtonClicked() : void{
    this.buttonClickedEmitt.emit()
  }

}
