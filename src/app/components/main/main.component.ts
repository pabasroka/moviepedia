import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";
import {MovieList} from "../../interfaces/movie-list";
import {PageEvent} from "@angular/material/paginator";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  movies: MovieList | undefined;
  moviesAll: MovieList | undefined;
  MAX_POPULAR_MOVIES_NUMBER = 10000;
  MAX_PAGE_INDEX = 500;

  constructor(
    private movieService: MovieService,
    private searchService: SearchService,
  ) {
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies(this.pageIndex + 1).subscribe((movies: MovieList) => {
      this.movies = movies;
      this.moviesAll = movies;
      this.setupPaginator();
    });
  }

  setupPaginator(): void {
    if (!this.movies) return;

    if (this.movies.total_pages > this.MAX_POPULAR_MOVIES_NUMBER) {
      this.length = this.MAX_POPULAR_MOVIES_NUMBER;
      this.pageIndex = this.movies.page;
    } else {
      this.length = this.movies.total_pages;
      this.pageIndex = this.movies.page;
    }
  }

  length = 20;
  pageSize = 20;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    if (this.pageIndex < this.MAX_PAGE_INDEX) {
      console.log(this.pageIndex);
      this.movieService.getPopularMovies(this.pageIndex + 1).subscribe((movies: MovieList) => {
        this.movies = movies;
      });
    }
  }

  searchMovie($event: Event) {
    const phrase = ($event.target as HTMLInputElement).value
    if (phrase === '') {
      this.movies = this.moviesAll;
    } else {
      this.searchService.getMovieByPhrase(phrase).subscribe((data: MovieList) => {
        this.movies = data;
      })
    }
    this.setupPaginator();
  }
}
