import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AllReviewComponent } from './all-review/all-review.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
  {path: 'movie', component: AllMoviesComponent},
{path: 'movie/new', component: NewMovieComponent},
{path: 'movie/:id', component: AllReviewComponent},
{path: 'movie/:id/review', component: NewReviewComponent},
{ path: '', pathMatch: 'full', redirectTo: '/movie' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
