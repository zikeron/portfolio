import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div className="footer__container">
      <p>
        {`MADE WITH `}❤️{` BY`} <b>ALEJANDRO CORTEZ</b> A.K.A <b>ZIKER</b>{' '}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};
