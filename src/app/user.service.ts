import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userslist = [];
  username = "MMM";
  password = "12345";

  constructor() { }

  test(){
    console.log('Service Works...');
  }

  adduser(user){
    this.userslist.push(user);
  }

}
