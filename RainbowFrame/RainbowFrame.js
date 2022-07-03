import React from 'react';
import PropTypes from 'prop-types';
class RainbowFrame extends React.Component {

    static propTypes = {
        colorsArr:PropTypes.array.isRequired,
    };
render(){

    function callBack(accumulator, elem){
        return(
         <div style={{border:"solid 2px "+elem,padding:"10px"}}>
          {accumulator}
         </div>
        )
     
    }
    return (
       
     this.props.colorsArr.reduce(callBack,this.props.children)
     
      );
}
}
export  default RainbowFrame