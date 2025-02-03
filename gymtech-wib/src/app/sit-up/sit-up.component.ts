import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player'

@Component({
  selector: 'app-sit-up',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './sit-up.component.html',
  styleUrl: './sit-up.component.css'
})
export class SitUpComponent {

}
