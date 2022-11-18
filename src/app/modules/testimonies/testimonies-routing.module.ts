import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimoniesComponent } from './pages/testimonies/testimonies.component';

const routes: Routes = [{
  path: '',
  component: TestimoniesComponent,
  outlet: 'child'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimoniesRoutingModule { }
