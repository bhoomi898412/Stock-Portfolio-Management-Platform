import React from "react";

function Hero() {
    return ( 
        <div className="container">
            <div className="row border-bottom text-center mt-3 p-5">
                <h1>Pricing</h1>
                <p className="text-muted fs-5 p-2">Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>

            <div className="row text-center mt-5 mb-5 p-5">
                <div className="col">
                    <img src="media/images/pricingEquity.svg"></img>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>
                </div>
                <div className="col">
                    <img src="media/images/intradayTrades.svg"></img>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col">
                    <img src="media/images/pricingEquity.svg"></img>
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;