import { Injectable } from '@angular/core';

export interface word {
  id: number,
  text: string[],
  ischange: boolean
}

export const dictionary: word[] = [
  {id: 1, text: ["uno"], ischange: false},
  {id: 2, text: ["dos"], ischange: false},
  {id: 3, text: ["tres"], ischange: false},
  {id: 4, text: ["cuatro"], ischange: false},
  {id: 5, text: ["cinco"], ischange: false},
  {id: 6, text: ["seis"], ischange: false},
  {id: 7, text: ["siete"], ischange: false},
  {id: 8, text: ["ocho"], ischange: false},
  {id: 9, text: ["nueve"], ischange: false},
  {id: 10, text: ["diez", "dieci"], ischange: true},
  {id: 11, text: ["once"], ischange: false},
  {id: 12, text: ["doce"], ischange: false},
  {id: 13, text: ["trece"], ischange: false},
  {id: 14, text: ["catorce"], ischange: false},
  {id: 15, text: ["quince"], ischange: false},
  {id: 16, text: ["dieciséis"], ischange: false},
  {id: 17, text: ["diecisiete"], ischange: false},
  {id: 18, text: ["dieciocho"], ischange: false},
  {id: 19, text: ["diecinueve"], ischange: false},
  {id: 20, text: ["veinte", "veinti"], ischange: true},
  {id: 30, text: ["treinta"], ischange: false},
  {id: 40, text: ["cuarenta"], ischange: false},
  {id: 50, text: ["cincuenta"], ischange: false},
  {id: 60, text: ["sesenta"], ischange: false},
  {id: 70, text: ["setenta"], ischange: false},
  {id: 80, text: ["ochenta"], ischange: false},
  {id: 90, text: ["noventa"], ischange: false},
  {id: 100, text: ["cien", "ciento"], ischange: true},
  {id: 200, text: ["doscientos"], ischange: false},
  {id: 300, text: ["trescientos"], ischange: false},
  {id: 400, text: ["cuatrocientos"], ischange: false},
  {id: 500, text: ["quinientos"], ischange: false},
  {id: 600, text: ["seiscientos"], ischange: false},
  {id: 700, text: ["setecientos"], ischange: false},
  {id: 800, text: ["ochocientos"], ischange: false},
  {id: 900, text: ["novecientos"], ischange: false},
  {id: 1000, text: ["mil"], ischange: false}
]

@Injectable({
  providedIn: 'root'
})
export class TranslateNumService {
  
  constructor() { 
    dictionary.reverse();
  }

  numToStrings(n: number): string{

    if(n === 0) return 'cero';
    let text: string = '';
    let temp, p: number;
    let is: boolean = false;
    dictionary.forEach((x) => {
      if(n >= x.id){

        p = n - (n % x.id);

        if(p>=20 && p <= 29){
          text += x.text[1]
          is = true;
        }else if( p <11 && text != '' && !is ){
          text += ' y ' + x.text[0];
        }else{
          text += n != undefined ? x.text[0] + ' ' : '';
        }
        n %= x.id;
        temp = n;
      }
    });

    return text;
  }
}
