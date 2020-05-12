import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginform;
  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.loginform = this.fb.group({
      username : '',
      password : '',
    })
  }

  submitForm(formdata){
    console.log(formdata);

    if(formdata.username == this.userservice.username){
      if(formdata.password  == this.userservice.password){
        // alert('you have logged in successfully!!');
        Swal.fire({
          icon : 'success',
          title : 'Well done!!',
          text : 'You have successfully logged in.'
        })
      }
      else{
        // alert('Your Username or password is wrong');
        Swal.fire({
          icon : 'error',
          title : 'OOps!!',
          text : 'Username or password in incorrect.'
        })
      }
    }
    else{
      // alert('Your Username or password is wrong');
      Swal.fire({
        icon : 'error',
        title : 'OOps!!',
        text : 'Username or password in incorrect.'
      })
    }
  }

}
