import React, { useState } from 'react';
import './dropdown.css';

export const Dropdown = ({ skill = {} }) => {
  const [showChild, setShowChild] = useState(false);

  const hasContent = () => {
    return skill.content.length;
  };

  return (
    <div className="dropdown__main">
      {Object.keys(skill).length > 0 ? (
        <>
          <div className="dropdown__parent-container">
            <figure>
              <img src="" alt={`${skill.name.toLowerCase()}_image`} />
            </figure>
            <p>{skill.name}</p>
            {hasContent() ? (
              <button onClick={() => setShowChild(!showChild)}>
                Show more!{' '}
              </button>
            ) : null}
          </div>
          {showChild && (
            <div className="dropdown__child-container">
              {skill.content.map((item, index) => {
                return (
                  <div className="dropdown__child-item" key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};
