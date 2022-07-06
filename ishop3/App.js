import React from "react"
import ReactDOM from 'react-dom';
import  shop from "./components/shop.js"

let shopName="Lamoda"
let  data=["Name","Price","URL","Quanity","Control"]
let productList=require('./clothers.json');
  ReactDOM.render(
  React.createElement(shop,{shop:shopName,dataItems:data ,list:productList}),
  document.getElementById('container')
  )
