import React, { Component } from 'react';
import pdf from './resume_denisKen.pdf';


class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={"images/profile_pic.jpg"} alt="Denis Ken Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
               I like new challenges and learn new things. I developed games on Unity, 
               for WebGL, Android and even Virtual Reality, using Google Dream.
               <br/>
               I developed applications for Mobile and Web Mobile, where I had challenges to 
               transform a 2D engine, capable of reproducing 3D. And I got 
               some achievements and awards that I am very proud!
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact</h2>
                  <p className="address">
						   <span>Denis Ken</span><br/>
                     <span>hey@denis.ken</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={pdf} className="button" target={"_blank"}><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
