var ArrayBlock = React.createClass({

displayName:"ArrayBlock",

propTypes: {
    words: React.PropTypes.array.isRequired,
  
  },
  getInitialState: function(){
    return  { 
   startArray:this.props.words,
   filterString:"",
   sort:false,
   isSorted:false,
  
   }
    
 },

 checkBoxClick:function(EO){
  if(EO.target.checked){
    this.setState( {sort: true,isSorted:true}, this.updateArray )
  }
  else{
    this.setState( {sort:false,isSorted:false}, this.updateArray );
  }
 
 },
 inputChange:function(EO){
  this.setState( {filterString:EO.target.value}, this.updateArray );
 },
 
 resetClick:function(EO){
  this.setState( {sort:false,filterString:"",isSorted:false}, this.updateArray );
 },
 updateArray:function(){
  console.log(this.state.isSorted)
  let lines=this.props.words.slice();
  if ( this.state.filterString ){
    lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1 )
    this.setState( {startArray:lines} )
  }
 
    if ( this.state.sort ){
    lines.sort();
  }
    this.setState( {startArray:lines} )
   
   
  },

  render: function() {
   
  
    let startArray=this.state.startArray
   
     
        let option=startArray.map((element,index)=>
        React.DOM.option({key:index},element)
        )
    return  React.DOM.div( {className:'ArrayBlock'}, 
      React.DOM.input({type:'checkbox',checked:this.state.isSorted, onClick:this.checkBoxClick}),
      React.DOM.input({type:'text',onChange:this.inputChange, value:this.state.filterString}),
      React.DOM.input({type:'reset',value:"Сброс",onClick:this.resetClick}),
      React.DOM.form( {className:'form'}, 
      React.DOM.select({size:5},option)
      ),
    );
    
  }






})