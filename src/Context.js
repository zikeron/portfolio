import React, { useState, createContext } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <Context.Provider>{children}</Context.Provider>;
};

export default {
  Provider,
  Context: Context.Consumer,
};
