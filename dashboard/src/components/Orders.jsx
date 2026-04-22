import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Orders = () => {
  const [allOrders , setAllOrders] = useState([]);
  
    useEffect(() => {
      axios.get(`${API_URL}/allOrders`).then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      })
    } , []);

  return (
    <div className="orders">
  <h2>Orders</h2>

  <div className="orders-grid">
    {allOrders.map((order, index) => (
      <div className="order-card" key={index}>

        <div className="card-top">
          <h4>{order.name}</h4>
          <span className={order.mode === "BUY" ? "buy" : "sell"}>
            {order.mode}
          </span>
        </div>

        <div className="card-bottom">
          <p>Qty: {order.qty}</p>
          <p className="price">₹ {order.price}</p>
        </div>

      </div>
    ))}
  </div>
</div>
  );
};    

export default Orders;
