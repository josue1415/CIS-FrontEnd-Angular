import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProfileRoutingModule } from './detail-profile-routing.module';
import { DetailProfileComponent } from './pages/detail-profile/detail-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '@shared/shared.module';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    DetailProfileComponent
  ],
  imports: [
    CommonModule,
    DetailProfileRoutingModule,
    FormsModule,
    MatPaginatorModule,
    SharedModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class DetailProfileModule { }
