import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform;
  users;

  constructor(private fb: FormBuilder, public userservice: UserService) { }

  ngOnInit(): void {
    this.initForm();
    // this.userservice.test();
    this.users = this.userservice.userslist;
  }

  initForm(){
    this.registerform = this.fb.group({
      name : '',
      username : '',
      email : '',
      password : '',
    })
  }

  submitForm(formdata){
    
    //do stuff to with formdata
    
  }

  deleteUser(index){
    console.log(index);
  }

}
