import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search/search.service';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatButton, MatIcon, MatCard, MatCardContent, MatPaginatorModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  HandlePageEven($event: PageEvent) {//an event that occurs when there is a change in the pagamaitor
    console.log('Handle', $event);
    this.limit = $event.pageSize;
    this.offset = $event.pageIndex * $event.pageSize;
    console.log($event);
    this.gettingData();
  }

  limit: number = 10;
  offset: number = 0;

  ngOnInit(): void {
    this.gettingData();
  }

  public data!: any;
  public actualData!: any;
  constructor(private search: SearchService) {}

  gettingData() {
    this.search.getAPIData(this.limit, this.offset).subscribe((data) => {  //getting the data from service with the help of function andthe suscribing
      this.data = data;
      this.actualData = this.data.results;
      console.log(data);
    });
  }
}
