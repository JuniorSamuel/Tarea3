import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Start', url: 'start/', icon: 'alert-circle' },
    { title: 'sum', url: 'suma/', icon: 'calculator' },
    { title: 'Translate Number', url: 'translate-num/', icon: 'book' },
    { title: 'Multiplication', url: 'multiplication/', icon: 'calculator' },
    { title: 'Youtube View', url: 'youtube-view/', icon: 'videocam' },
  ];

  constructor() {}
}
