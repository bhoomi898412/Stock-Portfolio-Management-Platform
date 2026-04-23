import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFunds } from "./FundsContext";

const API_URL = import.meta.env.VITE_API_URL;

const Summary = ({ username }) => {
  const { availableBalance, usedMargin, openingBalance } = useFunds();
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + Number(stock.avg) * Number(stock.qty),
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + Number(stock.price) * Number(stock.qty),
    0
  );

  const pnl = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {username || "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{availableBalance.toFixed(2)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{usedMargin.toFixed(2)}</span>
            </p>
            <p>
              Opening balance <span>{openingBalance.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl.toFixed(2)}{" "}
              <small>
                {pnl >= 0 ? "+" : ""}
                {pnlPercent.toFixed(2)}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
