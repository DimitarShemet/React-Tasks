
let Product=React.createClass({

    displayName:"Product",
    propTypes:{
      dataItems:React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired
      ),
      list:React.PropTypes.arrayOf(
       React.PropTypes.shape({
        productName:React.PropTypes.string.isRequired,
        price:React.PropTypes.number.isRequired,
        balance:React.PropTypes.number.isRequired,
        code:React.PropTypes.number.isRequired,
        photo:React.PropTypes.shape.isRequired,
       })

      ),
      
    },
    
    render:function(){  
    
     
     return React.DOM.tr(null, 
      React.DOM.td({}, this.props.productName),
      React.DOM.td({}, this.props.price),
      React.DOM.td({}, this.props.url),
      React.DOM.td({}, this.props.balance),
      React.DOM.td({}, this.props.resetInput),
     
    );
    },
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    