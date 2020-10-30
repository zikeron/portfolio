import React from 'react';
import linkedInLogo from '../../assets/contact/contact-linkedin.png';
import githubLogo from '../../assets/contact/contact-github.png';
import twitterLogo from '../../assets/contact/contact-twitter.png';
import './contact.css';

const contacts = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alejandro-cortez',
    src: linkedInLogo,
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/zikeron',
    src: githubLogo,
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://twitter.com/ziker_on',
    src: twitterLogo,
  },
];

export const Contact = () => {
  return (
    <article>
      {contacts.map(contact => {
        return (
          <div className="contact__container" key={contact.id}>
            <div className="contact__container-img">
              <figure>
                <img src={contact.src} alt={contact.name} />
              </figure>
            </div>
            <div className="contact__container-link">
              <a href={contact.url}>{contact.name}</a>
            </div>
          </div>
        );
      })}
    </article>
  );
};
