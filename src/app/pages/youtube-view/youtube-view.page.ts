import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-youtube-view',
  templateUrl: './youtube-view.page.html',
  styleUrls: ['./youtube-view.page.scss'],
})
export class YoutubeViewPage implements OnInit {

  idVideo: string
  constructor() { 
    this.idVideo = environment.idVideo;
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  invokeVideoPlayer(){
    
  }
}
