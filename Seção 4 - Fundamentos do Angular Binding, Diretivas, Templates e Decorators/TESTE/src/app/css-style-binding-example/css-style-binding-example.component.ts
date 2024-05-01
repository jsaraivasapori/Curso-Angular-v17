import { Component } from '@angular/core';

@Component({
  selector: 'app-css-style-binding-example',
  templateUrl: './css-style-binding-example.component.html',
  styleUrls: ['./css-style-binding-example.component.css']
})
export class CssStyleBindingExampleComponent {
  widthButton1 = '110px'
  widthButton2 = 130
  backGroundButton1 = 'blue'
  backGroundButton2 = 'pink'
  stylesObj = {
    width:'160px',
    backgroundColor: 'gray'}

    updateStyleObj() : void{
      //Forma errada. Não retorna um novo obj, somente muda as prorpiedades dele. 
      //Assim o Angular n é alertado da mudança do objeto para o binding
      console.log(this.stylesObj);
      
      this.stylesObj.width = '200px'
      this.stylesObj.backgroundColor = 'lightblue'
      console.log(this.stylesObj);
    }
    updateStyleObjCorrect() : void{
      this.stylesObj = {
        width: '170px',
        backgroundColor: 'lightblue'
      }     
      
    }
    updatewidth() : void{
      this.widthButton2 = 200
    }
}
