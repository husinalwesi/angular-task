import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// 
const routes: Routes = [];
// No need for any route here, cause this module only contains section components

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
