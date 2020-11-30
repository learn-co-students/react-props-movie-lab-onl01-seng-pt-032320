import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map( (x, i) => <MovieCard 
      title={x.title} 
      IMDBRating={x.IMDBRating} 
      genres={x.genres}
      poster={x.poster}
      key={i} 
    />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
