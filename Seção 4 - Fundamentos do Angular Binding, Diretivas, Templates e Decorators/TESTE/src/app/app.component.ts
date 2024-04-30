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
}
