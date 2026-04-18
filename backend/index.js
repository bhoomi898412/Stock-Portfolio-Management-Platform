require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require("./model/HoldingsModel");
const {OrdersModel} = require("./model/OrdersModel");
const {PositionsModel} = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.get('/addHoldings' , async(req , res) => {
//     let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss || false,
//         })

//         newHolding.save();
//     });
//     res.send("done");
// })

// app.get('/addOrders' , async(req , res) => {
//     let tempOrders = [
//         {
//           name: "INFY",
//           price: 1555.45,
//           percent: "-1.60%",
//           isDown: true,
//         },
//         {
//           name: "ONGC",
//           price: 116.8,
//           percent: "-0.09%",
//           isDown: true,
//         },
//         {
//           name: "TCS",
//           price: 3194.8,
//           percent: "-0.25%",
//           isDown: true,
//         },
//         {
//           name: "KPITTECH",
//           price: 266.45,
//           percent: "3.54%",
//           isDown: false,
//         },
//         {
//           name: "QUICKHEAL",
//           price: 308.55,
//           percent: "-0.15%",
//           isDown: true,
//         },
//         {
//           name: "WIPRO",
//           price: 577.75,
//           percent: "0.32%",
//           isDown: false,
//         },
//         {
//           name: "M&M",
//           price: 779.8,
//           percent: "-0.01%",
//           isDown: true,
//         },
//         {
//           name: "RELIANCE",
//           price: 2112.4,
//           percent: "1.44%",
//           isDown: false,
//         },
//         {
//           name: "HUL",
//           price: 512.4,
//           percent: "1.04%",
//           isDown: false,
//         },
//     ];      

//     tempOrders.forEach((item) => {
//         let newOrder = new OrdersModel({
//             name: item.name,
//             price: item.pice,
//             percent: item.percent,
//             isDown: item.isDown,
//         })

//         newOrder.save();
//     });
//     res.send("done");
// })

// app.get('/addPosition' , async(req , res) => {
//     let tempPositions = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];      

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         })

//         newPosition.save();
//     });
//     res.send("done");
// })

app.get('/allHoldings' , async(req , res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get('/allPositions' , async(req , res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.get('/allOrders' , async(req , res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
})

app.post('/newOrder', async (req, res) => {

  const { name, qty, price, mode } = req.body;

  // 1️⃣ Order save
  const newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode
  });

  await newOrder.save();

  // 2️⃣ Holding update
  let holding = await HoldingsModel.findOne({ name });

  if (mode === "BUY") {
    if (holding) {
      const qtyNum = Number(qty);
      const priceNum = Number(price);

      // 🔥 avg calculate
      const totalOld = holding.avg * holding.qty;
      const totalNew = priceNum * qtyNum;

      const totalQty = holding.qty + qtyNum;

      holding.avg = (totalOld + totalNew) / totalQty;
      holding.qty = totalQty;

      holding.price = priceNum; // latest price
      await holding.save();
    } else {
      // new holding
      const newHolding = new HoldingsModel({
      name,
      qty: Number(qty),
      avg: Number(price),
      price: Number(price),
      net: "0%",
      day: "0%",
      isLoss: false
      });

      await newHolding.save();
    }
  }else if (mode === "SELL") {
    if (!holding) {
      return res.status(400).send("No holdings found to sell");
    }

    const qtyNum = Number(qty);
    const priceNum = Number(price);

    // ❌ prevent over selling
    if (qtyNum > holding.qty) {
      return res.status(400).send("Not enough quantity to sell");
    }

    holding.qty -= qtyNum;
    holding.price = priceNum; // latest price

    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ name });
    } else {
      await holding.save();
    }
  }

  res.send("Order + Holding updated");
});

mongoose.connect(url)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log("Server started");
    });
  })
  .catch((err) => console.log(err));

