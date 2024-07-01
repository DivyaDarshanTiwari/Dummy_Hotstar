import { Injectable } from '@angular/core';
import { Data1Interface } from '../data1-interface';
import { MoviesService } from './search/search.service';

@Injectable({
  providedIn: 'root',
})
export class Data1Service {
  private data1 = [
    {
      id: 1,
      title: 'DORAEMON',
      img: 'https://chinhan100.files.wordpress.com/2019/03/doremon.jpg?w=640',
      alt: 'TDoraemon',
      description:
        'NEW EPISODES MONDAY TO SATURDAY AT 12:30 PM. Trouble continues to follow Nobita around. Fortunately, his trusty friend Doraemon, from the 22nd century, is always by his side for his adventures.',
      headImg:
        'https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/7018/1715414247018-t',
      year_of_release: '2024', // Year, Month (0-indexed), Day
      seasons: 4,
      languages: 'English, Japanes, Sicilian',
      U_A: '7+',
      genera: ['Kid', 'Animation', 'Light hearted'],
      watch_hours: '2h 55min',
      seasons_name: ['Chapter 1', 'Chapter 2'],
    },
    {
      id: 2,
      title: 'Leagens Of Hanuman',
      img: 'https://assets.telegraphindia.com/telegraph/2024/Apr/1713939027_the-legends-of-hanuman.jpg',
      alt: 'The Shawshank Redemption Movie Poster',
      description:
        'NEW EPISODE EVERY THURSDAY. As the war intensifies in Ravans majestic Lanka, Hanuman faces mightier foes for his Lord Ram with his vaanar sena.',
      headImg:
        'https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/2965/1717524622965-t',
      year_of_release: '2024', // Year, Month (0-indexed), Day
      seasons: 4,
      languages: 'English',
      U_A: '7+',
      genera: ['Mythology', 'Creatures & Monsters', 'Fantasy'],
      watch_hours: '',
      seasons_name: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
    },
    {
      id: 3,
      title: 'Vikram and Vital',
      img: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/491/1440491-i-d6a5576361b0',
      alt: 'Vikram and Vital',
      description:
        'Vicky Sharmas life spirals when his family moves into a new home and meets Vetaal the ghost. Watch their hilarious adventures as they become an iconic duo.',
      headImg:
        'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/493/1440493-t-5fb6e53bc468',
      year_of_release: '2002', // Year, Month (0-indexed), Day
      seasons: 2,
      languages: 'Hindi',
      U_A: '7+',
      genera: ['Comedy', 'Kit', 'Fantasy'],
      watch_hours: '2h 3min',
      seasons_name: ['Season 1', 'Season 2'],
    },
    {
      id: 4,
      title: 'The Lord of the Rings: The Fellowship of the Ring Movie Poster',
      img: 'https://www.slashfilm.com/img/gallery/cool-stuff-new-lord-of-the-rings-poster-brings-the-weary-journey-of-fellowship-of-the-ring-to-life/l-intro-1652367808.jpg',
      alt: 'The Lord of the Rings: The Fellowship of the Ring Movie Poster',
      description:
        'A hobbit named Frodo inherits the One Ring, which has the power to plunge Middle-earth into darkness. Frodo embarks on a quest to destroy the Ring and ensure the future of Middle-earth.',
      headImg:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_poster.jpg/250px-The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_poster.jpg',
      year_of_release: '2001', // Year, Month (0-indexed), Day
      seasons: 1,
      languages: 'English',
      U_A: 'PG-13',
      genera: ['Fantasy', 'Adventure', 'Drama'],
      watch_hours: '2h 58min',
      seasons_name: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
    },
    {
      id: 5,
      title: 'The Matrix Movie Poster',
      img: 'https://m.media-amazon.com/images/I/51kWJzs0AzS._AC_UF1000,1000_QL80_.jpg',
      alt: 'The Matrix Movie Poster',
      description:
        'A computer hacker learns that the world he lives in is actually a computer simulation. He joins a rebellion against the machines that control the Matrix.',
      headImg: '',
      year_of_release: '1999', // Year, Month (0-indexed), Day
      seasons: 1,
      languages: 'English',
      U_A: 'R',
      genera: ['Action', 'Science Fiction', 'Thriller'],
      watch_hours: '2h 16min',
      seasons_name: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
    },

    {
      id: 6,
      title: 'Pulp Fiction Movie Poster',
      img: 'https://c4.wallpaperflare.com/wallpaper/207/333/124/movie-pulp-fiction-wallpaper-preview.jpg',
      alt: 'Pulp Fiction Movie Poster',
      description:
        "The lives of two mob hit men, a boxer, and a crime boss's wife intertwine in a series of violent events.",
      headImg:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/6a/Pulp_Fiction_poster.jpg/250px-Pulp_Fiction_poster.jpg',
      year_of_release: '1994', // Year, Month (0-indexed), Day
      seasons: 1,
      languages: 'English',
      U_A: 'R',
      genera: ['Crime', 'Comedy', 'Thriller'],
      watch_hours: '2h 58min',
      seasons_name: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
    },
    {
      id: 7,
      title: 'Parasite Movie Poster',
      img: 'https://assets.mubicdn.net/images/notebook/post_images/29840/images-w1400.jpg?1579571206',
      alt: 'Parasite Movie Poster',
      description:
        'All four members of a poor family scheme to become employed by a wealthy family. However, the scheme unravels with unforeseen tragic consequences.',
      headImg:
        'https://upload.wikimedia.org.en/thumb/b/bc/Parasite_2019_film_poster.jpg/250px-Parasite_2019_film_poster.jpg',
      year_of_release: '2019', // Year, Month (0-indexed), Day
      seasons: 1,
      languages: 'Korean',
      U_A: 'R',
      genera: ['Thriller', 'Black Comedy', 'Drama'],
      watch_hours: '2h 12min',
      seasons_name: ['Season 1', 'Season 2', 'Season 3', 'Season 4'],
    },
  ];

  constructor(private movieService: MoviesService) {}

  private item!: Data1Interface; // salected item on the rail the datas is stored here
  getId(dataId: Data1Interface) {
    // selected data is getting store in in item with help of this function
    this.item = dataId;
  }
  get_item() {
    return this.item;
  }

  getData1() {
    return this.data1;
  }
}
