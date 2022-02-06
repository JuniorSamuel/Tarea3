import { Component, OnInit } from '@angular/core';
import { TranslateNumService } from '../../services/translate-num.service';

@Component({
  selector: 'app-translate-num',
  templateUrl: './translate-num.page.html',
  styleUrls: ['./translate-num.page.scss'],
  providers: [TranslateNumService]
})
export class TranslateNumPage {

  value: number = null;
  result: string;
  constructor(private translate: TranslateNumService) { }

  change(){
    if(this.value >= 0 && this.value <=1000000)
      this.result = this.translate.numToStrings(this.value);
    else
      this.result = 'Cantidad no validad';
  }

}
