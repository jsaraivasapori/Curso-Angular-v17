import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personSelectedIndex : number | undefined

  peopleList = [
    {
      name: 'João Vitor',
      age: 24
    },
    {
      name: 'Vitor',
      age: 44
    },
    {
      name:"Matheus",
      age: 44
    },
    {
      name:"Rosangela",
      age: 54
    }
  ]

  selectPerson(index:number){
    this.personSelectedIndex = index
    
  }
}
