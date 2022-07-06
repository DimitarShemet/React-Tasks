import React from "react"
import ReactDOM from 'react-dom';
import  Shop from "./components/shop.js"

let shopName="Lamoda"
let  data=["Name","Price","URL","Quanity","Control"]
  import productList  from './clothers.json'
  ReactDOM.render(
  React.createElement(Shop,{shop:shopName,dataItems:data ,list:productList}),
  document.getElementById('container')
  
  )
