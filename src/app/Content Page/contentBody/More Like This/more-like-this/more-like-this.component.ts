import { Component } from '@angular/core';
import { DataMore } from '../DataMore.1';
import { CommonModule, NgFor } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-more-like-this',
  standalone: true,
  imports: [CommonModule,MatCard,NgFor],
  templateUrl: './more-like-this.component.html',
  styleUrl: './more-like-this.component.css'
})
export class MoreLikeThisComponent {

  item=DataMore[0]; // index is where the id goes of the selected show or movies
}
