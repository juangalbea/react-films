import React from 'react'
import films from '../films.json';
import { FaUser } from 'react-icons/fa';
import { Route, Link } from 'react-router-dom';


const MovieElement = props => {
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
    <div className="col-7" style={{display: "flex", justifyContent: "left", padding: "0 20px" }}>
      <img src={foundMovie.PosterBig} style={{ height: "450px", marginRight: "20px" }} alt="" />
      <div>
        <h1>{foundMovie.Title}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>{foundMovie.Year}</td>
              <td>{foundMovie.Country}</td>
            </tr>
            <tr>
              <td><span className="badge badge-secondary" style={{fontSize: "20px"}} >{foundMovie.imdbRating}</span></td>
              <td>{foundMovie.imdbVotes} <FaUser style={{position: "relative", bottom: "2px"}} />
              </td>
            </tr>
            <tr>
              <td>{foundMovie.Director}</td>
              <td>
                <ul>
                  {foundMovie.Actors.split(',').map((actor, idx) => (
                     <li key={idx}><a>{actor}</a></li>
                  ))}
                </ul>
              </td>
            </tr>
            
          </tbody>
        </table>
        <button className="btn btn-primary" style={{width: "110px"}} >
        <Link to={`/filmItem/${foundMovie.imdbID}`} style={{color: "white"}} >Movie info</Link>
        </button>
      </div>
    </div>
  )
}

export default MovieElement
