import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    MenuComponent,
    EditGameComponent,
    GameDetailComponent,
    PageNoteFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
