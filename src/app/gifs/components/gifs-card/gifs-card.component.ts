import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';


@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',

})
export class GifsCardComponent  implements OnInit{

  @Input()
  public gifs: Gif[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
