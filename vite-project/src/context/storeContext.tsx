import React from 'react';
import dataStore from './store';

const StoreContext = React.createContext(dataStore);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StoreContext.Provider value={dataStore}>{children}</StoreContext.Provider>;
};

export const useStore = () => React.useContext(StoreContext);

