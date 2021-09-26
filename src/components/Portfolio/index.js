import React from 'react';
import averageJoeImage from '../../assets/portfolio-images/average-joe.PNG';
import mailFlyerImage from '../../assets/portfolio-images/mailflyer.png';
import bookSearchImage from '../../assets/portfolio-images/book-search.png';
import safePassageImage from '../../assets/portfolio-images/safe-passage.PNG';
import horiseonImage from '../../assets/portfolio-images/horiseon.png';
import runBuddyImage from '../../assets/portfolio-images/run-buddy.png';

const projects = [
  {
    link: "https://mysterious-crag-12899.herokuapp.com/",
    repo: "https://github.com/patrickmklee/AverageJoeFitness",
    img: averageJoeImage,
    alt: "Average Joe's Fitness",
  },
  {
    link: "https://mailflyer.herokuapp.com/",
    repo: "https://github.com/haydenkd/MailFlyer",
    img: mailFlyerImage,
    alt: "Mail Flyer",
  },
  {
    link: "https://boiling-journey-97325.herokuapp.com/",
    repo: "https://github.com/BrandonAG/book-quest",
    img: bookSearchImage,
    alt: "Google Book Search",
  },
  {
    link: "https://jaderiver62.github.io/safe-passage/",
    repo: "https://github.com/jaderiver62/safe-passage",
    img: safePassageImage,
    alt: "Safe Passage",
  },
  {
    link: "https://brandonag.github.io/horiseon/",
    repo: "https://github.com/BrandonAG/horiseon",
    img: horiseonImage,
    alt: "Horiseon",
  },
  {
    link: "https://brandonag.github.io/run-buddy/",
    repo: "https://github.com/BrandonAG/run-buddy",
    img: runBuddyImage,
    alt: "Run Buddy",
  },
]

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="about">My Portfolio</h1>
      <div class="section">

        {projects.map((project) => (
          <div class="col s12 m6 l4">           
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <a href={project.link} target="_blank">
                  <img width="305" height="229" src={project.img} class="responsive-img" alt={project.name} loading="lazy" title={project.name} />
                  <span class="card-title">{project.name}</span>
                </a>
                <div className="proj-links">
                  <a href={project.link} target="_blank">Deployed App</a> | <a href={project.repo} target="_blank">GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
