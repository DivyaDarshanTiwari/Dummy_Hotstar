import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRailerComponent } from './main-railer.component';

describe('MainRailerComponent', () => {
  let component: MainRailerComponent;
  let fixture: ComponentFixture<MainRailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
