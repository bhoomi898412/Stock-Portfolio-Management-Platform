import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 p-3">
        <div className="col-5">
          <img src={imageURL}></img>
        </div>

        <div className="col-1"></div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More</a>
          </div> 
          <div className="mt-4">
            <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
