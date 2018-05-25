import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
movies:any;

  constructor(private _httpService: HttpService) {
    this.movies = [];
  }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(){
    let observable = this._httpService.getMovies();
    observable.subscribe( (movies)=> {
      this.movies = movies;
      console.log(this.movies);
      console.log('this was your movie');
    });
  }
}
