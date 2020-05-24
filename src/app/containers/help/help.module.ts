import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HelpComponent],
})
export class HelpModule {}
