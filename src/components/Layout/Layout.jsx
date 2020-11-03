import React, { useState, Suspense } from 'react';
import { Profile } from '../Profile/Profile';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';

import './layout.css';

const Modal = React.lazy(() => import('../Modal/Modal'));
const About = React.lazy(() => import('../About/About'));
const Skills = React.lazy(() => import('../Skills/Skills'));
const Experience = React.lazy(() => import('../Experience/Experience'));
const Contact = React.lazy(() => import('../Contact/Contact'));

const Template = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentModal, setContentModal] = useState(false);
  const [headerContent, setHeaderContent] = useState(false);
  const [modalFadeClass, setModalFadeClass] = useState(true);
  const [visible, setVisible] = useState('');

  const renderContent = () => {
    if ('About' === contentModal) {
      return <About />;
    } else if ('Skills' === contentModal) {
      return <Skills />;
    } else if ('Experience' === contentModal) {
      return <Experience />;
    } else if ('Contact' === contentModal) {
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
          <Suspense>{renderContent()}</Suspense>
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

export const Layout = React.memo(Template, (prevProps, props) => {
  return prevProps === props;
});
