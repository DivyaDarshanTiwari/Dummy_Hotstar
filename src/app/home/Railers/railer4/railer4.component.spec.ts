import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Railer4Component } from './railer4.component';

describe('Railer4Component', () => {
  let component: Railer4Component;
  let fixture: ComponentFixture<Railer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Railer4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Railer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
