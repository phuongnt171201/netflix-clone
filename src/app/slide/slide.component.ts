import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {ResultsEntity} from '../model/movie';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() titleSlide;
  @Input() movies;
  constructor(private movieService: MovieService) {
    // this.loadImgs();
  }

  ngOnInit(): void {
  }

  // loadImgs() {
  //   this.title =
  //   this.movieService.getNetflixOriginals(this.API_KEY).subscribe((res: any) => {
  //     if (res) {
  //       this.movies = res.results;
  //       // this.movies.map((movie) => )
  //       console.log(this.movies);
  //     } else {
  //       console.error(`Call api get movie error: ${res.data}`);
  //     }
  //   });
  // }

}
