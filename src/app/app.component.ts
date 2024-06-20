import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

export interface Buttons {
  icons: string;
  description: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, CommonModule,MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule,MatListModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  title = 'Dummy_Hotstar';
  collapsed = signal(true);
  width = computed(() => this.collapsed() ? '80px' : '200px');

  
  ngOnInit(): void {}

  toggleCollapsed() {
    this.collapsed.set(!this.collapsed());
  }

  
  public icons: Buttons[] = [
    { icons: 'person', description: 'My Space' },
    { icons: 'search', description: 'Search' },
    { icons: 'home', description: 'Home' },
    { icons: 'tv', description: 'TV' },
    { icons: 'movie', description: 'Movies' },
    { icons: 'sports_cricket', description: 'Sports' },
    { icons: 'category', description: 'Category' }
  ];
}