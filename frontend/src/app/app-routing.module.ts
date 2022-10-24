import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductsCreateComponent
},{
  path: "products/update/:id",
  component: ProductUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
