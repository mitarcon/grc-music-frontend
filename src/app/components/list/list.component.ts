import { Component, OnInit } from '@angular/core';
import { GrcMusicService } from '../../services/grc-music.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public listArtist = [];
  public searching: boolean;

  constructor( private _grcMusicService: GrcMusicService ) { }

  ngOnInit() {
    // getQueryParams();
    // this.makeSearch();
  }

  makeSearch( ) {
    this.searching = true;
    this._grcMusicService.search()
      .subscribe(artist => {
        this.listArtist = artist;
        this.searching = false;
      });
  }

  // getQueryParams(){
  //
  // }

}
