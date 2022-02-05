import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.page.html',
  styleUrls: ['./multiplication.page.scss'],
})
export class MultiplicationPage{
  
  numbers: number[];
  maxValueMult: number = 13;
  value: number = 12;
  constructor() { 
    this.numbers = Array(this.maxValueMult).fill(1).map((x,i)=>i+1);
  }
}
