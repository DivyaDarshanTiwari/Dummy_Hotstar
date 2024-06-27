import { Component, OnInit } from '@angular/core';
import { ROUTES, Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';

interface interface1 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
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
    RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  router: any;

  constructor(private api: MoviesService) {}

  public data!: any; //data is store here
  public MainData!: any; //data of the main arry of the data
  public type: interface1[] = [//for type
    {value: '', viewValue: 'all'},
    {value: 'tv', viewValue: 'tv'},
    {value: 'movie', viewValue: 'movie'},
    {value: 'ova', viewValue: 'ova'},
    {value: 'special', viewValue: 'special'},
    {value: 'ona', viewValue: 'ona'},
    {value: 'music', viewValue: 'music'},
    {value: 'pv', viewValue: 'pv'},
    {value: 'tv_special', viewValue: 'tv_speacil'},
  ];
  public rating:interface1[]=[ //for adult rating
    {value: '', viewValue: 'all'},
    {value: 'g', viewValue: 'G - All Ages'},
    {value: 'pg', viewValue: 'PG - Childrene'},
    {value: 'pg13', viewValue: 'PG-13 - Teens 13 or older'},
    {value: 'r17', viewValue: 'R - 17+ (violence & profanity)'},
  ]

  // public status:interface1[]=[
  //   {value: '', viewValue: 'all'},
  //   {value: 'upcoming', viewValue: 'upcoming'},
  //   {value: 'airing', viewValue: 'airing'},
  //   {value: 'complete', viewValue: 'complete'},
  // ]

  genre = new FormControl('');
  genreList: string[] = ['Action', 'Romance', 'Fantacy', 'Shoujo', 'Adventure', 'Slice 0f Life'];
  
  selectedTypeValue: string='';
  selected_U_A:string='';
  selected_Status:string='';
  ngOnInit(): void {
    // loded first time
    this.getData();
  }
  title = 'apitest';

  getData() {
    //getting the data by subscribing
    this.api.getApiData().subscribe((data) => {
      //suscribing to the data
      this.data = data;
      this.MainData = this.data.data;
      // console.log(data);
      console.log(this.MainData);
    });
  }

  changePage($event: PageEvent) {
    //getting the paginator details
    console.log('page', $event);
    this.api.page = $event.pageIndex + 1;
    this.api.limit = $event.pageSize;
    this.getData();
  }

  searchData(arg0: string) {
    this.api.q = arg0;
    this.api.type = this.selectedTypeValue;
    this.api.rating = this.selected_U_A;
    // this.api.status = this.selected_Status;
    this.getData();

  }

  Searched_item_Clicked(Selected_item: any) {
    console.log(Selected_item);
    this.api.set_selected_Item(Selected_item);

  }
}
