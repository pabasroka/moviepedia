import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getLatestMovies().subscribe((movies: Array<Movie>) => {
      console.log(movies)
      // this.movies = movies;
    });
  }

}
