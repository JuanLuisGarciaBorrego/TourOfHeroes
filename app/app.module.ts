import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Import my components
import { AppComponent } from './component/app.component';
import { HeroDetailComponent } from './component/hero-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
