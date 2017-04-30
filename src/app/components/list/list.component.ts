import { Component, OnInit } from '@angular/core';
import { GrcMusicService } from '../../services/grc-music.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  listArtist = [];

  constructor( private _grcMusicService: GrcMusicService ) { }

  ngOnInit() {
    this.listArtist = this._grcMusicService.search();
  }

}
