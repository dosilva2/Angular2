import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './views/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { FornecedorCrudComponent } from './components/fornecedor/fornecedor-crud/fornecedor-crud.component';
import { FonercedorReadComponent } from './components/fornecedor/fonercedor-read/fonercedor-read.component';
import { FonercedorCreateComponent } from './components/fornecedor/fonercedor-create/fonercedor-create.component';
import { FonercedorUpdateComponent } from './components/fornecedor/fonercedor-update/fonercedor-update.component';
import { FonercedorDeleteComponent } from './components/fornecedor/fonercedor-delete/fonercedor-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductsCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    FornecedorCrudComponent,
    FonercedorReadComponent,
    FonercedorCreateComponent,
    FonercedorUpdateComponent,
    FonercedorDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,

  ],
  providers: [{
    provide: LOCALE_ID,
  useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
