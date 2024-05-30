import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome:string = 'João'

// Desnecessario com two way data binding
  // handleInputChange(event : string){

  //   console.log(event);
    

  //   this.nome = event

  // }
}
