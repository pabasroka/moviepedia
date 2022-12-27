import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailComponent} from "./components/movie/movie-detail/movie-detail.component";
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import { ActorsListComponent } from "./components/actors/actors-list/actors-list.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'actors',
    component: ActorsListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
