import { Injectable } from '@angular/core';
import watch_list from '../../JSON/watch_list.json'

@Injectable({
  providedIn: 'root',
})
export class WatchListJsonService {

  data = watch_list;
}
