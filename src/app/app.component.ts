import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, CommonModule, NavbarComponent,MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule],
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
}