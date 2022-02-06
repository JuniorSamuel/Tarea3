import { Injectable } from '@angular/core';
import { value } from "../pages/sum/sum.page";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private arrary: any[] = []
  constructor(private storage: Storage) { 
    this.init()
  }

  async init() {
    const storage =  await this.storage.create();
    this._storage = storage;
    storage.forEach((key: any, value: any, index: any) => {
      console.log(`key: ${key} value: ${value} index: ${index}`)
      this.arrary.push(value);
    });
  }

  public async set(value: any) {
    await this._storage?.set(`key-${ parseInt(`${Math.random() * 100}`)}`, value);
  }
  public async getAll(): Promise<any[] | value[]>{
    console.log(this.arrary);
    return await this.arrary;
  }
}
