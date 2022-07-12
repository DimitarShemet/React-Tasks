import React from "react"
import ReactDOM from 'react-dom';
import  Shop from "./components/shop.js"



let shopName="Lamoda"
let  data=["Name","Price","URL","Quanity","Control"]
  import productList  from './clothers.json'
  

  ReactDOM.render(
    <div>
        <Shop shop={shopName} dataItems={data} list={productList}></Shop>
      
    </div>,
      document.getElementById('container')
      )
    