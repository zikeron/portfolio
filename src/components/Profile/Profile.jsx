import React from 'react';
import './profile.css';

export const Profile = () => {
  return (
    <section>
      <div className="profile__container">
        <figure>
          <img
            className="profile__img"
            src="https://ziker.s3.us-east-2.amazonaws.com/10414522_10204423569851773_2141741865213452459_n.jpg"
            alt="profile picture"
          />
        </figure>
        <h1 className="profile__container-title">Alejandro Cortez</h1>
        <p>
          SOFTWARE ENGINEER. MASTER IN PROJECT MANAGEMENT. LOVER OF COFFEE AND
          SOFTWARE DEVELOPMENT.{' '}
        </p>
        <p>THINK THAT A PROBLEM IS POSSIBLE OPPORTUNITY.</p>
      </div>
    </section>
  );
};
