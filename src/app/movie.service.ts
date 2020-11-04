import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Movie} from "./model/movie";

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_KEY = '14df9d5f2206595b05c62b3d3d15b8e0';

  constructor(private http: HttpClient) {
  }
  getOriginals(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.originals}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }
  getTrending(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.trending}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }
  getPopular(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.popular}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }
  getLastest(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.latest}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }
  getNowPlaying(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.now_playing}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }
  getUpcoming(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.upcoming}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }
  getTopRated(): Observable<Movie>{
    return this.http.get<Movie>(`https://api.themoviedb.org/3${endpoint.top_rated}?api_key=${this.API_KEY}&language=en-US&page=1`);

  }



}
