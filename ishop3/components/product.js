
import React from 'react'
class Product extends React.Component{
     
  
    productClicked(EO){
     this.props.cbSelected(this.props.code)
     console.log(this.props.selectedItem)
     console.log(this.props.code)
     
   
  }
    clickReset(EO){
      EO.stopPropagation()
      var question =confirm('Удалить строку?');
      if(question===true)
        this.props.cbDeleted(this.props.code)
      else{
        alert("Строка не будет удалена")
        return
      }
     
     
    }
    render(){  
    
     
     return React.DOM.tr({onClick:this.productClicked, style:{backgroundColor:(this.props.selectedItem===this.props.code)?'orange':'white'}}, 
      React.DOM.td({}, this.props.productName),
      React.DOM.td({}, this.props.price),
      React.DOM.td({}, this.props.url),
      React.DOM.td({}, this.props.balance),
      React.DOM.td({}, React.DOM.input({type:"reset",value:"Delete",onClick:this.clickReset})),
     
    );
    }
    
    }
    
    export default Product
    
    
    
    
    
    
    
    
    
    
    