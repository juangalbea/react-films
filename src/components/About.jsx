import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                <h2 style={{fontSize: "40px", margin: "30px"}} >About</h2>
                <div className="flexi">
                    <img src={require('../img/movie-918655_1280.jpg')} alt="" />
                    <p style={{fontSize: "25px", margin: "30px", width: "700px", textAlign: "left"}} >This is an example of good practice coding using react, json, rutes, forms with a thematic of films</p>
                </div>
            </div>
        )
    }
}

export default About
