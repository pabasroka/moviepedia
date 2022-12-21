import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as urlPaths from '../constants/urlPaths';
import {Movie} from "../interfaces/movie";
import {Observable} from "rxjs";
import {MovieList} from "../interfaces/movie-list";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(urlPaths.getMovieById(id));
  }

  getLatestMovie(): Observable<Movie> {
    return this.http.get<Movie>(urlPaths.latestMovie());
  }

  getPopularMovies(pageNumber: number): Observable<MovieList> {
    return this.http.get<MovieList>(urlPaths.getPopularMovies(pageNumber));
  }
}
