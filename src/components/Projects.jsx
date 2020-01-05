import React, { Component } from 'react'
import speechtotext from '../images/stt.png'

export default class Projects extends Component {
  render() {
    return (
        <section class="ftco-section ftco-project" id="projects-section">
            <div class="container-fluid px-md-0">
                <div class="row no-gutters justify-content-center pb-5">
            <div class="col-md-12 heading-section text-center">
                <h1 class="big big-2">Projects</h1>
                <h2 class="mb-4">My Projects</h2>
                <p></p>
            </div>
            </div>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <div class="project img d-flex justify-content-center align-items-center stt" >
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a>Multidisciplinary Project</a></h3>
                                <span>Speech-To-Text</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="project img d-flex justify-content-center align-items-center fcc">
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a>Open Source Contribution</a></h3>
                                <span>FreeCodeCamp</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="project img d-flex justify-content-center align-items-center uma">
                            <div class="overlay"></div>
                            <div class="text text-center p-4">
                                <h3><a>Student Project Team</a></h3>
                                <span>UM AUTONOMY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}