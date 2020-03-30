import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { NgModule } from '@angular/core';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: GameListComponent },
  { path: 'edit', component: EditGameComponent },
  { path: 'detail/:id', component: GameDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
  
  @NgModule({
    imports: [
      RouterModule.forRoot( appRoutes )
  
   ],
exports: [RouterModule]
})
  export class AppRoutingModule { }
  