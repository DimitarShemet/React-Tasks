
let Shop=React.createClass({


render:function(){
let shop=this.props.shop

  let data=this.props.dataItems
var dataArray=[]
data.forEach((element,index) => {
  let td=React.DOM.td({key:index},element)
  dataArray.push(td)
}

);




  
return  React.DOM.table( {className:"MyComponent__table"}, 
React.DOM.caption({className:"MyComponent__table__heading"},shop),
React.DOM.tbody( {className:null},
  React.DOM.tr(null,dataArray),
 this.props.list.map(element=>React.createElement(Product,{key:element.code,productName:element.productName,price:element.price,url:element.url,balance:element.balance,resetInput:element.reset}))
)
)  
},

})




















