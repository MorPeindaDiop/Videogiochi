import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameListStored: GameItem[] = [
    { id: 1, description: "gioco bello", name: "Bioshock", genre: "Sparatutto", releaseDate: new Date(2007, 4)},
    { id: 2, description: "Sport", name: "Fifa20", genre: "Sparatutto", releaseDate: new Date(2020, 1)},
    { id: 3, description: "Avventura", name: "GTA", genre: "Sparatutto", releaseDate: new Date(2000, 6)}
  ];

  constructor() { }

  getGameList(): GameItem[] {
    return this.gameListStored;
  }

  getGameItem(id: number): GameItem {
    return this.gameListStored.find(item =>{
      return item.id === id;
    });
  }

}
