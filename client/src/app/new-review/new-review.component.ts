import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from'../movie';
import { Review } from'../review';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
movie:any;
review: Review;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.movie = [];
    this.review= new Review();
  }

  ngOnInit() {
    this.getMovie();
  }
  getMovie(){
    this._route.params.subscribe( (params: Params) => {
      this._httpService.getMovie(params.id).subscribe(
          (movie: Movie) => {
              this.movie = movie;
          },
          (err: any) => {
              console.log(err);
          }
        );
      });
    }

  newReview(){
    let tempObservable = this._httpService.createReview(this.review, this.movie._id);
    tempObservable.subscribe(data => console.log("creats our review!", data));
    // this._router.navigate(['/movie']);
  }
}
