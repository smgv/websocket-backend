/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello and welcome to socket api");
});

function getStockValue() {
  return Math.floor(Math.random() * 5000);
}

function getChangeValue() {
  return Math.floor(Math.random() * 5);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getRandomValue() {
  const tickerData = [
    {
      name: "Tata Motors",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "RIL",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "Tata Power",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "Bajaj Finance",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "Axis Bank",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "HDFC Bank",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "Infosys",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "TCS",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
    {
      name: "Titan",
      price: numberWithCommas(getStockValue()),
      percentage: getChangeValue(),
    },
  ];
  return tickerData;
}

const server = app.listen(`${port}`, function () {
  console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  setInterval(() => {
    socket.broadcast.emit("newdata", getRandomValue());
  }, 2500);
});
