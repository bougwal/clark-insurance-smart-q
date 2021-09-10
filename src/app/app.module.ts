import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainViewComponent } from './containers/main-view/main-view.component';
import { TextComponent } from './components/text/text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { OneOptionComponent } from './components/one-option/one-option.component';
import { FormsModule } from '@angular/forms';
import { ManyOptionsComponent } from './components/many-options/many-options.component';
import { NextButtonComponent } from './components/next-button/next-button.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    MainViewComponent,
    TextComponent,
    OneOptionComponent,
    ManyOptionsComponent,
    NextButtonComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
