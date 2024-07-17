import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div>
        <h1>PAGE NOT FOUND</h1>
        <h1>ERROR 404</h1>
      </div>
    </div>
  `,
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {}
