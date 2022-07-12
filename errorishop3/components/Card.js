import React, { Fragment } from 'react'
import './Card.css'
class Card extends React.Component{
     
  
    
  
    render() {
      return (
          <div> 
            
            {this.props.product && this.props.price
                ?  <div className='MyComponent__Card'>
                  <span className='MyComponent__Card__title'> {this.props.product}</span> <br></br>
                    <span>{"Название товара: "+this.props.product}</span><br></br>
                    <span>{"Цена товара: "+this.props.price}</span> <br></br>
                    </div>
                    : ""
                }
            
           
          </div>
      );
  }
    
    }
    
    export default Card
    
    
    
    
    