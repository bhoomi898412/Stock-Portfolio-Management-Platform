import React from "react";

function Brokerage() {
    return ( 
        <div className="container">
            <div className="row mt-5 text-center border-top">
                <div className="col-8 p-3 mt-5">
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5">Brokerage calculator</h3>
                    </a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }} className="text-muted">
                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity(whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 p-3 mt-5">
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3 className="text-center fs-5">List of charges</h3>
                    </a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }} className="text-muted">
                        <li>Equity delivery: ₹0 brokerage.</li>
                        <li>Equity intraday: ₹20 or 0.03% per executed order.</li>
                        <li>Futures trading: ₹20 per executed order.</li>
                        <li>Options trading: ₹20 per executed order.</li>
                        <li>Currency futures & options: ₹20 per executed order.</li>
                        <li>Commodity trading: ₹20 per executed order.</li>
                        <li>Account opening charges: ₹0 (limited time offer).</li>
                        <li>Annual maintenance charges (AMC): ₹300 + GST.</li>
                        <li>DP charges: ₹13.5 + GST per scrip (on sell transactions).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;