import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input({required:true}) dataId!:number;
  
  ngOnInit(): void {
    this.data.emit(this.item);
  }

  item:MoreLikeThisInterface[]=DataMore; // index is where the id goes of the selected show or movies

  get cards(){
    return this.item.filter((data)=> data.id === this.dataId);
  }
}
