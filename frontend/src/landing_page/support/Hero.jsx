import React from "react";

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-5 mx-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="Eg. how do I activate F&O, why is my order getting rejected.." className="mb-3"></input><br/>
                    <div className="row">
                        <div className="col"><a href="">Track account opening</a></div>
                        <div className="col"><a href="">Track segment activation</a></div>
                    </div>
                    <div className="row">
                        <div className="col"><a href="">Intraday margins</a></div>
                        <div className="col"><a href="">Kite user manual</a></div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                          <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                          <a href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;