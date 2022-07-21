import React, { Fragment } from 'react'
import './Card.css'

class Card extends React.Component{
     
  state = {
    id:this.props.id,
    product:this.props.product,
    price:this.props.price,
    url:this.props.url,
    balance: this.props.balance,
    productErr: "",
    priceErr: "",
    urlErr: "",
    balanceErr: "",
    workMode:this.props.workMode,
    newProduct:"",
    newPrice:"",
    newUrl:"",
    newBalance:"",
    newId:15,
    }
   cbNewArr=()=>{       
   // Передает новые значения по кнопке "Save"
   this.props.cbChangeArr(this.state.id,this.state.product,this.state.price,this.state.url,this.state.balance,1) 
   this.props.reduction(false)                    // Включает клики
   }
 changeName =(EO)=>{
 
  this.props.reduction(true)
  this.nameErr(EO.target.value)
  this.setState({product:EO.target.value})
 }
 changeNameNew =(EO)=>{
  this.setState({newProduct:EO.target.value})
 }
 


 nameErr= (err) => {
  if(err===""){
     this.props.cbProductErr(true)
  this.setState({productErr:"Введите название продукта "})

  }
  else{
    this.props.cbProductErr(false)
  this.setState({productErr:""})
  }
}
 changePrice =(EO)=>{
  this.props.reduction(true)
  this.priceErr(EO.target.value)
  this.setState({price:EO.target.value})
 }
 changePriceNew =(EO)=>{
  this.setState({newPrice:EO.target.value})
 }
 

 priceErr= (err) => {
  if(err===""){
    this.props.cbPriceErr(true)
    this.setState({priceErr:"Введите цену продукта "})
   
    }
    else{
      this.props.cbPriceErr(false)
    this.setState({priceErr:""})
    }
}

 changeUrl =(EO)=>{
  this.props.reduction(true)
  this.urlErr(EO.target.value)
  this.setState({url:EO.target.value})
 }
 changeUrlNew =(EO)=>{
  this.setState({newUrl:EO.target.value})
 }

 urlErr= (err) => {
  if(err===""){
    this.props.cbUrlErr(true)
    this.setState({urlErr:"Введите url продукта "})
  
    }
    else{
      this.props.cbUrlErr(false)
    this.setState({urlErr:""})
    }
}

 changeBalance =(EO)=>{
  this.props.reduction(true)
  this.balanceErr(EO.target.value)
  this.setState({balance:EO.target.value})
 }
 changeBalanceNew =(EO)=>{
  this.setState({newBalance:EO.target.value})
 }

  balanceErr= (err) => {
    if(err===""){
      this.props.cbBalanceErr(true)
      this.setState({balanceErr:"Введите остаток продукта "})
      console.log("Ошибка")
      }
      else{
        this.props.cbBalanceErr(false)
      this.setState({balanceErr:""})
      }
}
newProductClicked=(EO)=>{
  this.props.workModeChange(3)
  this.setState({newProduct:"",newPrice:"",newUrl:"",  newBalance:"",workMode:3})
  this.props.reduction(true)
  
}
cancelInputClicked=(EO)=>{
  this.props.workModeChange(1)
  this.props.reduction(false)  
}
cancelInputNewProduct=(EO)=>{
  this.props.workModeChange("default")
  this.props.reduction(false)  
}
cbNewProductArr=()=>{
  this.props.cbNewArr(this.state.newId,this.state.newProduct,this.state.newPrice, this.state.newUrl,this.state.newBalance,"default")
}

  
    render() {
      console.log(this.state.product)
    
      return (
       
          <div>

             {this.props.workMode==="default"?
                  <div>
                   <input type="button" value="New product" onClick={this.newProductClicked} ></input>  
                    </div>  
                    : ""
                }
            {this.props.workMode===1  // 1-показ карточки 
                ?  <div className='MyComponent__Card'>
                  <span className='MyComponent__Card__title'> {this.props.product}</span> <br></br>
                    <span>{"Название товара: "+this.props.product}</span><br></br>
                    <span>{"Цена товара: "+this.props.price}</span> <br></br>
                    <input type="button" value="New product" onClick={this.newProductClicked} ></input>  
                    </div>
                    
                    : ""
                }
            {this.props.workMode===2  // 2- редактирование карточки 
                ?  <div className='MyComponent__Card'>
                  <span>ID: {this.props.id}</span> <br></br>

                  <label>Name:</label>
                 <input type="text" onChange={this.changeName}  value={this.state.product}/>  {this.state.productErr
                ?      <span style={{color: "red"}} > {this.state.productErr} </span> 
                    : ""
                } <br></br>
                
                 <label>Price:</label>
                 <input type="text"  onChange={this.changePrice}  value={this.state.price} />  {this.state.priceErr
                ?      <span  style={{color: "red"}}> {this.state.priceErr}</span> 
                    : ""
                }<br></br>

                 <label >URL: </label>
                 <input type="text"  onChange={this.changeUrl} value={this.state.url} /> {this.state.urlErr
                ?      <span style={{color: "red"}}> {this.state.urlErr}</span> 
                    : ""
                } <br></br>

                 <label >Quanity: </label>
                 <input type="text" onChange={this.changeBalance}  value={this.state.balance} /> {this.state.balanceErr
                ?      <span  style={{color: "red"}}> {this.state.balanceErr}</span> 
                    : ""
                }<br></br>
                 <input type="button"   defaultValue="Save" onClick={this.cbNewArr}  disabled={(this.props.productErr==true||this.props.priceErr==true||this.props.urlErr==true|| this.props.balanceErr==true)? true:false}/>
                  <input type="button" value="Cancel" onClick={this.cancelInputClicked}/>
                    </div>
                    : ""
                }
                
                {this.props.workMode===3  // 3 - карточка нового продукта  
                ?  <div className='MyComponent__Card'>
                  <span> Add new Product</span> <br></br>
                  <span>ID: { this.state.newId++}</span> <br></br>
                  <label>Name:</label>
                 <input type="text" onChange={this.changeNameNew}  value={this.state.newProduct}/>  {!this.state.newProduct
                ?      <span style={{color: "red"}} > Введите имя продукта </span> 
                    : ""
                } <br></br>
                
                 <label>Price:</label>
                 <input type="text"  onChange={this.changePriceNew}  value={this.state.newPrice} />  {!this.state.newPrice
                ?      <span  style={{color: "red"}}> Введите цену продукта  </span> 
                    : ""
                }<br></br>

                 <label >URL: </label>
                 <input type="text"  onChange={this.changeUrlNew } value={this.state.newUrl} /> {!this.state.newUrl
                ?      <span style={{color: "red"}}> Введите url продукта</span> 
                    : ""
                } <br></br>

                 <label >Quanity: </label>
                 <input type="text" onChange={this. changeBalanceNew }  value={this.state.newBalance} /> {!this.state.newBalance
                ?      <span  style={{color: "red"}}> Введите остаток продукта</span> 
                    : ""
                }<br></br>
                 <input type="button"   defaultValue="Save" onClick={this.cbNewProductArr}  disabled={(this.state.newProduct==""||this.state.newPrice==""||this.state.newUrl==""|| this.state.newBalance=="")? true:false}/>
                  <input type="button" value="Cancel" onClick={this.cancelInputNewProduct} />
                    </div>
                    : ""
                }
         
          </div>
      );
      
  }
    
    }
    
    export default Card
    
    
    
    
    