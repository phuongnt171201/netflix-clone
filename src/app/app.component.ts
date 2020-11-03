import { Component } from '@angular/core';
import {ResultsEntity} from './model/movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  API_KEY = '14df9d5f2206595b05c62b3d3d15b8e0';
  title = 'netflix-clone';
  titleSlide: string;
  movies: ResultsEntity[];

  constructor(private movieService: MovieService) {
    this.loadNetflixOriginals();
  }
  loadNetflixOriginals() {
    this.movieService.getNetflixOriginals(this.API_KEY).subscribe((res: any) => {
      if (res) {
        this.movies = res.results;
        // this.movies.map((movie) => )
        console.log(this.movies);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }


}
