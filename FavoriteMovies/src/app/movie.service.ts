import { Injectable } from '@angular/core';

export class Movie{
  title:string;
  description:string;
  image:string;

  constructor(title:string, description:string, image:string) {
    this.title = title;
    this.description = description;
    this.image = image;
   }
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Movie[] = [
    new Movie("Up", "Seventy-eight year old Carl Fredricksen travels to Paradise Falls in his home equipped with balloons, inadvertently taking a young stowaway.","https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
    new Movie("Toy Story 4",'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',"https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"),
    new Movie("Toy Stroy 3","The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.","https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY268_CR3,0,182,268_AL_.jpg")
  ]
  constructor() {}
  addMovie(title:string, description:string, image:string){
    this.movies.push(new Movie(title,description,image));
  }
  deleteMovie(i:number){
    this.movies.splice(i,1);
  }
  getMovie(): Movie[]{
    return this.movies;
  }
}
