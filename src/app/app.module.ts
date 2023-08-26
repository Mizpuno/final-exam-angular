import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TheaterComponent } from './theater/theater.component';
import { TheaterModule } from './theater/theater.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TheaterModule, HttpClientModule,
    RouterModule.forRoot([
      {path: 'theater', component: TheaterComponent},
      {path: 'theater/show/:id', component: CheckoutComponent },
      {path: '**', redirectTo: '/theater'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
