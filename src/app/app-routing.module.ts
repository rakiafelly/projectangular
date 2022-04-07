import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'area',
  component:AreaComponent,
  },
  { path:'user',
  component:UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
