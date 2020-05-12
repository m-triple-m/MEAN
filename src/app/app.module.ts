import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwoWayComponent } from './two-way/two-way.component';

//import FormsModule to use two way databinding
import { FormsModule } from '@angular/forms';

//import ReactiveFormsModule to use Forms
import { ReactiveFormsModule } from '@angular/forms';

//importing sweetalert module to use it
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OnewaybindingComponent,
    TwoWayComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
