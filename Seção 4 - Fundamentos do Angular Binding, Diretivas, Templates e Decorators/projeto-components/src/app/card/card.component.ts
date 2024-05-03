import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  buttonClicked(valueEmitted : boolean) : void{
    console.log('buttonClicked- componente pai valor:',valueEmitted)
  }
}
