import React, { Component } from 'react'
import aadhar from '../images/aadhar.JPG';

export default class About extends Component {
  render() {
    return (
      <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
    	<div class="container">
    		<div class="row d-flex no-gutters">
    			<div class="col-md-6 col-lg-6 d-flex">
    				<div class="img-about img d-flex align-items-stretch">
    					<div class="overlay"></div>
	    				<div class="img d-flex align-self-stretch align-items-center">
                <img src={aadhar} alt="" width="400"></img>
	    				</div>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-6 pl-md-5 py-5">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section">
		          	<h1 class="big">About</h1>
		            <h2 class="mb-4">About Me</h2>
		            <p>I am an Indian.</p>
								<p>I was brought up in Ghana, West Africa.</p>
								<p>I am currently studying at the University of Michigan, Ann Arbor.</p>
								<p>This place is a collection of my experiences. </p>
		            <ul class="about-info mt-4 px-md-0 px-2">
		            	<li class="d-flex"><span>Name:</span> <span>Aadhar Agarwal</span></li>
		            	<li class="d-flex"><span>Email:</span> <span>Aadhar@umich.edu</span></li>
									{/* <li class="d-flex"><span><a href="https://www.linkedin.com/in/aadhar03"><img src={linkedin} width="40"></img></a></span></li> */}
		            </ul>
		          </div>
		        </div>
	          <div class="counter-wrap d-flex mt-md-3">
              <div class="text">
                <p><a href="https://drive.google.com/file/d/1NOsy1K9wes-V3B0VrZJ01Utsz9AA--9O/view?usp=sharing" class="btn btn-primary py-3 px-3">Download Resume</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
    )
  }
}