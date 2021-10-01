import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManageUsersComponent } from './admin/admin-manage-users/admin-manage-users.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthGuard } from './auth-guard.service';
import { FpageComponent } from './fpage/fpage.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { RateComponent } from './products/rate/rate.component';
import { RatingComponent } from './products/rating/rating.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes =
[
  {path: '' , component : ProductsComponent},
  {path: 'products' , component : ProductsComponent},
  {path: 'fpage' , component : FpageComponent},
  {path: 'rating' , component : RatingComponent},
  {path: 'rate' , component : RateComponent},
  {path: 'my/orders' , component : MyOrdersComponent , canActivate : [AuthGuard]},
  {path: 'shopping-cart' , component : ShoppingCartComponent},
  {path: 'login' , component : LoginComponent},
  {path: 'order-success' , component : OrderSuccessComponent , canActivate : [AuthGuard]},
  {path: 'admin/users' , component : AdminManageUsersComponent , canActivate : [AuthGuard , AdminAuthGuardService]},
  {path: 'admin/products' , component : AdminProductsComponent , canActivate : [AuthGuard , AdminAuthGuardService]},
  {path: 'admin/products/new' , component : ProductFormComponent , canActivate : [AuthGuard , AdminAuthGuardService]},
  {path: 'admin/products/:id' , component : ProductFormComponent , canActivate : [AuthGuard , AdminAuthGuardService]},
  {path: 'admin/orders' , component : AdminOrdersComponent , canActivate : [AuthGuard , AdminAuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


