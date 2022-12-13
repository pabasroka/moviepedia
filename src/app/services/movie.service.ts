import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as urlPaths from '../constants/urlPaths';
import {Movie} from "../interfaces/movie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(urlPaths.getMovieById(id));
  }

  getLatestMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(urlPaths.latestMovies());
  }
}
