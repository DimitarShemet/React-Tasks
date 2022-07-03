import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './RainbowFrame.js';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let word="Hello"


ReactDOM.render(
  <RainbowFrame  colorsArr={colors}>

     <div style={{margin:"auto",width:"100px",fontSize:"30px"}}>Hello!</div>
  </RainbowFrame>
  
 
  , document.getElementById('container') 
);

