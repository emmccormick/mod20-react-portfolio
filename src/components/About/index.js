import React from 'react'
import aboutMeImage from "../../assets/photos/aboutmepic.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">A quick introduction</h1>
      <img src={aboutMeImage} className="my-2" style={{ height: "50%", width: "50%" }} alt="author" />
      <div className="my-2">
        <p>
          Hi! I'm Emily, a developer in training interested in making a career transition from the non-profit world to tech. 
      </p>
      </div>
    </section>
  )
}

export default About
