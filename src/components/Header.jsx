import React, { Component } from 'react';
import '../css/w3.css';
import photo from '../images/aadhar.JPG';

export default class Header extends Component {
  render() {
    return (
      <img class="w3-image" src={photo} alt="" width="400" height="100"></img>
    )
  }
}