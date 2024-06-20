import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Railer2Component } from './railer2.component';

describe('Railer2Component', () => {
  let component: Railer2Component;
  let fixture: ComponentFixture<Railer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Railer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Railer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
