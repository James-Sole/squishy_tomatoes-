import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getMovies(){
   // our http response is an Observable, store it in a variable
      return this._http.get('/movies');
   }
   createMovies(movie){
   // our http response is an Observable, store it in a variable
      return this._http.post('/movies', movie );
   }
   createReview(review, id){
   // our http response is an Observable, store it in a variable
      return this._http.post('/movies/'+id+'/review', review );
   }
   getMovie(id){
   // our http response is an Observable, store it in a variable
      return this._http.get('/movies/'+id);
   }
   updateMovie(movie){
   // our http response is an Observable, store it in a variable
      return this._http.patch('/movies/5afa0f593a47ef42a71b6808', movie);
   }
   deleteMovie(id){
   // our http response is an Observable, store it in a variable
      return this._http.delete('/movies/'+id);
   }
}
