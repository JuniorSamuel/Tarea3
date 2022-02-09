import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'start/', icon: 'home' },
    { title: 'Sumadora', url: 'suma/', icon: 'calculator' },
    { title: 'Numero-Texto', url: 'translate-num/', icon: 'book' },
    { title: 'Multiplicatión', url: 'multiplication/', icon: 'calculator' },
    { title: 'Experiencia', url: 'youtube-view/', icon: 'videocam' },
  ];

  constructor() { }  
}
