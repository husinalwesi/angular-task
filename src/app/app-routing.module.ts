import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',//Empty as we need the route linked to the initial URL
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  }
  /* Should implement 404 page
    { path: '**', redirectTo: '404' },
    { path: '404', component: NotFoundPageComponent }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
