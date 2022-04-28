import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { UserComponent } from './user/user.component';
import { ArticlesComponent } from './articles/articles.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SalleslistComponent } from './salleslist/salleslist.component';
import { SalleComponent } from './salle/salle.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'ReactiveForm',
    component: ReactiveFormComponent,
  },
  {
    path: 'area',
    component: AreaComponent,
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'tdf',
    component: TdfComponent,
  },
  {
    path: 'salle',
    component: SalleslistComponent,
  },
  {
    path: 'details/:id',
    component: SalleComponent,
  },
  {
    path:'404',
    component:ErrorComponent
  },
  {
    path:'**',
    redirectTo:'404', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
