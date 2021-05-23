import React from 'react';
import portraitImage from '../../assets/portraits/portrait-brandon.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={portraitImage} className="my-2" alt="Photo of Brandon" />
      <div className="my-2">
        <p>
          I am a creative, analytical self-starter eager to take on new challenges. I have former experience in the semiconductor industry, but have now devoted my efforts to field of web development. I like clean, simple, and easy to use web design.
        </p>
      </div>
    </section>
  );
}

export default About;
