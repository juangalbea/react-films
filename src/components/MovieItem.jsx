import React from 'react'
import films from '../films.json';

const MovieItem = props => {
    // console.log(props)
    const getMovie = imdbID => {
      // console.log(imdbID)
      const theMovie = oneMovie => {
        console.log(imdbID)
        return oneMovie.imdbID === imdbID;
      };
      return films.find(theMovie);
    }
  
    const foundMovie = getMovie(props.match.params.imdbID);
    return(

    <div>{foundMovie.Title}</div>
    )
}

export default MovieItem
