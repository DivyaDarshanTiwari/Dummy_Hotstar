import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from '../shared/Characters/characters.service';
import { type CharaterInterface } from '../shared/Characters/charater-interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Data1Service } from '../shared/data1.service';
import { MoviesService } from '../shared/search/search.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charaters',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatTooltipModule,RouterLink,LazyLoadImageModule,FormsModule],
  templateUrl: './charaters.component.html',
  styleUrl: './charaters.component.css',
})
export class CharatersComponent implements OnInit , OnDestroy{
  protected character_Data?: CharaterInterface[];
  private unsubscribe_item?:any;
  protected searched_name?: string ="";
  protected placeholderImage: string =
    'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg';
  constructor(private charater_Service: CharactersService , private data1service: Data1Service , private movieService:MoviesService) {}

  ngOnInit(): void {
    this.getting_data();
  }

  protected getting_data(): void {
    this.unsubscribe_item=this.charater_Service.getData(this.searched_name).subscribe({
      next: (value) => {
        this.character_Data = value.data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  search() {
    this.getting_data();
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

  selectedCharater(selected_Charater: CharaterInterface) {
    this.data1service.getId(null);
    this.movieService.set_selected_Item(null)
    this.charater_Service.get_selected(selected_Charater)
    }

    ngOnDestroy(): void {
     this.unsubscribe_item.unsubscribe();
    }
}
