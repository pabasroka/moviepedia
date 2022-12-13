import {Component, Input} from '@angular/core';
import {Movie} from "../../../interfaces/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input()
  movies: Array<Movie> | undefined;

}
