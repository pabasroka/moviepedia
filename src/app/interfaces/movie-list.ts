import {Movie} from "./movie";

export interface MovieList {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
