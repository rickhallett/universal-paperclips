import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AlbumComponent } from "./components/album/album.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ChartComponent } from "./components/chart/chart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CustomersComponent } from "./components/customer/customer.component";
import { DashComponent } from "./components/dash/dash.component";
import { NgxDocsComponent } from "./components/ngx-docs/ngx-docs.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { OrdersComponent } from "./components/order/order.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { TrumpDetectionComponent } from "./components/trump-detection/trump-detection.component";
import { TrumpAlertsComponent } from "./components/trump-detection/trump-alerts/trump-alerts.component";
import { TrumpBrowserComponent } from "./components/trump-detection/trump-browser/trump-browser.component";
import { KeyCodesComponent } from "./components/trump-detection/key-codes/key-codes.component";
import { componentFactoryName } from "@angular/compiler";
import { TrumpsRulesComponent } from "./components/trump-detection/trumps-rules/trumps-rules.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "chart",
        component: ChartComponent,
      },
      {
        path: "dash",
        component: DashComponent,
      },
      {
        path: "orders",
        component: OrdersComponent,
      },
      {
        path: "customers",
        component: CustomersComponent,
      },
      {
        path: "albums",
        component: AlbumComponent,
      },
      {
        path: "pricing",
        component: PricingComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },
      {
        path: "blog",
        component: BlogComponent,
      },
      {
        path: "docs",
        component: NgxDocsComponent,
      },
      {
        path: "https://rickhallett.github.io/ngx-tour-demo/",
        redirectTo: "https://rickhallett.github.io/ngx-tour-demo/dash",
        pathMatch: "full",
      },
      {
        path: "trump-detection",
        component: TrumpDetectionComponent,
        children: [
          {
            path: "trump-alerts",
            component: TrumpAlertsComponent
          },
          {
            path: "trump-browser",
            component: TrumpBrowserComponent
          },
          {
            path: "nuclear-key-codes",
            component: KeyCodesComponent
          },
          {
            path: "trumps-rules",
            component: TrumpsRulesComponent
          }
        ]
      }
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
