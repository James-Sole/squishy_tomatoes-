import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from'../movie';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-review',
  templateUrl: './all-review.component.html',
  styleUrls: ['./all-review.component.css']
})
export class AllReviewComponent implements OnInit {
movie: Movie;
reviews:any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.movie = new Movie;
    this.reviews = [];
  }

  ngOnInit() {
    this.getReviews()
  }
  getReviews(){
    this._route.params.subscribe( (params: Params) => {
      this._httpService.getMovie(params.id).subscribe(
          (movie: Movie) => {
              this.movie = movie;
              this.reviews = movie.reviews;
          },
          (err: any) => {
              console.log(err);
          }
        );
      });
    }
    
  delete(){
    this._httpService.deleteMovie(this.movie._id).subscribe(
    (message) => {
      this._router.navigate(['/movie']);
    });
  }

}
