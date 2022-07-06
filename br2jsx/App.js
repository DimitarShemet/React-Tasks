import React  from 'react';
import ReactDOM from 'react-dom';

import Square from './Square.js';

let text="первый<br>второй<br/>третий<br />последний";




ReactDOM.render(
  <Square  text={text} >
  </Square>
  , document.getElementById('container') 
);

