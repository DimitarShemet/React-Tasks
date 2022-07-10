import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
class Square extends React.Component {
    static propTypes = {
      
    };
render(){
  let clearArr=[]
  let rightArr=this.props.text.replace(/br \//ig, "br").replace(/br\//ig,"br").split("<br>")
for ( let i=0; i<rightArr.length; i++){
 clearArr.push(rightArr[i])
 if(i<rightArr.length-1){
  clearArr.push(<br></br>)
  }
 
}

  
  

    return (
       
    <div className='square'>
      {clearArr}
    </div>
     
      );
}
}
export  default Square