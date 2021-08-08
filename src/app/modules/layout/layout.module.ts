import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
// Components
import { MainHomeSectionComponent } from './components/main-home-section/main-home-section.component';
// 
@NgModule({
  declarations: [MainHomeSectionComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: [MainHomeSectionComponent]
})
export class LayoutModule {}
