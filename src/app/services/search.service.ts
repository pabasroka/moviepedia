import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../interfaces/movie";
import * as urlPaths from "../constants/urlPaths";
import {MovieList} from "../interfaces/movie-list";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getMovieByPhrase(phrase: string): Observable<MovieList> {
    return this.http.get<MovieList>(urlPaths.searchMovie(phrase));
  }

}
