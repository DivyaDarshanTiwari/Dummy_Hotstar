import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { seasonData } from './seasonData.1';
import { CommonModule } from '@angular/common';
import { SeasonInterface } from './season-interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-season-body',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    SeasonBodyComponent,
    CommonModule,
  ],
  templateUrl: './season-body.component.html',
  styleUrl: './season-body.component.css',
})
export class SeasonBodyComponent implements OnInit {
  private bp = inject(BreakpointObserver);
  isHandset = false;
  @Output() senddata = new EventEmitter();
  @Input({ required: true }) itemId!: number;

  constructor() {
    this.bp
      .observe([Breakpoints.Handset])
      .subscribe((res) => (this.isHandset = res.matches));
  }

  ngOnInit(): void {
    this.senddata.emit(this.data);
  }

  data: SeasonInterface[] = seasonData;

  get getEpisodes() {
    return this.data.filter((data) => data.id === this.itemId);
  }
}
