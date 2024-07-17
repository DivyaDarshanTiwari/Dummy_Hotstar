import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

export interface Buttons {
  icons: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'Dummy_Hotstar';
  collapsed = signal(true);
  width = computed(() => (this.collapsed() ? '80px' : '200px'));

  ngOnInit(): void {}

  toggleCollapsed() {
    this.collapsed.set(!this.collapsed());
  }

  public icons: Buttons[] = [
    { icons: 'person', description: 'My Space', path: 'login' },
    { icons: 'search', description: 'Search', path: 'Search' },
    { icons: 'home', description: 'Home', path: '' },
    { icons: 'tv', description: 'TV', path: 'tv' },
    { icons: 'movie', description: 'Movies', path: '' },
    { icons: 'sports_cricket', description: 'Sports', path: '' },
    { icons: 'category', description: 'Category', path: '' },
    {
      icons: 'accessibility_new',
      description: 'Characters',
      path: 'characters',
    },
  ];
}
