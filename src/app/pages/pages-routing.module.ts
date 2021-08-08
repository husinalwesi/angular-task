import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OffersPageComponent } from './components/offers-page/offers-page.component';
// 
const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "offers/:offerType", component: OffersPageComponent }
  /*
    - This page was created only to complete the process.
    - The `offerType` means the dynamic parameter name.
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
