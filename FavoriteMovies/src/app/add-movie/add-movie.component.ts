import { Component, OnInit } from '@angular/core';
import{MovieService, Movie} from '../movie.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm = this.fb.group({
    title:[''],
    description:[''],
    image:['']
  })
  constructor(private movieService:MovieService, private fb:FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    const title = this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const image = this.movieForm.value.image;
    this.movieService.addMovie(title,description,image);

    this.movieForm.reset();
  }

  onDelete(i:number){
    this.movieService.deleteMovie(i);
  }
}
