import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { UserComponent } from './user/user.component';
import { ArticlesComponent } from './articles/articles.component';
import { TdfComponent } from './tdf/tdf.component';
const routes: Routes = [
  { path:'area',
  component:AreaComponent,
  },
  { path:'user',
  component:UserComponent,
  },
  {
    path:'articles',
    component:ArticlesComponent,
  },
  {
    path:'tdf',
    component:TdfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
