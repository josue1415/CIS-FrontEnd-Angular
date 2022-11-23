import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniesRoutingModule } from './testimonies-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestimoniesRoutingModule,
    SharedModule
  ]
})
export class TestimoniesModule { }
