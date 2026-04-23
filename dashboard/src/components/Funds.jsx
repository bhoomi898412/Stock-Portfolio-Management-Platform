import React from "react";
import { Link } from "react-router-dom";
import { useFunds } from "./FundsContext";
import { useState } from "react";

const Funds = () => {
  const {
  openingBalance,
  availableBalance,
  usedMargin,
  payin,
  addFunds,
  withdrawFunds,
} = useFunds();


  const [showAddForm, setShowAddForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleAddFunds = () => {
    const result = addFunds(addAmount);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    setMessage("Funds added successfully");
    setAddAmount("");
    setShowAddForm(false);
  };

  const handleWithdrawFunds = () => {
    const result = withdrawFunds(withdrawAmount);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    setMessage("Funds withdrawn successfully");
    setWithdrawAmount("");
    setShowWithdrawForm(false);
  };

  return (
    <>
    <div className="funds-header-card">
      <div className="funds-header-text">
        <h3>Funds</h3>
        <p>Instant, zero-cost fund transfers with UPI</p>
      </div>

      <div className="funds-actions">
        <button
          className="btn btn-green funds-btn"
          onClick={() => {
            setShowAddForm(true);
            setShowWithdrawForm(false);
            setMessage("");
          }}
        >
          Add funds
        </button>

        <button
          className="btn btn-blue funds-btn"
          onClick={() => {
            setShowWithdrawForm(true);
            setShowAddForm(false);
            setMessage("");
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
    
    {message && <p className="funds-message">{message}</p>}


    {showAddForm && (
      <div className="fund-form-card">
        <h4>Add Funds</h4>
        <input
          type="number"
          placeholder="Enter amount"
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
        />
        <div className="fund-form-actions">
          <button className="btn btn-green funds-btn" onClick={handleAddFunds}>
            Submit
          </button>
          <button className="btn btn-grey funds-btn" onClick={() => setShowAddForm(false)}>
            Cancel
          </button>
        </div>
      </div>
    )}

    {showWithdrawForm && (
      <div className="fund-form-card">
        <h4>Withdraw Funds</h4>
        <input
          type="number"
          placeholder="Enter amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <div className="fund-form-actions">
          <button className="btn btn-blue funds-btn" onClick={handleWithdrawFunds}>
            Submit
          </button>
          <button className="btn btn-grey funds-btn" onClick={() => setShowWithdrawForm(false)}>
            Cancel
          </button>
        </div>
      </div>
    )}

    <div className="row funds-layout">
      <div className="col funds-main-card">
        <span>
          <p>Equity</p>
        </span>
        <div className="table funds-table">
          <div className="data">
            <p>Available margin</p>
            <p className="imp colored">₹{availableBalance.toFixed(2)}</p>
          </div>
          <div className="data">
            <p>Used margin</p>
            <p className="imp">₹{usedMargin.toFixed(2)}</p>
          </div>
          <div className="data">
            <p>Available cash</p>
            <p className="imp">₹{availableBalance.toFixed(2)}</p>
          </div>
          <div className="data">
            <p>Opening Balance</p>
            <p className="imp">₹{openingBalance.toFixed(2)}</p>
          </div> 
          <div className="data">
            <p>Payin</p>
            <p className="imp">₹{payin.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="col funds-side-card">
        <div className="commodity">
          <p>You don't have a commodity account</p>
          <Link className="btn btn-blue">Open Account</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Funds;
