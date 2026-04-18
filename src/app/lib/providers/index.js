import AllDataProvider from "@/context/AllDataProvider";
import React from "react";

const DataProvider = ({ children }) => {
  return <AllDataProvider>{children}</AllDataProvider>;
};

export default DataProvider;
