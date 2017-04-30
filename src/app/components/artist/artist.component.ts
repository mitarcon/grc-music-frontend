import { Component, OnInit } from '@angular/core';
import { GrcMusicService } from '../../services/grc-music.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist = {};

  constructor( private _grcMusicService: GrcMusicService ) { }

  ngOnInit() {
    this.artist = this._grcMusicService.getArtist();
    console.log("artist ",this.artist);
  }

}
