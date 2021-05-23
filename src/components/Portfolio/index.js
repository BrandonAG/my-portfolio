import React from 'react';
import 'materialize-css';

const projects = [
  {
    link: "",
    img: "",
    alt: "Average Joe's Fitness",
  },
  {
    link: "https://mailflyer.herokuapp.com/",
    img: "",
    alt: "Mail Flyer",
  },
  {
    link: "https://boiling-journey-97325.herokuapp.com/",
    img: "",
    alt: "Google Book Search",
  },
  {
    link: "https://jaderiver62.github.io/safe-passage/",
    img: "",
    alt: "Safe Passage",
  },
  {
    link: "https://brandonag.github.io/horiseon/",
    img: "",
    alt: "Horiseon",
  },
  {
    link: "https://brandonag.github.io/run-buddy/",
    img: "",
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
                <a href={project.link}>
                  <img width="305" height="229" src={project.img} class="responsive-img" alt={project.name} loading="lazy" title={project.name} />
                  <span class="card-title">{project.name}</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* <div class="col s12 m6 l4">           
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <a href="https://adbeus.com/montreal/st-henri/buck-15-saint-henri-montreal/">
                <img width="305" height="229" src="https://adbeus.com/wp-content/uploads/2016/11/rlbmlm0nc3qlivffw35l-305x229.jpg" class="responsive-img" alt="Café Parvis / Downtown, Montreal" loading="lazy" title="Café Parvis / Downtown, Montreal" />
                <span class="card-title">Buck 15</span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Portfolio;
