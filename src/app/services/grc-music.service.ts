import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable()
export class GrcMusicService {

  private urlApp: string = 'www.localhost:4201/api';
  private urlSearch: string = "/search";
  private urlGetArtist: string = "/artist";

  constructor() { }

  search(){
    return [
      {
        name: 'cantante uno',
        followers: 12345678,
        id: 'g67uygj7ui9',
        img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
        from: 'spotify',
        url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
      },
      {
        name: 'cantante dos',
        followers: 87324,
        id: 'g67uygj7ui9',
        img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
        from: 'spotify',
        url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
      },
      {
        name: 'cantante tres',
        followers: 7689,
        id: 'g67uygj7ui9',
        img: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
        from: 'spotify',
        url: 'http://www.grcsoluciones.com/wp-content/uploads/2016/11/vent-sec-03.png',
      }
    ]
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
