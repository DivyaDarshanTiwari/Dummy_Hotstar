import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFindComponent } from './array-find.component';

describe('ArrayFindComponent', () => {
  let component: ArrayFindComponent;
  let fixture: ComponentFixture<ArrayFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayFindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
