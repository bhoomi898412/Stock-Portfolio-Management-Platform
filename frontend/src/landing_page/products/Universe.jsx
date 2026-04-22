import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
    const navigate = useNavigate();

    return ( 
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p className="mb-5 ">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-3">
                    <img src="media/images/smallcaseLogo.png"></img>
                    <p className="text-small text-muted p-2">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/images/streakLogo.png" style={{height:"45%", width:"40%"}}></img>
                    <p className="text-small text-muted p-2">Algo & strategy plateform</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/images/sensibullLogo.svg" style={{height:"50%", width:"40%"}}></img>
                    <p className="text-small text-muted p-2">Options trading plateform</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/images/zerodhaFundhouse.png" style={{height:"50%", width:"50%"}}></img>
                    <p className="text-small text-muted p-2">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/images/goldenpiLogo.png" style={{height:"45%", width:"40%"}}></img>
                    <p className="text-small text-muted p-2">Bonds trading plateform</p>
                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="media/images/dittoLogo.png" style={{height:"40%", width:"30%"}}></img>
                    <p className="text-small text-muted p-2">Insurance</p>
                </div>
                <button className="btn btn-primary mb-5 fs-5 p-2" onClick={() => navigate("/signup")} style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;