import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieItem from './components/MovieItem';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/react-films/' component={Home} />
        <Route path='/react-films/about' component={About} />
        <Route path='/react-films/films' component={Movies} />
        <Route path="/react-films/filmItem/:imdbID" component={MovieItem} />
      </Switch>
    </div>
  );
}

export default App;
