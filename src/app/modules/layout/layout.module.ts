import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
// Components
import { MainHomeSectionComponent } from './components/main-home-section/main-home-section.component';
import { TripSectionComponent } from './components/trip-section/trip-section.component';
import { AnimatedLightBackgroundComponent } from './components/animated-light-background/animated-light-background.component';
import { TripTypeComponent } from './components/trip-type/trip-type.component';
// 
@NgModule({
  declarations: [MainHomeSectionComponent, TripSectionComponent, AnimatedLightBackgroundComponent, TripTypeComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: [MainHomeSectionComponent, TripSectionComponent, AnimatedLightBackgroundComponent, TripTypeComponent]
})
export class LayoutModule {}
