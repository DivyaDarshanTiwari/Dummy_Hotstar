import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharatersComponent } from './charaters.component';

describe('CharatersComponent', () => {
  let component: CharatersComponent;
  let fixture: ComponentFixture<CharatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharatersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
