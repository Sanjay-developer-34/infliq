import React, { createContext, useContext, useState } from 'react';

const CheckboxContext = createContext();

  const CheckboxProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContext.Provider value={{ isChecked, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

 const useCheckbox = () => {
  return useContext(CheckboxContext);
};


export {CheckboxProvider, CheckboxContext, useCheckbox} 
