import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('@modules/detail-profile/detail-profile.module').then(m => m.DetailProfileModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('@modules/info-beca/info-beca.module').then(m => m.InfoBecaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
