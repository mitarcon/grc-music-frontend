import { Component, OnInit } from '@angular/core';
import { GrcMusicService } from '../../services/grc-music.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Parameter } from '../../models/parameter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})

export class ListComponent implements OnInit {

  public listArtist = [];
  public searching: boolean;
  private param: Parameter = new Parameter();

  constructor(
    private _grcMusicService: GrcMusicService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    console.log("Paso por el init");
    this.getQueryParams();
    this.makeSearch();
  }

  makeSearch( ) {
    this.searching = true;
    this.getQueryParams();
    this._grcMusicService.search( this.param )
      .subscribe(artist => {
        this.listArtist = artist;
        this.setQueryParams();
        this.searching = false;
      });
  }

  getQueryParams(){
    this._route.queryParams.subscribe(
      qparams => this.param.getParamFromUrl( qparams )
    );
  }

  setQueryParams(){
    this._router.navigate(['.'], {
                queryParams: this.param,
                relativeTo: this._route
            });
  }

}
