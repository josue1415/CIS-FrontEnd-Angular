import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesPageComponent } from '@modules/home/pages/pages-page/pages-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesPageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
