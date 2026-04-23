import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFunds } from "./FundsContext";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const API_URL = import.meta.env.VITE_API_URL;

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeWindow } = useContext(GeneralContext);
  const { availableBalance, buyStock } = useFunds();

  const totalCost = Number(stockQuantity) * Number(stockPrice);

  const handleBuyClick = async () => {
    if (mode === "BUY") {
      if (totalCost <= 0) {
        alert("Enter valid quantity and price");
        return;
      }

      if (totalCost > availableBalance) {
        alert("Insufficient balance");
        return;
      }
    }

    try {
      await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode,
      });

      if (mode === "BUY") {
        buyStock(stockPrice, stockQuantity);
      }

      closeWindow();
    } catch (err) {
      const msg = err.response?.data || "Something went wrong";
      alert(msg);
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{totalCost.toFixed(2)}</span>
        {mode === "BUY" && (
          <span style={{ marginLeft: "12px" }}>
            Available balance ₹{availableBalance.toFixed(2)}
          </span>
        )}

        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>

          <Link to="" className="btn btn-grey" onClick={closeWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;