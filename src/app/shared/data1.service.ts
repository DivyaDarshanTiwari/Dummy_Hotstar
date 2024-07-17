import { Injectable } from '@angular/core';
import { Data1Interface } from '../data1-interface';
import { MoviesService } from './search/search.service';
import watch_list from '../JSON/watch_list.json';

@Injectable({
  providedIn: 'root',
})
export class Data1Service {
  private data1: Data1Interface[] = watch_list.local_watch_data;

  constructor(private movieService: MoviesService) {
    let x = sessionStorage.getItem('content-banner');
    if (x) {
      let z = JSON.parse(x);
      if ('id' in z) {
        this.data = z;
      }
    } else {
      console.log('no data');
    }
  }

  private data!: Data1Interface | null; // salected item on the rail the datas is stored here
  getId(dataId: Data1Interface | null) {
    // selected data is getting store in in item with help of this function
    this.data = dataId;
    this.save();
  }
  get_item() {
    return this.data;
  }

  getData1() {
    return this.data1;
  }

  private save() {
    sessionStorage.setItem('content-banner', JSON.stringify(this.data));
  }
}
