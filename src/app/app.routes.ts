import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { ListComponent } from './components/list/list.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ObjetiveComponent } from './components/objetive/objetive.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'list', component: ListComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'objetive', component: ObjetiveComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
