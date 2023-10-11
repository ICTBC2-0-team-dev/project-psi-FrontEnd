import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import SmoothieCard  from './CardForCarrouselProfil'

export default class CarrouselProfil extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: 1,
      content: <SmoothieCard />,
    },
    {
      key: 2,
      content: <SmoothieCard />,
    },
    {
      key: 3,
      content: <SmoothieCard />,
    },
    {
      key: 4,
      content: <SmoothieCard />,
    },
    {
      key: 5,
      content: <SmoothieCard />,
    },
    {
      key: 6,
      content: <SmoothieCard />,
    },
    {
      key: 7,
      content: <SmoothieCard />,
    },
    {
      key: 8,
      content: <SmoothieCard />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        ></div>
      </div>
    );
  }
}
