import React from 'react';
import horiseon from "../../assets/photos/horiseon.png";

function Portfolio() {
    return (
        <section>
            <h1 id="portfolio">Portfolio</h1>
            <p>A few of my projects are included below</p>

            <div className="flex-row">
                <img src={horiseon} className="img-thumbnail mx-1"  alt="author" />
            </div>
            <p>Horiseon: HTML cleanup and CSS optimization</p>
            <a href="https://github.com/emmccormick/module-1-chal">Github Repo</a>
            <a href="https://emmccormick.github.io/module-1-chal/">Deployed Site</a>

            <div className="flex-row">
                <img src={horiseon} className="img-thumbnail mx-1"  alt="author" />
            </div>
            <p>Run Buddy: HTML and CSS</p>
            <a href="https://github.com/emmccormick/module-1-chal">Github Repo</a>
            <a href="https://emmccormick.github.io/module-1-chal/">Deployed Site</a>

            <div className="flex-row">
                <img src={horiseon} className="img-thumbnail mx-1"  alt="author" />
            </div>
            <p>Project 3 placeholder</p>
            <a href="https://github.com/emmccormick/module-1-chal">Github Repo</a>
            <a href="https://emmccormick.github.io/module-1-chal/">Deployed Site</a>

            <div className="flex-row">
                <img src={horiseon} className="img-thumbnail mx-1"  alt="author" />
            </div>
            <p>Project 4</p>
            <a href="https://github.com/emmccormick/module-1-chal">Github Repo</a>
            <a href="https://emmccormick.github.io/module-1-chal/">Deployed Site</a>

            <div className="flex-row">
                <img src={horiseon} className="img-thumbnail mx-1"  alt="author" />
            </div>
            <p>Project 5</p>
            <a href="https://github.com/emmccormick/module-1-chal">Github Repo</a>
            <a href="https://emmccormick.github.io/module-1-chal/">Deployed Site</a>

            <div className="flex-row">
                <img src={horiseon} className="img-thumbnail mx-1"  alt="author" />
            </div>
            <p>Project 6</p>
            <a href="https://github.com/emmccormick/module-1-chal">Github Repo</a>
            <a href="https://emmccormick.github.io/module-1-chal/">Deployed Site</a>

        </section>
    );
}

export default Portfolio
