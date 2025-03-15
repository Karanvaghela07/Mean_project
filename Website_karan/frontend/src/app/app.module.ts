import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // ✅ Import this for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component'; // ✅ Import HomeComponent

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent  // ✅ Declare HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  // ✅ Add this
    FormsModule,  
    RouterModule.forRoot([
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: HomeComponent }, // ✅ Use HomeComponent
      { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
