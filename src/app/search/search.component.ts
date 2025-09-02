import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PageEvent } from '@angular/material/paginator';
import { Subscription, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MoviesService } from '../shared/search/search.service';
import { SelectedhCardInterface } from '../shared/search/selectedh-card-interface';
import { Data1Service } from '../shared/data1.service';
import { CharactersService } from '../shared/Characters/characters.service';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltip } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ConvertTitleLengthPipe } from '../PIPES/Covert Title Lenght/convert-title-length.pipe';
import { FinisedAirirngPipe } from '../PIPES/Finished Airing/finised-airirng.pipe';

interface SelectOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltip,
    MatProgressSpinnerModule,
    // Images + pipes
    LazyLoadImageModule,
    ConvertTitleLengthPipe,
    FinisedAirirngPipe,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(
    private api: MoviesService,
    private route: Router,
    private data1Service: Data1Service,
    private CharaterService: CharactersService
  ) {}

  // Responsive page sizing
  private bp = inject(BreakpointObserver);
  private subs = new Subscription();
  private dataSub?: Subscription;

  // Pagination state
  page = 1;
  limit = 10;
  pageSizeOptions = [5, 10, 14, 24];

  // Filters
  type: SelectOption[] = [
    { value: '', viewValue: 'All' },
    { value: 'tv', viewValue: 'TV' },
    { value: 'movie', viewValue: 'Movie' },
    { value: 'ova', viewValue: 'OVA' },
    { value: 'special', viewValue: 'Special' },
    { value: 'ona', viewValue: 'ONA' },
    { value: 'music', viewValue: 'Music' },
    { value: 'pv', viewValue: 'PV' },
    { value: 'tv_special', viewValue: 'TV Special' },
  ];
  rating: SelectOption[] = [
    { value: '', viewValue: 'All' },
    { value: 'g', viewValue: 'G - All Ages' },
    { value: 'pg', viewValue: 'PG - Children' },
    { value: 'pg13', viewValue: 'PG-13 - Teens 13+' },
    { value: 'r17', viewValue: 'R - 17+ (violence & profanity)' },
  ];

  selectedTypeValue = '';
  selected_U_A = '';
  q = '';

  // Reactive search control
  searchControl = new FormControl<string>('', { nonNullable: true });

  // Data
  protected MainData: SelectedhCardInterface[] = [];
  protected total = 0;
  protected data!: any;

  // UX state
  isLoading = false;
  errorMsg: string | null = null;

  placeholderImage =
    'https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg';

  ngOnInit(): void {
    // Breakpoint-driven page size
    this.subs.add(
      this.bp
        .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
        .subscribe((state) => {
          if (
            state.breakpoints[Breakpoints.XSmall] ||
            state.breakpoints[Breakpoints.Small]
          ) {
            this.limit = 10;
          } else if (state.breakpoints[Breakpoints.Medium]) {
            this.limit = 14;
          } else {
            this.limit = 24;
          }
          this.page = 1;
          this.getData();
        })
    );
    [8][6];

    // Debounced reactive search
    this.subs.add(
      this.searchControl.valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          filter((v) => v !== null)
        )
        .subscribe((value) => {
          this.q = value?.trim() || '';
          this.page = 1;
          this.getData();
        })
    );
    [5][4];

    // Initial load
    this.getData();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.dataSub) this.dataSub.unsubscribe();
  }

  getData() {
    if (this.dataSub) this.dataSub.unsubscribe();
    this.isLoading = true;
    this.errorMsg = null;

    this.dataSub = this.api
      .getApiData(
        this.page,
        this.limit,
        this.q || undefined,
        this.selectedTypeValue || undefined,
        this.selected_U_A || undefined
      )
      .subscribe({
        next: (data: any) => {
          this.data = data;
          this.total = data?.pagination?.items?.total ?? 0;
          this.MainData = data?.data ?? [];
        },
        error: () => {
          this.errorMsg = 'Something went wrong. Please try again.';
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  changePage($event: PageEvent) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getData();
  }

  onSubmit() {
    this.q = (this.searchControl.value || '').trim();
    this.page = 1;
    this.getData();
  }

  onTypeChange(value: string) {
    this.selectedTypeValue = value;
    this.page = 1;
    this.getData();
  }

  onRatingChange(value: string) {
    this.selected_U_A = value;
    this.page = 1;
    this.getData();
  }

  // Navigation and image error fallback
  Searched_item_Clicked(Selected_item: SelectedhCardInterface) {
    this.data1Service.getId(null);
    this.CharaterService.get_selected(null);
    this.api.set_selected_Item(Selected_item);
    this.route.navigateByUrl('/s');
  }

  ImgageLoadError(event: ErrorEvent) {
    if (event) (event.target as HTMLImageElement).src = this.placeholderImage;
  }

  getPosterUrl(it: SelectedhCardInterface): string {
    return it?.images?.jpg?.large_image_url || this.placeholderImage;
  }
}
