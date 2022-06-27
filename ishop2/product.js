
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
       })

      ),


    },
    productClicked:function(EO){
     this.props.cbSelected(this.props.code)
     console.log(this.props.code)
    },
    clickReset:function(EO){
     console.log(this.props.code)
      this.props.cbDeleted(this.props.code)
      EO.stopPropagation()
    },
    render:function(){  
    
     
     return React.DOM.tr({onClick:this.productClicked}, 
      React.DOM.td({}, this.props.productName),
      React.DOM.td({}, this.props.price),
      React.DOM.td({}, this.props.url),
      React.DOM.td({}, this.props.balance),
      React.DOM.td({}, React.DOM.input({type:"reset",value:"Delete",onClick:this.clickReset})),
     
    );
    },
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    