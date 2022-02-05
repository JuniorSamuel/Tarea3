import { Component, OnInit } from '@angular/core';
import { TranslateNumService } from '../../services/translate-num.service';

@Component({
  selector: 'app-translate-num',
  templateUrl: './translate-num.page.html',
  styleUrls: ['./translate-num.page.scss'],
  providers: [TranslateNumService]
})
export class TranslateNumPage implements OnInit {

  value: number = null;
  result: string;
  constructor(private translate: TranslateNumService) { }

  ngOnInit() {
  }

  change(){
    this.result = this.translate.numToStrings(this.value);
  }

}
