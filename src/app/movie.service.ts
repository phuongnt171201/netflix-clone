import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }
  getNetflixOriginals(api_key: string){
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`);

  }
  getTopRated(api_key: string){
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`);
  }
  getTrending(api_key: string){
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`);
  }
}
