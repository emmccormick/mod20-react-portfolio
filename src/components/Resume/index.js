import React from 'react';
import resumeDoc from "../../assets/Resume.pdf"

function Resume() {
    return (
        <section>
            <h1 id="resume">Resume</h1>
            <p>click the link below for my resume</p> 
            <a href={resumeDoc} target="_blank">Resume</a>
            
        </section>
    )
}

export default Resume;