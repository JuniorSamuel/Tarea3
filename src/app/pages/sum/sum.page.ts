import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface value {
  key: string,
  value: {
    num1: number,
    num2: number
  }
}

@Component({
  selector: 'app-sum',
  templateUrl: './sum.page.html',
  styleUrls: ['./sum.page.scss'],
  providers: []
})
export class SumPage {

  value = { num1: null, num2: null }
  results: value[] = [];
  key: number = 0;

  constructor(private storage: Storage) { this.init() }

  calculate() {// Registramos los valores en la base de datos
    if (this.value.num1 != null && this.value.num2 != null) { // validamos los datos
      let item: value = { key: `${++this.key}`, value: { num1: this.value.num1, num2: this.value.num2 } };
      this.results.unshift(item);
      this.set(item);
    }
    this.value = {num1: null, num2: null}; //Reseteamos los valores
  }

  delete(v: value) {
    this.results = this.results.filter((x) => x != v);
    this.storage.remove(v.key);
  }

  async init() { //iniciamos la base de datos y cargamos los datos almacenados
    const storage = await this.storage.create();
    this.storage = storage;
    this.key = await this.getkey();
    storage.forEach((value: any, key: any, index: any) => {
      this.results.unshift({key: key, value: value});
    });
  
  }

  //Obtenemos en el valor de la ultima llava guardada en el IndexDB
  async getkey(){
    let lenght = await this.storage.length();;
    let keys = await this.storage.keys();
    console.log(keys[lenght-1] || "0")
    return parseInt(keys[lenght-1] || "0");
  }


  public async set(value: value) {
    await this.storage?.set(value.key, value.value);
  }

}
