import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
    return ( 
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
        </div>

        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
    );
}

export default RightSection;