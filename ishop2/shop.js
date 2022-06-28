
let Shop=React.createClass({
  propTypes:{
    shop: React.PropTypes.string,
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

  getInitialState: function(){
    return  { 
      
    newSelectedItem:"",
    itemList:this.props.list
   } 

 },
 cbSelectedItem:function(codeSelectedItem){
  this.setState({newSelectedItem:codeSelectedItem})
 },

deleteItem:function(itemСode){
let newItemList=this.state.itemList.filter(element=>element.code!==itemСode)
this.setState({itemList:newItemList})
console.log(newItemList)
},




render:function(){
let shop=this.props.shop

console.log(this.state.newSelectedItem)
console.log(this.state.itemList)
  let data=this.props.dataItems
var dataArray=[]
data.forEach((element,index) => {
  let td=React.DOM.td({key:index},element)
  dataArray.push(td)
}
)
return  React.DOM.table( {className:"MyComponent__table"}, 
React.DOM.caption({className:"MyComponent__table__heading"},shop),
React.DOM.tbody( {className:null},
  React.DOM.tr(null,dataArray),
 this.state.itemList.map(element=>React.createElement(Product,{key:element.code,code:element.code,productName:element.productName,
  price:element.price,url:element.url,balance:element.balance,
   selectedItem:this.state.newSelectedItem,cbSelected:this.cbSelectedItem,cbDeleted:this.deleteItem}))
)
)  
},

})




















