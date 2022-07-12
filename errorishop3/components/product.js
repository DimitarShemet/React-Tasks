
import React from 'react'
class Product extends React.Component{
     
  
    productClicked=(EO)=>{
     this.props.cbSelected(this.props.code, this.props.productName,this.props.price)
     return{
      
     }
  }
  EditClicked=(EO)=>{
    this.props.cbSelected(this.props.code, this.props.productName,this.props.price,this.props.url,this.props.balance)
    return{
     
    }
 }
    clickReset=(EO)=>{
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
    return <tr onClick={this.productClicked} style={{backgroundColor:(this.props.selectedItem===this.props.code)?'orange':'white'}}>
      <td>{this.props.productName}</td>
      <td>{this.props.price}</td>
      <td>{this.props.url}</td>
      <td>{this.props.balance}</td>
      <td><input type={"button"} value={"Edit"} onClick={this.EditClicked} ></input> <input type={"reset"} value={"Delete"}  onClick={this.clickReset}></input></td>
    </tr>
  

    }
    
    }
    
    export default Product
    
    
    
    
    
    
    
    