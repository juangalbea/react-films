import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// const images = [
//     '//placekitten.com/1500/500',
//     '//placekitten.com/4000/3000',
//     '//placekitten.com/800/1200',
//     '//placekitten.com/1500/1500',
// ];

export default class ModalImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: props.theImages
    };

  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        
        {this.state.images.map((image, idx) => (
          <a type="button" onClick={() => this.setState({ isOpen: true, photoIndex: idx })} style={{margin: "10px"}}>
          <img key={idx} src={image} alt="" />
          </a>
        ))}
        

        {isOpen && (
          <Lightbox
            mainSrc={this.state.images[photoIndex]}
            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.state.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}