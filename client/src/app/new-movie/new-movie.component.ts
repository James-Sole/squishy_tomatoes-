import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from'../movie';
import { Review } from'../review';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  movie: Movie;
  review: Review;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.movie = new Movie();
    this.review= new Review();
  }

  ngOnInit() {}

  newMovie(){
    let tempObservable = this._httpService.createMovies(this.movie);
    tempObservable.subscribe((Movie) => {
      this._httpService.createReview(this.review,Movie._id)
      .subscribe(data => console.log("creats our review!", data))
      });
    // this._router.navigate(['/movie']);
  }

}
