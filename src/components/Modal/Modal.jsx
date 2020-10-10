import React, { useState } from 'react';
import './modal.css';

export const Modal = ({ name = 'modal', children, handleClick }) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <div className="modal__header-title">
          <p>{name}</p>
        </div>
        <div className="modal__header-close">
          <p onClick={handleClick}>&times;</p>
        </div>
      </div>
      <div className="modal__container">{children}</div>
    </div>
  );
};
