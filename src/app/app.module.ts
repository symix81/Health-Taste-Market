import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminManageUsersComponent } from './admin/admin-manage-users/admin-manage-users.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoriesService } from './services/categories.service';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from "angular-datatables";
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { RateComponent } from './products/rate/rate.component';
import { RatingComponent } from './products/rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FpageComponent } from './fpage/fpage.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShoppingCartComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminManageUsersComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductFilterComponent,
    RateComponent,
    RatingComponent,
    FpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    DataTablesModule,
    BrowserAnimationsModule,
  ],
  exports:[
    ProductCardComponent,
    ProductsComponent,
  ],
  providers: [AuthService,AuthGuard,CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
