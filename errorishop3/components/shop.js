
import React from 'react'
import './shop.css'
import  Product from './product'
import  Card from "./Card.js"
import  Edit from "./Edit.js"
class Shop extends React.Component{
  static propTypes = {
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

  };

 state = {
  newSelectedItem:"",
  itemList:this.props.list,
  productName:"",
  price:"",
  url:"",
  balance:""
  }
  
 cbSelectedItem =(codeSelectedItem,productName,price)=>{
  this.setState({newSelectedItem:codeSelectedItem})
  this.setState({productName:productName})
  this.setState({price:price})
 }
 cbEditItem=(code,productName,price,url,balance)=>{
  this.setState({newSelectedItem:codeSelectedItem})
  this.setState({productName:productName})
  this.setState({price:price})
  this.setState({url:url})
  this.setState({balance:ba})


 }


deleteItem=(itemСode)=>{
let newItemList=this.state.itemList.filter(element=>element.code!==itemСode)
this.setState({itemList:newItemList})
console.log(newItemList)
}




render(){
let shop=this.props.shop
console.log(this.state.productName)
console.log(this.state.newSelectedItem)
console.log(this.state.itemList)
console.log(this.state.price)
  let data=this.props.dataItems
var dataArray=[]
data.forEach((element,index) => {
  let td=React.DOM.td({key:index},element)
  dataArray.push(td)
}
)
 return <div>
 <table className="MyComponent__table">
  <caption className="MyComponent__table__heading"></caption>
    <tbody>
      <tr>{dataArray}</tr>
      {this.state.itemList.map(
        elem => <Product  key={elem.code}  code={elem.code} productName={elem.productName} price={elem.price} url={elem.url} balance={elem.balance} selectedItem={this.state.newSelectedItem} cbSelected={this.cbSelectedItem} cbDeleted={this.deleteItem} />
      )
      }
    </tbody>
 </table> 
 <Card product={this.state.productName} price={this.state.price} ></Card>
 <Edit >
 </Edit>
 </div>
 


}

}

export default Shop


















