import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {ProductShowComponent} from "./components/product-show/product-show.component";

const routes: Routes = [
  {
    path: "product",
    component: ProductTableComponent,
  },
  {
    path: "product/create",
    component: ProductFormComponent,
  },
  {
    path: "product/show/:id",
    component: ProductShowComponent,
  },
  {
    path: "product/edit/:id",
    component: ProductFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
