import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Movie} from "../../../interfaces/movie";
import {ActivatedRoute} from "@angular/router";
import * as urlPaths from '../../../constants/urlPaths';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined
  urlPaths = urlPaths;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getMovieById(params['id']).subscribe(data => {
       this.movie = data;
      });
    });
  }

  setBackground() {
    if (!this.movie || !this.movie.backdrop_path) {
      return {
        'background-color': 'black',
        'width': '100px',
        'height': '100px',
      };
    }
    return {
      'background-image': urlPaths.coverPath(this.movie.backdrop_path),
      'width': '100px',
      'height': '100px',
    };
  }

}
