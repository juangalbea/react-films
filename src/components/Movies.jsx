import React, { Component } from 'react'
import films from '../films.json';
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom';

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
                            <div className="col-5" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                    <div className="list-group">
                                        {films.map((film, idx) =>  { return (
                    <a className="list-group-item list-group-item-action" style={{fontSize: "25px"}} href="/AFG">{film.Title}</a>
                  )})}
                                      
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies
