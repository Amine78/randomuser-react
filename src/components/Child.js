import React from 'react'
class Child extends React.Component{
    
    onTrigger = (event) => {
        this.props.parentCallback(event.target.value);
        event.preventDefault();
    }
  
    render(){
        return(
        <div>
            <select onChange= {this.onTrigger} nat = "mynat" >
            <option value="none">Selectionnez une nationilté</option>
            <option value="FR">FR</option>
            <option value="US">US</option>
            </select>
           
        </div>
        )
    }
}
export default Child