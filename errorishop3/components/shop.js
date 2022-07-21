
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
  productErr:false,
  priceErr:false,
  urlErr:false,
  balanceErr:false,
  newProduct:"",
  newPrice:"",
  newUrl:"",
  newBalance:""
 
  }

  cbProductErr=(boolean)=>{
    this.setState({productErr:boolean})
  
  }
  cbPriceErr=(boolean)=>{
    this.setState({priceErr:boolean})
    
  }
  cbUrlErr=(boolean)=>{
    this.setState({urlErr:boolean})
 
  }
  cbBalanceErr=(boolean)=>{
    this.setState({balanceErr:boolean})
   
  }

  cbReduction=(boolean)=>{
    this.setState({reduction:boolean})
 
  }
  cbinputSave=(boolean)=>{
    this.setState({inputSave:boolean})
   
  }


 cbSelectedItem =(codeSelectedItem,productName,price,workMode)=>{ 
  if(this.state.reduction===true||this.state.workMode===3 ){
    return 
  }
  this.setState({newSelectedItem:codeSelectedItem})
  this.setState({productName:productName})
  this.setState({price:price})
  this.setState({workMode:workMode})

 }
 cbEditItem=(code,productName,price,url,balance,workMode)=>{          // Данный метод  даёт компоненту  Card значения в value input 
  this.setState({code:code})
  this.setState({productName:productName})
  this.setState({price:price})
  this.setState({url:url})
  this.setState({balance:balance})
  this.setState({workMode:workMode})
 }
 cbChangeArr=(id,newproductName,newprice,newurl,newbalance,newworkMode)=>{          // Данный метод работает по кнопке save 
  let editProduct = {
    productName: newproductName,
    price: newprice,
    url:newurl,
    balance:newbalance,
    code:id 
}
 let newArr = this.state.itemList.map((elem) => elem.code == editProduct.code ? editProduct : elem);
 this.setState({workMode:newworkMode})
 this.setState({itemList:newArr})
 this.setState({reduction:false})
 this.setState({productName:newproductName})
 this.setState({price:newprice})
 this.setState({url:newurl})
 this.setState({balance:newbalance})
 this.setState({workMode:newworkMode})
 }
 cbNewArr=(id,newproductName,newprice,newurl,newbalance,newworkMode)=>{          // Данный метод работает по кнопке save 
  let newProduct = {
    productName: newproductName,
    price: newprice,
    url:newurl,
    balance:newbalance,
    code:id 
}
this.state.itemList.push(newProduct);
 this.setState( {reduction:false, workMode:newworkMode})

 }





deleteItem=(itemСode)=>{
let newItemList=this.state.itemList.filter(element=>element.code!==itemСode)
this.setState({itemList:newItemList})
this.cbWorkModeChange("default")

}

cbWorkModeChange=(number)=>{
  this.setState({workMode:number})
  }



render(){
 console.log(this.state.itemList)
  
let shop=this.props.shop


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
 <Card key={this.state.code} id={this.state.code} url={this.state.url} product={this.state.productName} productErr={this.state.productErr} cbProductErr={this.cbProductErr}
 priceErr={this.state.priceErr} cbPriceErr={this.cbPriceErr} urlErr={this.state.urlErr}  cbUrlErr={this.cbUrlErr} balanceErr={this.state.balanceErr} cbBalanceErr={this.cbBalanceErr}
 price={this.state.price} workMode={this.state.workMode} workModeChange={this.cbWorkModeChange} balance={this.state.balance} reduction={this.cbReduction}  cbSelected={this.cbSelectedItem}   cbEdit={this.cbEditItem}
  cbChangeArr={this.cbChangeArr}  cbNewArr={this.cbNewArr}>

   </Card>
 
 </div>
 


}

}

export default Shop


















