import React from "react";
import styled from "styled-components";
import image from "./klipartz9.png";

const sliderThumbStyles = (props) => `
  width: 25px;
  height: 25px;
  // background: ${props.color};
  cursor: pointer;
transform: scale(${props.scale}) rotate(-90deg);
  
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;

  input {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    z-index: 10;
    /* input[type="range"] {
      width: 350px;
    } */
  }
  .slider {
    position: absolute;
    left: 25%;
    top: 45%;

    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background-image: url(${image});
      filter: drop-shadow(2px 5px 4px rgba(0, 0, 0, 0.3));

      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 5,
  };

  handleOnChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <Styles
        scale={
          this.state.value >= 5
            ? this.state.value / 5
            : (10 - this.state.value) / 5
        }
        color={this.props.color}
      >
        <input
          type="range"
          min={0}
          max={10}
          value={this.state.value}
          className="slider"
          onChange={this.handleOnChange}
        />
      </Styles>
    );
  }
}
