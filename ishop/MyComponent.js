
let MyComponent=React.createClass({

displayName:"MyComponent",
propTypes:{
  shop:React.PropTypes.string.isRequired,
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
  
  var productsArray=[]
  var dataArray=[]
  
  let data=this.props.dataItems
  data.forEach((element,index) => {
    let td=React.DOM.td({key:index},element)
    dataArray.push(td)
  });
  
   
  var shop=this.props.shop
  var productList=this.props.list
  productList.forEach(element => {
    var nextProduct=        
    React.DOM.tr({key: element.code,className:null},
      React.DOM.td({className:null},element.productName),
      React.DOM.td({className:null}, element.price),
      React.DOM.td({className:null},element.photo),
      React.DOM.td({className:null},element.balance),
    )
    productsArray.push(nextProduct)
   
  });
  console.log(productsArray)
  
  return React.DOM.table( {className:"MyComponent__table",}, 
  React.DOM.caption({className:"MyComponent__table__heading"},shop),
     React.DOM.tbody( {className:null},
     React.DOM.tr({className:null},dataArray),
     productsArray),
    );
    
},

})




















