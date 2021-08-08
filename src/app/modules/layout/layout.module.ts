import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
// Components
import { MainHomeSectionComponent } from './components/main-home-section/main-home-section.component';
import { TripSectionComponent } from './components/trip-section/trip-section.component';
// 
@NgModule({
  declarations: [MainHomeSectionComponent, TripSectionComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: [MainHomeSectionComponent, TripSectionComponent]
})
export class LayoutModule {}
