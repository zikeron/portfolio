import React from 'react';
import profileImg from '../../assets/profile/profile.jpg';
import profileWebp from '../../assets/profile/profile.webp';
import './profile.css';

export const Profile = () => {
  return (
    <section>
      <div className="profile__container">
        <picture>
          <source type="image/webp" srcSet={profileWebp} />
          <source type="image/jpg" srcSet={profileImg} />
          <img
            className="profile__img"
            height="150px"
            width="150px"
            src={profileImg}
            alt="profile picture"
          />
        </picture>
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
