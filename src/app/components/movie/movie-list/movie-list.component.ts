import {Component, Input } from '@angular/core';
import {MovieList} from "../../../interfaces/movie-list";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input()
  moviesData: MovieList | undefined;

}
