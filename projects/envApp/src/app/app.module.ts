import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EnvironmentModule} from 'ng-environment'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnvironmentModule.forRoot('assets/config.json')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
