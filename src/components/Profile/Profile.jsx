import React from 'react';
import profileImg from '../../assets/profile/profile-bg.jpg';
import './profile.css';

export const Profile = () => {
  return (
    <section>
      <div className="profile__container">
        <figure>
          <img
            className="profile__img"
            height="150px"
            width="150px"
            src={profileImg}
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
