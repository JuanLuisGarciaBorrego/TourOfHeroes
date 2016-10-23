import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Import my components
import {  HeroesComponent } from './component/heroes.component';
import { HeroDetailComponent } from './component/hero-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HeroesComponent, HeroDetailComponent ],
  bootstrap: [  HeroesComponent ]
})
export class AppModule { }
