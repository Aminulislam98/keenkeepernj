"use client";
import React, { createContext, useState } from "react";
export const dataContext = createContext();

const AllDataProvider = ({ children }) => {
  const [callHistory, setCallHistory] = useState([]);
  console.log(callHistory);
  const data = {
    setCallHistory,
    callHistory,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default AllDataProvider;
