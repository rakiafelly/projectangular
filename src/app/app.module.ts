import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { UserComponent } from './user/user.component';
import { ArticlesComponent } from './articles/articles.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SalleslistComponent } from './salleslist/salleslist.component';
import { SalleComponent } from './salle/salle.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    UserComponent,
    ArticlesComponent,
    TdfComponent,
    ReactiveFormComponent,
    SalleslistComponent,
    SalleComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
