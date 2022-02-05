import { Component, OnInit } from '@angular/core';

interface value{
  num1: number,
  num2: number
}

@Component({
  selector: 'app-sum',
  templateUrl: './sum.page.html',
  styleUrls: ['./sum.page.scss'],
})
export class SumPage {

  value: value = {num1: null, num2: null}
  results: value[] = [{num1:10, num2:9},{num1:4, num2:7}];
  
  constructor() { }

  calculate(){
    this.results.reverse()
    if(this.value.num1 != null && this.value.num2 != null){
      this.results.push({num1: this.value.num1, num2: this.value.num2})
    }
    this.value = {num1:null, num2: null}
    this.results.reverse()
    console.log(this.results)
  }

  delete(v:value){
    this.results = this.results.filter((x) =>  x != v)
  }
}
