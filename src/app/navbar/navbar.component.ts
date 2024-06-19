import { CommonModule } from '@angular/common';
import { Component, Input, Output, Signal, signal, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export interface Buttons {
  icons: string;
  description: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sidenavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
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
