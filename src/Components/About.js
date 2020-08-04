import React, { Component } from 'react';

function About () {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>A highly motivated Junior web developer with 1+ year of experience in php, jQuery and HTML. Possesses a passion for creating intuitive, dynamic user experiences.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Eugene Park</span><br />
						   <span>82/1 Ambrico Place<br />
						         New Lynn, Auckland 0060
                   </span><br />
						   <span>010 0249 0523</span><br />
                     <span>epark5467@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://github.com/epark5467/" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}

export default About;
