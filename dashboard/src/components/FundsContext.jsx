import { createContext, useContext, useState } from "react";

const FundsContext = createContext();

export const FundsProvider = ({ children }) => {
  const [openingBalance] = useState(4043.1);
  const [availableBalance, setAvailableBalance] = useState(4043.1);
  const [usedMargin, setUsedMargin] = useState(3757.3);
  const [payin, setPayin] = useState(0);

  const addFunds = (amount) => {
    const value = Number(amount);

    if (!value || value <= 0) {
      return { success: false, message: "Enter valid amount" };
    }

    setAvailableBalance((prev) => prev + value);
    setPayin((prev) => prev + value);

    return { success: true };
  };

  const withdrawFunds = (amount) => {
    const value = Number(amount);

    if (!value || value <= 0) {
      return { success: false, message: "Enter valid amount" };
    }

    if (value > availableBalance) {
      return { success: false, message: "Insufficient balance" };
    }

    setAvailableBalance((prev) => prev - value);

    return { success: true };
  };

  const buyStock = (price, quantity) => {
    const totalCost = Number(price) * Number(quantity);

    if (!price || !quantity || Number(price) <= 0 || Number(quantity) <= 0) {
      return { success: false, message: "Enter valid price and quantity" };
    }

    if (totalCost > availableBalance) {
      return { success: false, message: "Not enough balance" };
    }

    setAvailableBalance((prev) => prev - totalCost);
    setUsedMargin((prev) => prev + totalCost);

    return { success: true, totalCost };
  };

  return (
    <FundsContext.Provider
      value={{
        openingBalance,
        availableBalance,
        usedMargin,
        payin,
        addFunds,
        withdrawFunds,
        buyStock,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};

export const useFunds = () => useContext(FundsContext);
