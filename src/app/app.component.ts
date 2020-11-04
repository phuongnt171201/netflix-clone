import { Component } from '@angular/core';
import {ResultsEntity} from './model/movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'netflix-clone';
  titleSlide: string;
  movies: ResultsEntity[];
  originals: any;
  trending;
  topRated;
  popular;
  nowPlaying;

  constructor(private movieService: MovieService) {
    this.loadOriginals();
    this.loadNowPlaying();
    this.loadPopular();
    this.loadTopRated();
    this.loadTrending();
  }
  loadOriginals() {
    this.movieService.getOriginals().subscribe((res: any) => {
      if (res) {
        this.originals = res.results;
        console.log(this.originals);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }

  loadNowPlaying() {
    this.movieService.getNowPlaying().subscribe((res: any) => {
      if (res) {
        this.nowPlaying = res.results;
        console.log(this.nowPlaying);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }

  loadTrending() {
    this.movieService.getTrending().subscribe((res: any) => {
      if (res) {
        this.trending = res.results;
        console.log(this.trending);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }

  loadTopRated() {
    this.movieService.getTopRated().subscribe((res: any) => {
      if (res) {
        this.topRated = res.results;
        console.log(this.topRated);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }

  loadPopular() {
    this.movieService.getPopular().subscribe((res: any) => {
      if (res) {
        this.popular = res.results;
        console.log(this.popular);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }




}
