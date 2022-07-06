import React  from 'react';
import ReactDOM from 'react-dom';

import Square from './Square.js';

let text="первый<br>второй<br/>третий<br />последний";

let rightArr=text.replace(/br \//ig, "br").replace(/br\//ig,"br").split("<br>")
rightArr.splice(1,0,<br key={1}></br>)
rightArr.splice(3,0,<br key={2}></br>)
rightArr.splice(5,0,<br key={3}></br>)



console.log(rightArr)






ReactDOM.render(
  <Square  arr={rightArr} >
  </Square>
  , document.getElementById('container') 
);

