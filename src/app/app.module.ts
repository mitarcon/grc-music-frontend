import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Route
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { ListComponent } from './components/list/list.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ObjetiveComponent } from './components/objetive/objetive.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Services
import { GrcMusicService } from './services/grc-music.service';

// Pipes
import { WithoutPicturePipe } from './pipes/without-picture.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    ListComponent,
    ArtistComponent,
    ObjetiveComponent,
    AboutMeComponent,
    NavbarComponent,
    WithoutPicturePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    GrcMusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
