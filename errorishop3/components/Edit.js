
import React from 'react'
class Edit extends React.Component{
     
  
    productClicked=(EO)=>{
     this.props.cbSelected(this.props.code)
     console.log(this.props.selectedItem)
     console.log(this.props.code)
     
   
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
      <td><input type={"button"} value={"Edit"} onClick={this.productClicked} ></input> <input type={"reset"} value={"Delete"}  onClick={this.clickReset}></input></td>
    </tr>
   
    
     
    //  return React.DOM.tr({onClick:this.productClicked, style:{backgroundColor:(this.props.selectedItem===this.props.code)?'orange':'white'}}, 
    //   React.DOM.td({}, this.props.productName),
    //   React.DOM.td({}, this.props.price),
    //   React.DOM.td({}, this.props.url),
    //   React.DOM.td({}, this.props.balance),
    //   React.DOM.td({}, React.DOM.input({type:"button",value:"Edit",onClick:this.clickReset}),React.DOM.input({type:"reset",value:"Delete",onClick:this.clickReset})),
     
    // );
    }
    
    }
    
    export default Edit
    
    
    
    
    
    
    
    