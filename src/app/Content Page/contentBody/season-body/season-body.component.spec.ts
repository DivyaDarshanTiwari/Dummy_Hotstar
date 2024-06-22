import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonBodyComponent } from './season-body.component';

describe('SeasonBodyComponent', () => {
  let component: SeasonBodyComponent;
  let fixture: ComponentFixture<SeasonBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
