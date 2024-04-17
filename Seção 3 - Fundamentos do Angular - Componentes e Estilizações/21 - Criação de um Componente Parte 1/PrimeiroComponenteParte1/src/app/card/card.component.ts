import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano{
  infos: IInfos
}
interface IInfos{
  tipo:string
  preco:number
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None  //Remove a encapsulação do componente
})
export class CardComponent {
  //@ts-ignore
  plano : any={
    infos: {
      tipo:"Simples",
      preco: 100
    }
  }


  // tipo:string = 'Complexo'
  // preco:number = 150

  // getFullPrice() : string{
  //   setTimeout(()=>{
  //     this.tipo = 'Simples'
  //   },4000)
  //   return `R$ ${this.preco},00 /Mês`

  // }
}
