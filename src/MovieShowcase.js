import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // const name = "Santa Clause"
    // return <MovieCard name={name} /> 
    return movieData.map((movie, index) => <MovieCard
		      key={index}
		      title={movie.title}
		      IMDBRating={movie.IMDBRating}
		      genres={movie.genres}
		      poster={movie.poster}
		    />)
  }
    // map over your movieData array and return an array of the correct JSX
  

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }

}
