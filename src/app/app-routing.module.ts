import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: 'application-form', component: ApplicationFormComponent },
  {path: "products", component: ProductListComponent},
  {path: '', redirectTo: '/application-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
