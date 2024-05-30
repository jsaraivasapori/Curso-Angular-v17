import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Output('buttonClicked') buttonClcikedEmitt = new EventEmitter<void>()

  @Input({required: true}) planType : string = ''

  @Input({required:true}) planPrice:number  = 0

  @Input({required:true})
  cardStyle: 'orange'| 'purple' = 'orange'

  onButtonClicked(){
    this.buttonClcikedEmitt.emit()
  }
}
