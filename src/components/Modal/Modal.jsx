import React, { useState } from 'react';
import './modal.css';

export const Modal = ({
  name = 'modal',
  children,
  handleClick,
  isModalOpen,
}) => {
  const modalFade = !isModalOpen ? 'modal__fadein' : 'modal__fadeout';

  return (
    <div className={`modal ${modalFade}`}>
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
