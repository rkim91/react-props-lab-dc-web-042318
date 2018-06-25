import React from "react";
import ReactDOM from "react-dom";

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors}</h3>
      </div>
    );
  }
}

const spaceshipColors = ["black", "red"];

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: spaceshipColors.join(", ")
};
