import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SelectedhCardInterface } from '../shared/search/selectedh-card-interface';

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
    RouterLink,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  title = 'apitest';
  router: any;

  constructor(private api: MoviesService, private route: Router) {}

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

  public data!: any; //data is store here
  public MainData!: SelectedhCardInterface[]; //data of the main arry of the data
  selectedTypeValue?: string ;
  selected_U_A?: string ;
  q?:string;
  page:number=1;
  limit:number=12;

  ngOnInit(): void {
    // loded first time
    this.getData();
  }

  getData() {
    //getting the data by subscribing
    this.api.getApiData(this.page,this.limit,this.q,this.selectedTypeValue,this.selected_U_A).subscribe((data: any) => {
      //suscribing to the data
      this.data = data;
      this.MainData = this.data.data;
    });
  }

  changePage($event: PageEvent) {
    //getting the paginator details
    this.page=$event.pageIndex + 1;
    this.limit=$event.pageSize;
    console.log('page', $event);
    this.getData();
  }

  searchData(arg0: string) {
    this.q=arg0;
    this.getData();
  }

  Searched_item_Clicked(Selected_item: SelectedhCardInterface) {
    console.log('1', Selected_item);
    this.api.set_selected_Item(Selected_item);
    this.route.navigateByUrl('/s');
  }
}
