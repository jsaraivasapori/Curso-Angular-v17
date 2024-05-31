import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  minhaProp = true;
  pessoa : any= {
    status: 1,
    name: undefined
  }

  toggleProp(){
    this.minhaProp = !this.minhaProp 
    console.log("clicou");
    
  }

  isTrusthy(){
    // return {}
    // return[]
    // return true
    // return 1
    // return "teste"
    // return 0
    // return "false"
    // return this.pessoa.status
  }

  isFalsy(){
    // return false
    // return 0
    // return ""
    // return ''
    // return null
    // return undefined
    // return -0
    // return NaN
    // return this.pessoa.name
    // return this.pessoa.edereco?.rua

  }

}
