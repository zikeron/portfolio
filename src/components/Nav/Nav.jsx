import React from 'react';
import './nav.css';

export const Nav = ({ handlers }) => {
  const { modalOpen, contentModal, headerContent } = handlers;

  const handleOnClick = container => {
    modalOpen();
    contentModal(container);
    headerContent(container);
  };

  return (
    <nav>
      <div className="nav-item">
        <a onClick={() => handleOnClick('About')}>ABOUT</a>
      </div>
      <div className="nav-item">
        <a onClick={() => handleOnClick('Skills')}>SKILLS</a>
      </div>
      <div className="nav-item">
        <a onClick={() => handleOnClick('Experience')}>EXPERIENCE</a>
      </div>
      <div className="nav-item">
        <a onClick={() => handleOnClick('Contact')}>CONTACT</a>
      </div>
    </nav>
  );
};
