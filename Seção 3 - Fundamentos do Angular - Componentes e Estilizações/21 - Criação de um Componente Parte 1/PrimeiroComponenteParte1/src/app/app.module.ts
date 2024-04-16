import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRoxoButtonComponent } from './card-roxo-button/card-roxo-button.component';

@NgModule({
  declarations: [
    AppComponent, //Componentes sempre em declarations. Jamais em imports
    CardComponent, 
    CardRoxoComponent, CardButtonComponent,CardRoxoButtonComponent
  ],
  imports: [
    BrowserModule //Caso eu queira usar um componente de outro modulo, e aqui que eu importo o modulo do componente alvo. Sempre importo componente e nunca modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
