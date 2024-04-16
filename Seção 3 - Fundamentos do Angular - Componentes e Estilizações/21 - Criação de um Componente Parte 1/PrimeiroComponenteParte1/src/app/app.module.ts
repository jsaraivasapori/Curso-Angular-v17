import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';



@NgModule({
  //Componentes sempre em declarations. Jamais em imports
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, //Caso eu queira usar um componente de outro modulo, e aqui que eu importo o modulo do componente alvo. Sempre importo componente e nunca modulo
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
