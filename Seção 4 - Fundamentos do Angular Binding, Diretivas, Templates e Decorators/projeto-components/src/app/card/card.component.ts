import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // input cria uma propriedade e um atributo no seletor do componente
  @Input({alias:'planTypeAlias', required: true}) planType : string = "" // isso é uma atributo do componente
   // ao usar o input, o atributio daqui fica igual a propriedade do dom do elemento na componente pai
  @Input({required:true}) planPrice : number = 0 // so compila esse componente quando esse input tem valor ao ser referenciado no componente pai


  buttonClicked(valueEmitted : boolean) : void{
    console.log('buttonClicked- componente pai valor:',valueEmitted)
  }
}
