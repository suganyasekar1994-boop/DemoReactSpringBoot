import React, { createContext } from "react";

export const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const info = {
    name: "Sj Developer",
    year: 2026,
  };


  return (
    <>
      <InfoContext.Provider value={{ info }}>
        {children}
      </InfoContext.Provider>
    </>
  );
};

export default InfoProvider;