
import React from 'react'
import './shop.css'
import  Product from './product'
import  Card from "./Card.js"
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
  balance:"",
  workMode:"default",
  code: "",
  reduction: false,
  inputSave:false,
 

  }
  
  cbReduction=(boolean)=>{
    this.setState({reduction:boolean})
    console.log("изменилоcь булевое")
  }
  cbinputSave=(boolean)=>{
    this.setState({inputSave:boolean})
    console.log("изменилоcь булевое")
  }


 cbSelectedItem =(codeSelectedItem,productName,price,workMode)=>{
  this.setState({newSelectedItem:codeSelectedItem})
  this.setState({productName:productName})
  this.setState({price:price})
  this.setState({workMode:workMode})
 }
 cbEditItem=(code,productName,price,url,balance,workMode)=>{
  this.setState({code:code})
  this.setState({productName:productName})
  this.setState({price:price})
  this.setState({url:url})
  this.setState({balance:balance})
  this.setState({workMode:workMode})
 }


deleteItem=(itemСode)=>{
let newItemList=this.state.itemList.filter(element=>element.code!==itemСode)
this.setState({itemList:newItemList})
console.log(newItemList)
}




render(){
  console.log(this.state.reduction)
  
let shop=this.props.shop

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
        elem => <Product  key={elem.code}  code={elem.code} productName={elem.productName} price={elem.price} url={elem.url} balance={elem.balance}
         cbEdit={this.cbEditItem} selectedItem={this.state.newSelectedItem} 
         cbSelected={this.cbSelectedItem}  cbDeleted={this.deleteItem} workMode={this.state.workMode} inputState={this.state.reduction}  />
      )
      }
    </tbody>
 </table> 
 <Card key={this.state.code} id={this.state.code} url={this.state.url} product={this.state.productName} 
 price={this.state.price} workMode={this.state.workMode} balance={this.state.balance} reduction={this.cbReduction} inputSaveState={this.cbinputSave} inputSave={this.state.inputSave}> </Card>
 
 </div>
 


}

}

export default Shop


















