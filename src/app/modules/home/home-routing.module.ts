import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('@modules/detail-profile/detail-profile.module').then(m => m.DetailProfileModule),
    data: {
      tipo: 'profiles'
    }
  },
  {
    path: 'projects',
    loadChildren: () => import('@modules/detail-profile/detail-profile.module').then(m => m.DetailProfileModule),
    data: {
      tipo: 'projects'
    }
  },
  {
    path: 'testimonies',
    loadChildren: () => import('@modules/detail-profile/detail-profile.module').then(m => m.DetailProfileModule),
    data: {
      tipo: 'testimonies'
    }
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('@modules/info-beca/info-beca.module').then(m => m.InfoBecaModule)
  }
  ,
  {
    path: 'detail-project/:id',
    loadChildren: () => import('@modules/projects/projects.module').then(m => m.ProjectsModule)
  }
  ,
  {
    path: 'detail-testimonies/:id',
    loadChildren: () => import('@modules/testimonies/testimonies.module').then(m => m.TestimoniesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
