import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoBecaRoutingModule } from './info-beca-routing.module';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { SharedModule } from '@shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { StriphtmlPipe } from '@shared/pipes/striphtml.pipe';


@NgModule({
  declarations: [
    InfoPageComponent
  ],
  imports: [
    CommonModule,
    InfoBecaRoutingModule,
    SharedModule,
    MatButtonModule,
    MatTableModule
    
  ]
})
export class InfoBecaModule { }
