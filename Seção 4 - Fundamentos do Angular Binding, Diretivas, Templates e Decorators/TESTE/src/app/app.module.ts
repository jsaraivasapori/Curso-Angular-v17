import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeBindinExampleComponent } from './attribute-bindin-example/attribute-bindin-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeBindinExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
