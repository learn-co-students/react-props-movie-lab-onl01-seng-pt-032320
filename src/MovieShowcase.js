import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
      //map over data and put on moviecard
      //key value pairs
  return movieData.map((movie,i) => <MovieCard key={i} 
  title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

//const cakelis = cakes.map((cake,i) => <MyDiv cake={cake} key={i} handleOnClick={this.handleClick} />)
// title: 'The Trash Man',
// IMDBRating: 5,
// genres: ['crime', 'period piece'],
// poster: 'the-trash-man'
// },