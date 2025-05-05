import {Component} from '@angular/core';
import {Player} from './player'
@Component({
  selector: 'app-player-list',
  standalone: false,
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent{

  playerList: Player[] = [
    new Player(1,"messi","fcb",123456789,30),
    new Player(2,"ronaldo","rma",123456789,27),
    new Player(3,"yamal","fcb",123456789,32),
  ]



}
