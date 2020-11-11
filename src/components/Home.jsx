import React, { Component } from 'react'

import '../App.css';

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1 style={{fontSize: "60px", margin: "30px"}}>The films in <b>React</b></h1>
                <img src={require('../img/film-1668918_1280.jpg')} alt=""/>
            </div>
        )
    }
}

export default Home
