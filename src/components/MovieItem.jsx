import React from 'react'
import films from '../films.json';
import './MovieItem.css'
import ModalPoster from './ModalPoster';
import ModalImages from './ModalImages';

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

  return (
    <div className="container">
      <div className="header">
        <div className="poster">
          {/* <img src={foundMovie.PosterBig} alt="" /> */}
          <ModalPoster thePoster={foundMovie.PosterBig} />
        </div>
        <div className="info">
          <div className="title">
            <h1>{foundMovie.Title} <span style={{fontWeight: "lighter"}}>{foundMovie.Type != 'movie' && `(${foundMovie.Type})`}</span></h1>
          </div>
          <div className="content">
            <div className="firstInfo">
              <ul>
                <li><b>Year: </b> {foundMovie.Released}</li>
                <li><b>Running time: </b> {foundMovie.Runtime}</li>
                <li><b>Country: </b> {foundMovie.Country}</li>
                <li><b>Genre: </b> {foundMovie.Genre}</li>
                <li><b>Language: </b> {foundMovie.Language}</li>
                <li><b>Director: </b> {foundMovie.Director}</li>
                <li><b>Actors: </b> {foundMovie.Actors}</li>
                <li><b>Screenwriter: </b> {foundMovie.Writer}</li>
              </ul>
            </div>
            <div className="secondInfo">
              <b>Rating</b> <p><span className="badge badge-secondary" style={{ fontSize: "20px" }} >{foundMovie.imdbRating}</span></p>
              <b>Awards</b> <p>{foundMovie.Awards}</p>
              <b>Plot</b> <p>{foundMovie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="images">
        <ModalImages theImages={foundMovie.Images} />
      </div>
    </div>
  )
}

export default MovieItem
