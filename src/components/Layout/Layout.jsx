import React from 'react';
import './layout.css';

export const Layout = () => {
  return (
    <section>
      <div className="container">
        <div className="item item-about">
          <h3>About Me!</h3>
          <p> Hi there 👋 </p>
          <p>
            {' '}
            I'm Alejandro, Full-Stack developer with 6 years of experience in
            web application development using PHP & NodeJS language to develop
            back-end and 3 years of experience in the front-end, using
            technologies such as Angular, Vue JS, React. Currently, I am looking
            for job opportunities that will support me in continuing my
            professional growth.
          </p>
        </div>
        <div className="item item-experience">
          <h3>Experience</h3>
          <p>More details...</p>
        </div>
        <div className="item item-skills">
          <h3>Skills</h3>
        </div>
      </div>
    </section>
  );
};
