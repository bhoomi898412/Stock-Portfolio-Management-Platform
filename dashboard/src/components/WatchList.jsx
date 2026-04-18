import React , { useState , useContext } from "react";
import { Tooltip , Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { KeyboardArrowDown , BarChartOutlined , KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock , index) => {
          return(
            <WatchListItem  stock={stock} key={index} />
          )
        })} 
      </ul>
    </div>
  );
};

export default WatchList;


const WatchListItem  = ({stock}) => {
  const[showWatchListAction , setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down"/>
          ) : ( 
            <KeyboardArrowUp className="up"/>
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name}/>}
    </li>
  )
}

const WatchListAction = ({uid}) => {
  const { openWindow } = useContext(GeneralContext);

  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button className="buy" onClick={() => openWindow(uid, "BUY")}>Buy</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="sell" onClick={() => openWindow(uid, "SELL")}>Sell</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button className="action">
            <BarChartOutlined className="icon"/>
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="More" placement="top" arrow>
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}
