import {
  Component,
  Input,
  type OnInit,
  type OnChanges,
  type SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import type { Data1Interface } from '../../data1-interface';
import type { SelectedhCardInterface } from '../../shared/search/selectedh-card-interface';
import type { CharaterInterface } from '../../shared/Characters/charater-interface';
import { WatchListService } from '../../shared/WatchList/watch-list.service';
import { LoginService } from '../../shared/Login/login.service';
type BannerModel = {
  source: 'local' | 'api' | 'character';
  bgUrl: string;
  mobileBgUrl?: string; // optional art-directed mobile image
  titleImgUrl?: string;
  titleAlt?: string;
  meta?: string[]; // e.g., ["2024", "4 Seasons", "7 Languages", "U/A 7+"]
  synopsis?: string;
  genres?: string[];
  watchListPayload?: { location: 'local' | 'api'; id: number };
};

@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css'],
})
export class ContentBannerComponent implements OnInit, OnChanges {
  constructor(
    private watchList_Service: WatchListService,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Input({ required: false }) item?: Data1Interface | null;
  @Input({ required: false })
  selected_card_data?: SelectedhCardInterface | null;
  @Input({ required: false }) selected_character?: CharaterInterface | null;

  protected add_to_watchList = false;
  private selected_user_id?: number;

  bannerModel: BannerModel | null = null;

  ngOnInit(): void {
    this.computeModel();
    this.initWatchlistState();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['item'] ||
      changes['selected_card_data'] ||
      changes['selected_character']
    ) {
      this.computeModel();
      this.initWatchlistState();
    }
  }

  private computeModel() {
    // Priority: API card > local item > character (adjust as needed)
    if (this.selected_card_data) {
      const m = this.selected_card_data;
      this.bannerModel = {
        source: 'api',
        bgUrl:
          m.trailer?.images?.maximum_image_url ||
          m.images?.jpg?.large_image_url ||
          m.images?.jpg?.image_url,
        titleImgUrl: m.images?.jpg?.image_url,
        titleAlt: m.title,
        meta: [
          `${m.year ?? ''}`.trim(),
          `${m.season ?? ''}`.trim(),
          `${m.type ?? ''}`.trim(),
          m.rating ? `U/A ${m.rating}` : '',
        ].filter(Boolean),
        synopsis: m.synopsis,
        genres: (m.titles || []).map((t) => t.title).filter(Boolean),
        watchListPayload: { location: 'api', id: m.mal_id },
      };
      return;
    }

    if (this.item) {
      const it = this.item;
      this.bannerModel = {
        source: 'local',
        bgUrl: it.img,
        titleImgUrl: it.headImg,
        titleAlt: it.alt,
        meta: [
          `${it.year_of_release ?? ''}`.trim(),
          `${it.seasons ?? ''}`.trim(),
          `${it.languages ?? ''}`.trim(),
          it.U_A ? `U/A ${it.U_A}` : '',
        ].filter(Boolean),
        synopsis: it.description,
        genres: (it.genera || []).filter(Boolean),
        watchListPayload: { location: 'local', id: it.id },
      };
      return;
    }

    if (this.selected_character) {
      const c = this.selected_character;
      this.bannerModel = {
        source: 'character',
        bgUrl: c.imageUrl,
        titleImgUrl: c.imageUrl,
        titleAlt: c.name,
        meta: [
          `${c.films ?? ''}`.trim(),
          `${c.videoGames ?? ''}`.trim(),
          `${c.tvShows ?? ''}`.trim(),
        ].filter(Boolean),
        synopsis: undefined,
        genres: undefined,
        watchListPayload: undefined,
      };
      return;
    }

    this.bannerModel = null;
  }

  private initWatchlistState() {
    if (!this.loginService.isLogged()) {
      this.add_to_watchList = false;
      return;
    }
    this.selected_user_id = this.watchList_Service.get_Selected_id();
    const list = this.watchList_Service.getSecond_WatchList();
    let found: any;

    // match API
    if (this.selected_card_data) {
      found = list.find(
        (v) =>
          v.loaction === 'api' &&
          v.item_id === this.selected_card_data?.mal_id &&
          v.user_id === this.selected_user_id
      );
    }
    // match local
    if (!found && this.item) {
      found = list.find(
        (v) =>
          v.loaction === 'local' &&
          v.item_id === this.item?.id &&
          v.user_id === this.selected_user_id
      );
    }

    this.add_to_watchList = !!found;
  }

  logIn() {
    if (!this.loginService.isLogged()) {
      this.router.navigateByUrl('login');
    }
  }

  toggleWatchList() {
    if (!this.loginService.isLogged() || !this.bannerModel?.watchListPayload)
      return;
    this.add_to_watchList = !this.add_to_watchList;
    const { location, id } = this.bannerModel.watchListPayload;
    this.watchList_Service.set_watch_list(location, id, this.add_to_watchList);
  }

  bgStyle(): string {
    const url = this.bannerModel?.bgUrl?.trim();
    return url ? `url('${url}')` : `url('/assets/OnePiece.jpeg')`;
  }

  bgMobileStyle(): string {
    const url = (
      this.bannerModel?.mobileBgUrl ||
      this.bannerModel?.bgUrl ||
      ''
    ).trim();
    return url ? `url('${url}')` : `url('/assets/OnePiece-mobile.jpg')`;
  }
}
