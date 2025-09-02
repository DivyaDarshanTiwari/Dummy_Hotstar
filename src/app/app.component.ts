import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatToolbarModule,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dummy_Hotstar';
  collapsed = signal(true);
  width = computed(() => (this.collapsed() ? '80px' : '200px'));

  // responsive state
  isHandset = false;
  mode: 'side' | 'over' = 'side';
  opened = true;

  constructor(private bp: BreakpointObserver) {}

  ngOnInit(): void {
    // Use Angular CDK predefined breakpoints for handsets
    this.bp.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isHandset = result.matches;
      if (this.isHandset) {
        this.mode = 'over';
        this.opened = false; // start closed on mobile
      } else {
        this.mode = 'side';
        this.opened = true; // persist visible on desktop
      }
    });
  }

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
