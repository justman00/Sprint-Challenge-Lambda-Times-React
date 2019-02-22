import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      selectedImage: 0
    };
  }
  componentDidMount() {
    this.setState({ imgs: carouselData });
  }

  leftClick = () => {
    if (this.state.selectedImage === 0) {
      this.setState({ selectedImage: 3 });
    } else {
      this.setState(prevState => ({
        selectedImage: --prevState.selectedImage
      }));
    }
  };

  rightClick = () => {
    if (this.state.selectedImage === 3) {
      this.setState({ selectedImage: 0 });
    } else {
      this.setState(prevState => ({
        selectedImage: ++prevState.selectedImage
      }));
    }
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.imgs[this.state.selectedImage]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
