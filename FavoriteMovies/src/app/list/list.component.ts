import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import{MovieService, Movie} from '../movie.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies:Movie[] = [];
  displayList = true;
  moviesBeingEdited={};
  moviesBeingDisplayed:Movie;
  movieDisplayed:boolean;
  constructor(private movieService: MovieService) {
    this.movieService = movieService;
   }

  ngOnInit() {
    this.getMovies();
  }
  onDeleteMovie(i:number){
    this.movieService.deleteMovie(i);
    this.getMovies();
  }
  onStartEditMovie(i:number){
    this.moviesBeingEdited[i] = true;
  }
  onSaveEditMovie(i:number){
    this.moviesBeingEdited[i] = false;
  }
  getMovies(){
    setTimeout(()=>{
      this.movies =  this.movieService.getMovie();
    },0);
  }
    onViewMovie(movie:Movie){
      this.moviesBeingDisplayed = movie;
      this.movieDisplayed = true;
    }
  }
