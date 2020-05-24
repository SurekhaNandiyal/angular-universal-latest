import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./containers/help/help.module').then((m) => m.HelpModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./containers/contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
