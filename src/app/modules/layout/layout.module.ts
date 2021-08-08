import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
// 
@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: []
})
export class LayoutModule {}
