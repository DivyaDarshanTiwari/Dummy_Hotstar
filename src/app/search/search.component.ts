import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MoviesService } from '../shared/search/search.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SelectedhCardInterface } from '../shared/search/selectedh-card-interface';
import { Data1Service } from '../shared/data1.service';
import { CharactersService } from '../shared/Characters/characters.service';
import { MatTooltip } from '@angular/material/tooltip';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ConvertTitleLengthPipe } from '../PIPES/Covert Title Lenght/convert-title-length.pipe';
import { FinisedAirirngPipe } from '../PIPES/Finished Airing/finised-airirng.pipe';



interface interface1 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConvertTitleLengthPipe,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    JsonPipe,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatTooltip,
    LazyLoadImageModule,
    FinisedAirirngPipe,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {

  title = 'apitest';
  router: any;

  constructor(
    private api: MoviesService,
    private route: Router,
    private data1Service: Data1Service,
    private CharaterService: CharactersService
  ) {}

  public type: interface1[] = [
    //for type
    { value: '', viewValue: 'all' },
    { value: 'tv', viewValue: 'tv' },
    { value: 'movie', viewValue: 'movie' },
    { value: 'ova', viewValue: 'ova' },
    { value: 'special', viewValue: 'special' },
    { value: 'ona', viewValue: 'ona' },
    { value: 'music', viewValue: 'music' },
    { value: 'pv', viewValue: 'pv' },
    { value: 'tv_special', viewValue: 'tv_speacil' },
  ];
  public rating: interface1[] = [
    //for adult rating
    { value: '', viewValue: 'all' },
    { value: 'g', viewValue: 'G - All Ages' },
    { value: 'pg', viewValue: 'PG - Childrene' },
    { value: 'pg13', viewValue: 'PG-13 - Teens 13 or older' },
    { value: 'r17', viewValue: 'R - 17+ (violence & profanity)' },
  ];

  genre = new FormControl('');
  genreList: string[] = [
    'Action',
    'Romance',
    'Fantacy',
    'Shoujo',
    'Adventure',
    'Slice 0f Life',
  ];

  protected data!: any; //data is store here
  protected MainData!: SelectedhCardInterface[]; //data of the main arry of the data
  protected selectedTypeValue?: string;
  protected selected_U_A?: string;
  protected q?: string;
  protected page: number = 1;
  protected limit: number = 10;
  protected destroy?: any;
  protected lenght?:number;
  protected placeholderImage: string =
  'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg';

  ngOnInit(): void {
    // loded first time
    this.getData();
  }

  getData() {
    //getting the data by subscribing
    this.destroy = this.api
      .getApiData(
        this.page,
        this.limit,
        this.q,
        this.selectedTypeValue,
        this.selected_U_A
      )
      .subscribe((data: any) => {
        //suscribing to the data
        this.data = data;
        this.lenght = Math.floor(this.data.pagination.items.total/this.limit);
        this.MainData = this.data.data;
      });
  }

  changePage($event: PageEvent) {
    //getting the paginator details
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getData();
  }

  searchData(arg0: string) {
    this.q = arg0;
    this.getData();
  }

  Searched_item_Clicked(Selected_item: SelectedhCardInterface) {
    this.data1Service.getId(null);
    this.CharaterService.get_selected(null);
    this.api.set_selected_Item(Selected_item);
    this.route.navigateByUrl('/s');
  }

  /**
   * @description the image toshow when an error occur
   */

  ImgageLoadError(event: ErrorEvent) {
    if(event){
      (event.target as HTMLImageElement).src = this.placeholderImage;
    }
    }

  ngOnDestroy(): void {
    if (this.destroy) {
      this.destroy.unsubscribe();
    }
  }
}
