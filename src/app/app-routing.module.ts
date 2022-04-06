import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
*/

const routes: Routes = [
 // { path: '/', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
