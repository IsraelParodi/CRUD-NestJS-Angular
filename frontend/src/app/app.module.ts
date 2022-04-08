import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {LayoutComponent} from "./components/layout/layout.component";
import {ProductTableComponent} from './components/product-table/product-table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FilterPipe} from './Pipes/filter.pipe';
import {ProductShowComponent} from './components/product-show/product-show.component';
import {PopupComponent} from './components/popup/popup.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    ProductTableComponent,
    ProductFormComponent,
    FilterPipe,
    ProductShowComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
