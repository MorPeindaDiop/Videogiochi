import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input()
  gameId: number;

  game: GameItem;

  constructor(private gameListService: GameListService,private activedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activedRoute.paramMap.subscribe(params=>{
    this.game = this.gameListService.getGameItem(Number(params.get('id')));
  })
  }

}
