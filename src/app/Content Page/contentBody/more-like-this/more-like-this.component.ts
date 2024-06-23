import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataMore } from './DataMore.1';
import { CommonModule, NgFor } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MoreLikeThisInterface } from './more-like-this-interface';

@Component({
  selector: 'app-more-like-this',
  standalone: true,
  imports: [CommonModule,MatCard,NgFor],
  templateUrl: './more-like-this.component.html',
  styleUrl: './more-like-this.component.css'
})
export class MoreLikeThisComponent implements OnInit{

  @Output() data = new EventEmitter();
  
  ngOnInit(): void {
    this.data.emit(this.item);
  }

  item:MoreLikeThisInterface=DataMore[0]; // index is where the id goes of the selected show or movies
}
