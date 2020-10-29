import { Component, OnInit } from '@angular/core';
import {Movie} from '../model/movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   API_KEY = '14df9d5f2206595b05c62b3d3d15b8e0';
   movies: Movie[];

  constructor(private movieService: MovieService) {
    this.loadNetflixOriginals();
  }

  ngOnInit(): void {
  }

  loadNetflixOriginals() {
    this.movieService.getNetflixOriginals(this.API_KEY).subscribe((res: any) => {
      if (res){
        this.movies = res;
        console.log(this.movies);
      } else {
        console.error(`Call api get movie error: ${res.data}`);
      }
    });
  }



}
