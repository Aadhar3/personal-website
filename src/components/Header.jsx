import React, { Component } from 'react';
import '../css/w3.css';
import christmas from '../images/christmas.JPG';

export default class Header extends Component {
  render() {
    return (
      <div>
        <img class="w3-image" src={christmas} alt="" width="1450"></img>
      </div>
    )
  }
}