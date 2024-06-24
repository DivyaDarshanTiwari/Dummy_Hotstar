import { Injectable } from '@angular/core';
import { type WatchListInterface } from './watch-list-interface';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  watchList = [
    {
      id: 1,
      seasons: 5,
      watch_hours: 20,
      img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608',
      title: 'Stranger Things'
    },
    {
      id: 1,
      seasons: 3,
      watch_hours: 15,
      img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc4Bp4lmhdqWFXsSJ2ArJhM2GocEp-O0WKOaEz3PkDu0bN9wVIE_TZeEGAnvRgWQzSDHS0w-d0hSVM5xjCBAQQFZanTCpgydC2SN.jpg?r=0ce',
      title: 'The Umbrella Academy'
    },
    {
      id: 1,
      seasons: 2,
      watch_hours: 10,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoXl5nJkfIHNFz0lOlgMcAMJvpzEVXK89kA&s',
      title: 'The Haunting of Hill House'
    },
    {
      id: 1,
      seasons: 4,
      watch_hours: 20,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR18nRzxB8FaQ4DdYj2ngYYctmieXmeTFZOw&s',
      title: 'Black Mirror'
    },
    {
      id: 1,
      seasons: 6,
      watch_hours: 30,
      img: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-344717,resizemode-75,msid-79564499/magazines/panache/does-the-crown-have-an-anti-charles-bias-critics-call-out-show-for-too-much-artistic-licence/the-mail-on-sunday-newspaper-has-called-on-netflix-to-make-it-clear-the-crown-is-a-work-of-fiction-.jpg',
      title: 'The Crown'
    },
    {
      id: 2,
      seasons: 8,
      watch_hours: 40,
      img: 'https://static.hbo.com/game-of-thrones-1-1920x1080.jpg',
      title: 'Game of Thrones'
    },
    {
      id: 2,
      seasons: 5,
      watch_hours: 25,
      img: 'https://images.thedirect.com/media/photos/westworl1.jpg',
      title: 'Westworld'
    },
    {
      id: 2,
      seasons: 3,
      watch_hours: 15,
      img: 'https://images-cdn2.welcomesoftware.com/assets/TrueDetective.png/Zz01ZWE3ZDZhNmIwZWExMWVlYjA4ODE2NmYyZTI4NDc5ZA==?width=1200',
      title: 'True Detective'
    },
    {
      id: 2,
      seasons: 4,
      watch_hours: 20,
      img: 'https://www.hachettebookgroup.com/wp-content/uploads/2022/09/Handmaids_tale_hulu_ep_5.jpg',
      title: 'The Handmaid\'s Tale'
    },
    {
      id: 2,
      seasons: 6,
      watch_hours: 30,
      img: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-49102,resizemode-75,msid-95774738/news/international/us/the-walking-dead-when-will-season-11-be-on-netflix-know-all-details-here.jpg',
      title: 'The Walking Dead'
    },
    {
      id: 3,
      seasons: 3,
      watch_hours: 15,
      img: 'https://via.placeholder.com/300',
      title: 'The Witcher'
    },
    {
      id: 3,
      seasons: 2,
      watch_hours: 10,
      img: 'https://m.media-amazon.com/images/M/MV5BNGZmZDI5NzItYWUzYy00MjcwLTk3MWQtYjg2YmZkMzBhYzlhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
      title: 'Castlevania'
    },
    {
      id: 3,
      seasons: 4,
      watch_hours: 20,
      img: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQVmi567X7OD4NQqTvxb_K9m4lG1dJ2_ZO9rRP1YsI4uOtHmqsP_W8C_UUbNL8e82YnR2mgdksxCJ4W00gHpmMPwSHVcEApjmreYuNVWIdWqFkWyoj010txqThUIQ9hk8LtQSDpkhPnpiEoKkfxQsxgOYPek.jpg?r=ca3',
      title: 'Vikings'
    },
    {
      id: 4,
      seasons: 6,
      watch_hours: 30,
      img: 'https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
      title: 'Breaking Bad'
    },
    {
      id: 4,
      seasons: 5,
      watch_hours: 25,
      img: 'https://via.placeholder.com/300',
      title: 'Better Call Saul'
    },
    {
      id: 4,
      seasons: 3,
      watch_hours: 15,
      img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaY_yLL0a_nUG4szgA2aG1G0NxvaGgd_LDa3LJw3BVpoydsWEDPjz6MQTFbWjehzZcHOQNCM0-PugRCeLzZgPzu89lVYwCaYfCOD.jpg?r=0e1',
      title: 'Narcos'
    },
    {
      id: 5,
      seasons: 4,
      watch_hours: 25,
      img: 'https://i1.wp.com/media.globalnews.ca/videostatic/289/103/actualnarcos.jpg?w=1040&quality=70&strip=all',
      title: 'Narcos: Mexico'
    },
    {
      id: 5,
      seasons: 3,
      watch_hours: 15,
      img: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/ozark-cast-character-guide.jpg',
      title: 'Ozark'
    }
  ]

  constructor() { 
    const watch_Data = localStorage.getItem("Watch_Data")
    if(watch_Data){
      this.watchList = JSON.parse(watch_Data);
    }
  }

  getWatchList(){
    return this.watchList
  }

}
