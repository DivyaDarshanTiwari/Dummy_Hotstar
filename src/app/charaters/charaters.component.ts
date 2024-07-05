import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/Characters/characters.service';
import { type CharaterInterface} from '../shared/Characters/charater-interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charaters',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule],
  templateUrl: './charaters.component.html',
  styleUrl: './charaters.component.css',
})
export class CharatersComponent implements OnInit {
  protected character_Data?: CharaterInterface[];
  constructor(private charater_Service: CharactersService) {}
  ngOnInit(): void {
    this.getting_data();
  }

  protected getting_data():void{
    this.charater_Service.getData().subscribe({
      next: (value) => {
        this.character_Data = value.data;
      },
      error: (error) => {
        console.log('An error has occured');
        console.error(error);
      },
    });
  }
}
