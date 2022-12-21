import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../interfaces/movie";
import {MovieList} from "../../../interfaces/movie-list";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input()
  moviesData: MovieList | undefined;

  ngOnInit(): void {
    console.log(this.moviesData);
  }

}
