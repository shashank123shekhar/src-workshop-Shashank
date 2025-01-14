import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { ProgressButtonModule } from '@spartacus/storefront';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';

@NgModule({
  declarations: [
    OrderSummaryComponent,
    ApplyCouponComponent,
    QuickOrderComponent,
    SimilarProductsComponent,
  ],
  imports: [
    ProgressButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartTotalsComponent: {
          component: OrderSummaryComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        CartApplyCouponComponent: {
          component: ApplyCouponComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        CartQuickOrderFormComponent: {
          component: QuickOrderComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        ImportExportOrderEntriesComponent: {
          component: SimilarProductsComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class AddToCartModule {}
