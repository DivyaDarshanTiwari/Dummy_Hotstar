import { Component } from '@angular/core';
import { PositionPipe } from './ArrayPipe/position.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-find',
  standalone: true,
  imports: [PositionPipe,FormsModule],
  templateUrl: './array-find.component.html',
  styleUrl: './array-find.component.css'
})
export class ArrayFindComponent {


  protected element:string='';

  protected array: string[] = ["green", "blue", "yellow","white", "black", "orange"];


}
