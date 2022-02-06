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

  constructor(private storage: Storage) { this.init() }

  calculate() {
    if (this.value.num1 != null && this.value.num2 != null) {
      let item: value = { key: `key-${parseInt(`${Math.random() * 100}`)}`, value: { num1: this.value.num1, num2: this.value.num2 } };
      this.results.unshift(item);
      this.set(item);
    }

    this.value = {num1: null, num2: null};
    console.log(this.results)
  }

  delete(v: value) {
    this.results = this.results.filter((x) => x != v);
    this.storage.remove(v.key);
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
    storage.forEach((value: any, key: any, index: any) => {
      console.log(value)
      this.results.push({key: key, value: value});
    });
  }

  public async set(value: value) {
    await this.storage?.set(value.key, value.value);
  }

}
