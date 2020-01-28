import React, { Component } from 'react'
import aadhar from '../images/aadhar.JPG';


export default class Contact extends Component {
  render() {
    return (
        <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-7 heading-section text-center">
                        <h1 class="big big-2">Contact</h1>
                        <h2 class="mb-4">Contact Me</h2>
                    </div>
                </div>

                <div class="row no-gutters block-9" align="center">
                    <div class="col-md-6 order-md-last d-flex"> 
                        <form action="mail/contact_me.php" class="bg-light p-4 p-md-5 contact-form" method="post">
                            <div class="form-group">
                                <input name="name" type="text" class="form-control" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <input name="email"type="text" class="form-control" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <input name="subject" type="text" class="form-control" placeholder="Subject"/>
                            </div>
                            <div class="form-group">
                                <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message"/>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6 d-flex">
                        <div class="img">
                            <img src={aadhar} alt="" width="400"></img>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
  }
}