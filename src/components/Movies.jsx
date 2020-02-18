import React, { Component } from 'react'
import films from '../films.json';
import MovieElement from './MovieElement';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

export class Movies extends Component {
  render() {
    return (
      <div>
        <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">Movie List</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                  <div className="list-group">
                    {films.map((film, idx) => {
                      return (
                        <div key={idx} className="list-movies">

                          <Link
                            to={`/films/${film.imdbID}`}
                            className="list-group-item list-group-item-action"
                            style={{ fontSize: "25px" }}
                            >
                            <img src={film.Poster} alt="" />
                            <div><h3>{film.Title}</h3><p>{film.Year}</p><p>{film.Director}</p></div>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <Route path="/films/:imdbID" component={MovieElement} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movies
