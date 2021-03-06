import React, { useState } from 'react';
import './modal.css';

export default ({ name = 'modal', children, handleClick, modalFadeClass }) => {
  return (
    <div
      className={`modal ${
        modalFadeClass ? 'modal__fadein' : 'modal__fadeout'
      } `}
    >
      <div className="modal__header">
        <div className="modal__header-title">
          <p>{name}</p>
        </div>
        <div className="modal__header-close">
          <p onClick={() => handleClick()}>&times;</p>
        </div>
      </div>
      <div className="modal__container">{children}</div>
    </div>
  );
};
