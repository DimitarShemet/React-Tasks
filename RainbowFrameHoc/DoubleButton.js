import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
class DoubleButton extends React.Component {

    static propTypes = {
       
    };
    answerAlert = EO => {
       this.props.cbPressed(EO.target.value)
       
      };

    
render(){

    return (
        <div style={{marginBottom:30+"px"}}>
    <input type="button" onClick={this.answerAlert} value={this.props.caption1}></input> {this.props.children} <input type="button" onClick={this.answerAlert} value={this.props.caption2}></input>
    </div>
     
      );
}
}
export  default DoubleButton