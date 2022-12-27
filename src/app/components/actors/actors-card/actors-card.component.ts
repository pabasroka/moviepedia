import {Component, Input} from '@angular/core';
import {Person} from "../../../interfaces/person";
import * as urlPaths from '../../../constants/urlPaths';
import {KnownFor} from "../../../interfaces/known-for";
import {MovieKnownFor} from "../../../interfaces/movie-known-for";

@Component({
  selector: 'app-actors-card',
  templateUrl: './actors-card.component.html',
  styleUrls: ['./actors-card.component.scss']
})
export class ActorsCardComponent {
  @Input()
  person: Person | undefined;
  urlPaths = urlPaths;

  movies(movie: Array<KnownFor>): Array<MovieKnownFor> {
    const movies: Array<MovieKnownFor> = [];


    movie.forEach(movie => {
      let title = '';
      let releasedDate = movie.release_date;

      if (movie.title) {
        title = movie.title
      } else if (movie.name) {
        title = movie.name
      } else if (movie.original_title) {
        title = movie.original_title
      } else if (movie.original_name) {
        title = movie.original_name
      }

      if (!releasedDate) {
        releasedDate = movie.first_air_date;
      }

      if (title !== '') {
        movies.push({
          title: title,
          voteAverage: movie.vote_average.toString(),
          releasedDate: releasedDate,
        })
      }
    });

    return movies;
  }

}
