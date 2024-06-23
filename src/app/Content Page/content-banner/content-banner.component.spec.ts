import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBannerComponent } from './content-banner.component';

describe('ContentBannerComponent', () => {
  let component: ContentBannerComponent;
  let fixture: ComponentFixture<ContentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
