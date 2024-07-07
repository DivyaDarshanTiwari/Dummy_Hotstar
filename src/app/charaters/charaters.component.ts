import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/Characters/characters.service';
import { type CharaterInterface } from '../shared/Characters/charater-interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-charaters',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatTooltipModule],
  templateUrl: './charaters.component.html',
  styleUrl: './charaters.component.css',
})
export class CharatersComponent implements OnInit {
  protected character_Data?: CharaterInterface[];
  protected placeholderImage: string =
    'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg';
  constructor(private charater_Service: CharactersService) {}
  ngOnInit(): void {
    this.getting_data();
  }

  protected getting_data(): void {
    this.charater_Service.getData().subscribe({
      next: (value) => {
        this.character_Data = value.data;
      },
      error: (error) => {
        console.log('An error has occured');
        console.error(error);
      },
    });
  }

  Image_Not_load(event: ErrorEvent) {
    (event.target as HTMLImageElement).src = this.placeholderImage;
  }

  getToolTip(value:string[]){
    let x:string = '';
    for(let i = 0; i<value.length;i++){
      x = x.concat(value[i]);
    }
    return x;
  }
}
