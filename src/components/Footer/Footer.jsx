import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div className="footer__container">
      <p>
        MADE WITH ❤️ BY ALEJANDRO CORTEZ A.K.A ZIKER {new Date().getFullYear()}
      </p>
    </div>
  );
};
