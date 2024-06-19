import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})
export class AppComponent {
  title = 'Dummy_Hotstar';
}
