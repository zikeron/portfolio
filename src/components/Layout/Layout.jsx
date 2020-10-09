import React from 'react';
import { Profile } from '../Profile/Profile';
import { Nav } from '../Nav/Nav';
import './layout.css';
import { Modal } from '../Modal/Modal';

export const Layout = () => {
  return (
    <section>
      <Modal />
      <div className="container">
        <div className="profile">
          <Profile />
        </div>
        <div className="navigation">
          <Nav />
        </div>
        <div className="footer">
          <div className="footer__container">
            <p>
              MADE WITH ❤️ BY ALEJANDRO CORTEZ A.K.A ZIKER{' '}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
