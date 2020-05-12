import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myform;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.myform = this.fb.group({
      name : '',
      username : '',
      email : ''
    })
  }

  submitForm(formdata){
    console.log(formdata);
  }

}
