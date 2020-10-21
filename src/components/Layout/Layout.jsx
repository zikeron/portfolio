import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Profile } from '../Profile/Profile';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { About } from '../About/About';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Contact } from '../Contact/Contact';
import './layout.css';

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [headerContent, setHeaderContent] = useState(false);
  const visible = isModalOpen ? 'container__hidden' : '';

  const renderContent = () => {
    switch (contentModal) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Contact':
        return <Contact />;
    }
  };

  return (
    <section>
      {isModalOpen && (
        <Modal name={headerContent} handleClick={() => setIsModalOpen(false)}>
          {renderContent()}
        </Modal>
      )}
      <div className={`container ${visible}`}>
        <div className="profile">
          <Profile />
        </div>
        <div className="navigation">
          <Nav
            handlers={{
              modalOpen: () => setIsModalOpen(true),
              contentModal: setContentModal,
              headerContent: setHeaderContent,
              isModalOpen,
            }}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </section>
  );
};
