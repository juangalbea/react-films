import React, { Component } from 'react'
import films from '../films.json';
import MovieElement from './MovieElement';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

export class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: films,
      search: ""
    }
    console.log(this.state.movieList)
  }

  // SearchMovie(e) {
  //   let searchtext = e.target.value;
  //   let clonedArray = { ...this.state };

  //   let filteredArray = clonedArray.movieList.filter(movie => {
  //     // console.log(movie.name.toLowerCase().indexOf(searchtext.toLowerCase()))
  //     return movie.Title.toLowerCase().indexOf(searchtext.toLowerCase()) >= 0;
  //   });

  //   console.log(clonedArray)
  //   this.setState(
  //     {
  //       ...this.state,
  //       movieList: filteredArray
  //     },
  //     () => {
  //       this.state.movieList = [...clonedArray.movieList];
  //     }
  //   );
  // }

  SearchMovie = (e) => {
    let filteredMovie = films.filter(movie => movie.Title.toUpperCase().includes(e.target.value.toUpperCase()));
    this.setState({ movieList: filteredMovie });
  }

  render() {
    return (
      <div>
        <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">Movie List</a>
                <input
                  className="form-control mr-sm-2"
                  type="text" value={this.value}
                  defaultValue=""
                  placeholder="Search"
                  aria-label="Search"
                  onChange={e => this.SearchMovie(e)} />
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                  <div className="list-group">
                    {this.state.movieList.map((film, idx) => {
                      return (
                        <div key={idx} className="list-movies">

                          <Link
                            to={`/react-films/films/${film.imdbID}`}
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
                <Route path="/react-films/films/:imdbID" component={MovieElement} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movies
