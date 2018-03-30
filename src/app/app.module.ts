import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import{RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductsComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule
    FormsModule
    RouterModule.forRoot([
      {
        path:"catalog",
        component:CatalogComponent 

    }
    {
path:"products",
component:ProductsComponent


    }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
