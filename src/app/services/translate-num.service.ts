import { Injectable } from '@angular/core';

export interface word {
  id: number,
  text: string[],
  ischange: boolean
}

export const dictionary: word[] = [
  { id: 1, text: ["uno"], ischange: false },
  { id: 2, text: ["dos"], ischange: false },
  { id: 3, text: ["tres"], ischange: false },
  { id: 4, text: ["cuatro"], ischange: false },
  { id: 5, text: ["cinco"], ischange: false },
  { id: 6, text: ["seis"], ischange: false },
  { id: 7, text: ["siete"], ischange: false },
  { id: 8, text: ["ocho"], ischange: false },
  { id: 9, text: ["nueve"], ischange: false },
  { id: 10, text: ["diez"], ischange: false },
  { id: 11, text: ["once"], ischange: false },
  { id: 12, text: ["doce"], ischange: false },
  { id: 13, text: ["trece"], ischange: false },
  { id: 14, text: ["catorce"], ischange: false },
  { id: 15, text: ["quince"], ischange: false },
  { id: 16, text: ["dieciséis"], ischange: false },
  { id: 17, text: ["diecisiete"], ischange: false },
  { id: 18, text: ["dieciocho"], ischange: false },
  { id: 19, text: ["diecinueve"], ischange: false },
  { id: 20, text: ["veinte", "veinti"], ischange: true },
  { id: 30, text: ["treinta"], ischange: false },
  { id: 40, text: ["cuarenta"], ischange: false },
  { id: 50, text: ["cincuenta"], ischange: false },
  { id: 60, text: ["sesenta"], ischange: false },
  { id: 70, text: ["setenta"], ischange: false },
  { id: 80, text: ["ochenta"], ischange: false },
  { id: 90, text: ["noventa"], ischange: false },
  { id: 100, text: ["cien", "ciento", "cientos"], ischange: true },
  { id: 1000, text: ["mil "], ischange: false },
  { id: 1000000, text: ["un millon "], ischange: false }
]

@Injectable({
  providedIn: 'root'
})
export class TranslateNumService {

  constructor() {
    dictionary.reverse();
  }

  numToStrings(n: number): string {

    let text: string = '';

    if (n === 0) return 'cero';

    dictionary.forEach((x) => {
      if (n >= x.id) {
        let division: number = ~~(n / x.id);
        console.log(division);

        if (n >= 2000 && n <= 999999) {
          text += `${this.numToStrings(division)} ${x.text[0]} `;
        }else if(n >= 200 && n < 1000){
          let t = `${this.numToStrings(division)}${x.text[2]} `
          if(5 === division)
            text += 'quinientos ';
          else if(9 === division){
            text += `nove${x.text[2]} `
          }
          else
            text += t;
        }else if(n > 100 && n < 200){
          text += `${x.text[1]} `
        }else if(x.id >= 30 && x.id <= 90 && n % x.id != 0){
          text += ` ${x.text[0]} y `;
        }else if(x.id  == 20 && n >20){
          text += `${x.text[1]}`
        }else if( n %x.id != 0 && x.ischange){
          text += `${x.text[1]}`; 
        }else{
          text += `${x.text[0]}`;
        }

        n %= x.id;
      }
    });

    return text;
  }
}