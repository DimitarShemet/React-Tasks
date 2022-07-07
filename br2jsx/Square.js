import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
class Square extends React.Component {
    static propTypes = {
      
    };
render(){
  let rightArr=this.props.text.replace(/br \//ig, "br").replace(/br\//ig,"br").split("<br>")
  rightArr.forEach((elem,index)=>{
    rightArr.splice(1+index*2,0,<br key={index}></br>)
  })
  
  
  
 
 
    return (
       
    <div className='square'>
      {rightArr}
    </div>
     
      );
}
}
export  default Square