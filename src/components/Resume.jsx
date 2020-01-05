import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
        <section class="ftco-section ftco-no-pb goto-here" id="about-section">
            <div class="container">
                <div class="row">
                    {/* <div class="col-md-3">
                        <nav id="navi">
                            <ul>
                                <li><a href="#page-1">Education</a></li>
                                <li><a href="#page-2">Experience</a></li>
                                <li><a href="#page-3">Study Abroad</a></li>
                            </ul>
                        </nav>
                    </div> */}
                    <div class="col-md-9">
                        <div id="page-1" class= "page one">
                            <h2 class="heading">Education</h2>
                            <div class="resume-wrap d-flex">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="flaticon-ideas"></span>
                                </div>
                                <div class="text pl-3">
                                    <span class="date">Sept 2016 - May 2020</span>
                                    <h2>Bachelor of Science in Computer Science</h2>
                                    <span class="position">University of Michigan, Ann Arbor</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="page-2" class= "page two">
                            <h2 class="heading">Summer Experiences</h2>
                            <div class="resume-wrap d-flex">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="flaticon-ideas"></span>
                                </div>
                                <div class="text pl-3">
                                    <span class="date">May 2019 - Aug 2019</span>
                                    <h2>Criteo</h2>
                                    <span class="position">Software Engineering Intern</span>
                                    <p></p>
                                </div>
                            </div>
                            <div class="resume-wrap d-flex">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="flaticon-ideas"></span>
                                </div>
                                <div class="text pl-3">
                                    <span class="date">May 2018 - Aug 2018</span>
                                    <h2>University of Michigan, Information Technology Services</h2>
                                    <span class="position">Software Engineering Intern</span>
                                    <p></p>
                                </div>
                            </div>
                            <div class="resume-wrap d-flex">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="flaticon-ideas"></span>
                                </div>
                                <div class="text pl-3">
                                    <span class="date">May 2017 - Aug 2017</span>
                                    <h2>Study Abroad</h2>
                                    <span class="position">Shanghai Jiao Tong University - Joint Institute</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}