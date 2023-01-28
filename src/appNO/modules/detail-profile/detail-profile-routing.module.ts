import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProfileComponent } from './pages/detail-profile/detail-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DetailProfileComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProfileRoutingModule { }
