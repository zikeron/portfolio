import React, { useState, Suspense } from 'react';
import { Modal } from '../Modal/Modal';
import { Profile } from '../Profile/Profile';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { Contact } from '../Contact/Contact';
import './layout.css';

const Skills = React.lazy(() => import('../Skills/Skills'));

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [headerContent, setHeaderContent] = useState(false);
  const [modalFadeClass, setModalFadeClass] = useState(true);
  const [visible, setVisible] = useState('');

  const renderContent = () => {
    if (contentModal === 'About') {
      return <About />;
    } else if (contentModal === 'Skills') {
      return (
        <Suspense>
          <Skills />
        </Suspense>
      );
    } else if (contentModal === 'Experience') {
      return <Experience />;
    } else if (contentModal === 'Contact') {
      return <Contact />;
    }
  };

  const handleCloseModal = () => {
    setModalFadeClass(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setVisible('container__visible');
    }, 400);
  };

  const handleOpenModal = () => {
    setVisible('container__hidden');
    setModalFadeClass(true);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          name={headerContent}
          handleClick={handleCloseModal}
          modalFadeClass={modalFadeClass}
        >
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
              modalOpen: handleOpenModal,
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
    </>
  );
};
