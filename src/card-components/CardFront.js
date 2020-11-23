import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

// title: 'The Trash Man',
// IMDBRating: 5,
// genres: ['crime', 'period piece'],
// poster: 'the-trash-man'
// },
