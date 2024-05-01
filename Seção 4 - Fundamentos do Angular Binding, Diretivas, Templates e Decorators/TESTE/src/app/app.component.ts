import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = "Texto Inicial Alterado"
  inputType = "text"
  isdisabled = false
  ishidden = false

  disabledToggleInput() : void{
    this.isdisabled = !this.isdisabled
  }

  hiddenToggleInput() : void {
    this.ishidden =  !this.ishidden
  } 

  setPasswordTypeInput() : void{
    this.inputType = "password"
  }
  setTextTypeInput() : void{
    this.inputType = "text"
  }
  logInputText() : void {
    console.log(this.inputText)
  }
  handleInputKeyup(event:KeyboardEvent) : void{
    const currentText = (event.target as HTMLInputElement)//tipa o input com casting para poder acessar event.target.value, sem isso da erro de compilação pois n se sabe se tera o value
    console.log(currentText.value);
  }
  handleInputEvent(event:Event) : void{
    //casting
    const currentText = (event.target as HTMLInputElement)
    console.log(currentText.value);
    
  }
}
