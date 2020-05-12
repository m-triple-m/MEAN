import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {

  num = 10;

  age : number = 50;

  // color = '#aaaaaa'
  // red;
  // green;
  // blue;


  avenger = {
    characters : ['iron man', 'thor', 'hulk'],
    year : 2009,
    company : 'marvel'
  }

  path = "https://i2-prod.mirror.co.uk/incoming/article4330476.ece/ALTERNATES/s1200b/Spongebob-Squarepants.jpg"

  imgheight = 50;

  constructor() { }

  ngOnInit(): void {
    this.age +=1;
    console.log('tyypescript!!')
    console.log(this.age);
    // this.age = '30';
    // return 78; 
  }

  increaseSize(){
    this.imgheight+=10;
    console.log(this.imgheight);
  }

}
