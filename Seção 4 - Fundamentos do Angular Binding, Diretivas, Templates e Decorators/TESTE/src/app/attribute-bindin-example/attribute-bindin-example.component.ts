import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-bindin-example',
  templateUrl: './attribute-bindin-example.component.html',
  styleUrls: ['./attribute-bindin-example.component.css']
})
export class AttributeBindinExampleComponent {
  buttonTittle = "Texto Botão"
  buttonDisable = true

    onButtonClick() : void{
      this.buttonTittle = "Ttitulo Alterado!"
      this.buttonDisable = !this.buttonDisable
    }
}
