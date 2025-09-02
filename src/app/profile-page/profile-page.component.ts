import { Component, type OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  type FormGroup,
  type FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { UserPDataService } from '../shared/Personal Service/user-p-data.service';
import { UserPData } from '../shared/Personal Service/user-p-data.interface';
import { WatchListService } from '../shared/WatchList/watch-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type SecondWatch = {
  loaction: string;
  item_id: number;
  user_id: number;
  selected: boolean;
};

// Strictly-typed form structure
type ProfileForm = {
  phone: FormControl<string>;
  name: FormControl<string>;
  email: FormControl<string>;
  DOB: FormControl<string>;
  profile_img: FormControl<string>;
};

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDivider,
    NoOfUsersComponent,
    WatchListComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  private fb = inject(FormBuilder);

  constructor(
    private userData: UserPDataService,
    private watchData: WatchListService
  ) {}

  form!: FormGroup<ProfileForm>;
  editing = false;

  phone!: number;
  name!: string;
  email!: string;
  DOB!: string;
  id!: number;
  img!: string;
  Previous_ActiveID!: number;

  user_Personal_Data: UserPData[] = [];
  second_watchList: SecondWatch[] = [];

  ngOnInit(): void {
    const active = this.userData.get_Actived_data();
    if (!active) return;

    this.user_Personal_Data = this.userData.getPorfileData();
    this.second_watchList = this.watchData.getSecond_WatchList();

    this.phone = active.phone;
    this.name = active.name;
    this.email = active.email;
    this.DOB = active.DOB;
    this.id = active.userId;
    this.img = active.profile_img;
    this.Previous_ActiveID = active.userId;

    // Form stores string values for inputs; convert phone to string if needed
    this.form = this.fb.group<ProfileForm>({
      phone: this.fb.nonNullable.control(String(this.phone ?? ''), {
        validators: [Validators.required],
      }),
      name: this.fb.nonNullable.control(this.name ?? '', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      email: this.fb.nonNullable.control(this.email ?? '', {
        validators: [Validators.required, Validators.email],
      }),
      DOB: this.fb.nonNullable.control(this.DOB ?? '', {
        validators: [Validators.required],
      }),
      profile_img: this.fb.nonNullable.control(this.img ?? ''),
    });
  }

  get f() {
    return this.form.controls;
  }

  startEdit() {
    this.editing = true;
    this.form.reset({
      phone: String(this.phone ?? ''),
      name: this.name ?? '',
      email: this.email ?? '',
      DOB: this.DOB ?? '',
      profile_img: this.img ?? '',
    } as any);
  }

  cancelEdit() {
    this.editing = false;
    this.form.reset({
      phone: String(this.phone ?? ''),
      name: this.name ?? '',
      email: this.email ?? '',
      DOB: this.DOB ?? '',
      profile_img: this.img ?? '',
    } as any);
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const current = this.userData.get_Actived_data();
    const value = this.form.getRawValue(); // all strings by typing

    // Build full UserPData object (include required fields)
    const updated: UserPData = {
      userId: this.id,
      // Convert phone back to number if interface requires number
      phone: Number(value.phone),
      name: value.name,
      email: value.email,
      DOB: value.DOB,
      profile_img: value.profile_img || this.img,
      // Preserve required fields not edited here
      watchListId: current?.watchListId ?? 0,
      Active: current?.Active ?? true,
    };

    // maintain active flags
    this.userData.set_Deactive_data(this.Previous_ActiveID);
    this.Previous_ActiveID = updated.userId;
    this.watchData.set_Selected_id(updated.userId);

    // reflect in view-model
    this.phone = updated.phone;
    this.name = updated.name;
    this.email = updated.email;
    this.DOB = updated.DOB;
    this.img = updated.profile_img;

    this.editing = false;
  }

  returned_Data(data: UserPData) {
    // switch active profile from child selection
    this.phone = data.phone;
    this.name = data.name;
    this.email = data.email;
    this.DOB = data.DOB;
    this.id = data.userId;
    this.img = data.profile_img;

    this.userData.set_Deactive_data(this.Previous_ActiveID);
    this.Previous_ActiveID = data.userId;
    this.watchData.set_Selected_id(this.id);

    if (this.editing) this.startEdit();
  }
}
