import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  name = 'Leon S Kennedy';
  color = '#296'

  red = 100;
  green = 20;
  blue = 200;

  rgb = `rgb(${this.red}, ${this.green}, ${this.blue})`

  constructor() { }

  ngOnInit(): void {
  }

  setName(name){
    this.name = name;
  }

}
