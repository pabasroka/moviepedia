import {Component, HostListener} from '@angular/core';
import {MovieService} from "./services/movie.service";
import {SearchService} from "./services/search.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviepedia';
  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(
    private scroll: ViewportScroller
  ) {
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}
