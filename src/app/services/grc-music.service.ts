import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Artist } from '../models/artist';
import 'rxjs/add/operator/map';

@Injectable()
export class GrcMusicService {

  private urlApp: string = 'www.localhost:4201/api';
  private urlSearch: string = "/search";
  private urlGetArtist: string = "/artist";

  constructor( private _http: Http ) { }

  getArtistas(  ){
    let url = 'https://api.spotify.com/v1/search?q=daddy+yankee&type=artist';

    return this._http.get( url )
      .map( res => {
        console.log(  "bla ",res.json() );

        return res.json();
      });
  }

  search(){
    let url = 'http://www.localhost:4201/artist?query=daddy&code=asdds';

    return this._http.get( url )
    .map( res => {
      console.log(  "search ",res.json().artist );

      return res.json().artist;
    });

  }

  getArtist(){
    return {
      name: 'cantante uno',
      followers: 12345678,
      id: 'g67uygj7ui9',
      img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
      from: 'spotify',
      url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
      tracks: [
        {
          name: "cancion 1",
          id: "sfvg54eg",
          img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
          url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png'
        },
        {
          name: "cancion 2",
          id: "sfvg54eg",
          img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
          url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png'
        },
        {
          name: "cancion 3",
          id: "sfvg54eg",
          img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
          url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png'
        },
      ]
    }
  }

}
