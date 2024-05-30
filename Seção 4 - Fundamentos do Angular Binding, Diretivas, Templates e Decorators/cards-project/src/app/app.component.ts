import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cardSimples = {
    tipo: 'Simples',
    valor: 100,
  }

  cardCompleto = {
    tipo: 'Completo',
    valor: 200
  }


  onCardButtonClicked(){
    console.log('onCardButtonClicked');
    //Aqui entraria uma chamada Http. Sempre faz no componente pai.
    //pois os filhos podem ser reutilizaveis em outros locais
  }
}
