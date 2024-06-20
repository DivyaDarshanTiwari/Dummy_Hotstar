import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailerComponent } from './railer.component';
import { NextDirective } from './next&prev/next.directive';
import { PrevDirective } from './next&prev/prev.directive';

describe('RailerComponent', () => {
  let component: RailerComponent;
  let fixture: ComponentFixture<RailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailerComponent,NextDirective,PrevDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
