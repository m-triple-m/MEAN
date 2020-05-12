import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path : 'oneway', component : OnewaybindingComponent },
  { path : 'twoway', component : TwoWayComponent },
  { path : 'form', component : ReactiveFormComponent },
  { path : 'signup', component : RegisterComponent },
  { path : 'signin', component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
