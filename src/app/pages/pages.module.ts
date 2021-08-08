import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../modules/layout/layout.module';
// Components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OffersPageComponent } from './components/offers-page/offers-page.component';
// 
@NgModule({
  declarations: [LandingPageComponent, OffersPageComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, LayoutModule],
  exports: []
})
export class PagesModule {}
