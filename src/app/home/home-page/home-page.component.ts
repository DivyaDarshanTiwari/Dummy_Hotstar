import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { MainRailerComponent } from '../Railers/main-railer/main-railer.component';
import { Data1Service } from '../../shared/data1.service';
import { Data1Interface } from '../../data1-interface';
import { MoviesService } from '../../shared/search/search.service';
import { CharactersService } from '../../shared/Characters/characters.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroBannerComponent, MainRailerComponent],
})
export class HomePageComponent {

  constructor(private data:Data1Service,private movie_service:MoviesService,private character_service:CharactersService){
  }
  data1:Data1Interface[] = this.data.getData1();
  catchData(item: Data1Interface) {
    this.movie_service.set_selected_Item(null);
    this.character_service.get_selected(null);
    this.data.getId(item)
  }
}
