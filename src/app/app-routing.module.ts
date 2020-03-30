import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'game-list', component: GameListComponent },
    { path: 'game-detail', component: GameDetailComponent },
    { path: '', redirectTo:'Home', pathMatch:'full' },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
  
   ],
exports:[RouterModule]
})
  export class AppRoutingModule { }
  