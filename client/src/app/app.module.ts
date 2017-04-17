import { ApolloModule } from 'apollo-angular';
import { provideClient } from './client';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BullsComponent } from './bulls/bulls.component';

@NgModule({
  declarations: [
    AppComponent,
    BullsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.forRoot( provideClient )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
