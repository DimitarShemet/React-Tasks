import React from "react"
import ReactDOM from 'react-dom';
import  shop from "./components/shop.js"

let shopName="Lamoda"
let  data=["Name","Price","URL","Quanity","Control"]
let productList=[ 
       {productName:"Футболки",price:10,url:"url",balance:5,code:10,},
       {productName:"Джинсы",price:8,url:"url",balance:3,code:11,}, 
       {productName:"Куртки",price:5,url:"url",balance:2,code:12,}
      ]
  ReactDOM.render(
  React.createElement(shop,{shop:shopName,dataItems:data ,list:productList}),
  document.getElementById('container')
  )
