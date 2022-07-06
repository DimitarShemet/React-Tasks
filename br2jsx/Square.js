import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
class Square extends React.Component {
    static propTypes = {
      
    };
render(){


    return (
       
    <div className='square'>
      {this.props.arr}
    </div>
     
      );
}
}
export  default Square