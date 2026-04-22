import React from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
    const navigate = useNavigate();

    return ( 
        // Open Accont
        <div className='container'>
            <div className='row p-5 text-center'>
                <div className='col'>
                    <h1 className='mb-5'>Open a Zerodha account</h1>
                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className="btn btn-primary w-25 mb-5" onClick={() => navigate("/signup")}>Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;