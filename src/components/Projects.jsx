import React, { Component } from 'react'
import '../css/w3.css';


export default class Projects extends Component {
  render() {
    return (
        <div>
            <div class="w3-container w3-padding-32" id="projects">
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16" align="left">Projects</h3>
            </div>
            <div class="w3-row-padding">
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Michigan</div>
                        <img src="" alt="michigan" width="350"/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
                        <img src="/w3images/house5.jpg" alt="House"/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
                        <img src="/w3images/house5.jpg" alt="House"/>
                    </div>
                </div>
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
                        <img src="/w3images/house5.jpg" alt="House"/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}