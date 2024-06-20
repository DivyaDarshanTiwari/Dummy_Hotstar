import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Railer3Component } from './railer3.component';

describe('Railer3Component', () => {
  let component: Railer3Component;
  let fixture: ComponentFixture<Railer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Railer3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Railer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
