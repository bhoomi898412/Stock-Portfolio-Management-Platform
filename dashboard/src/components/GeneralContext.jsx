import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openWindow : (uid) => {},
  closeWindow : () => {},
});

export const GeneralContextProvider = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [mode, setMode] = useState("BUY");

  const handleOpenBuyWindow = (uid , mode) => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setMode(mode); // BUY or SELL
  };

  const handleCloseBuyWindow = () => {
    setIsWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openWindow : handleOpenBuyWindow,
        closeWindow : handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isWindowOpen  && (
        <BuyActionWindow uid={selectedStockUID} mode={mode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;