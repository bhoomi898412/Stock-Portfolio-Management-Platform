import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return ( 
        // Hero
        <div className='container'>
            <div className='row p-5 text-center'>
                <div className='col'>
                    <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5 h-80 w-100'></img>
                    <h1 className='mb-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className="btn btn-primary w-25 mb-5" onClick={() => navigate("/signup")}>Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
