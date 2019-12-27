import React, { Component } from 'react'
import '../css/w3.css';

export default class Navbar extends Component {
  render() {
    return (
        <div class="w3-top">
            <div class="w3-bar w3-white w3-wide w3-padding w3-card">
                <a href="#home" class="w3-bar-item w3-button"><b>AADHAR AGARWAL</b></a>
                <div class="w3-right w3-hide-small">
                    <a href="#about" class="w3-bar-item w3-button">About</a>
                    <a href="#projects" class="w3-bar-item w3-button">Projects</a>
                    <a href="#contact" class="w3-bar-item w3-button">Contact</a>
                </div>
            </div>
        </div>
    )
  }
}