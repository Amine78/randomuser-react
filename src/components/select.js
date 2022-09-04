import React , { useState }from "react";

export default class SelectChoice extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedValue: ""
    }
  }
  

  render() {
    const handleChange = (e) => {
      this.setState({selectedValue: e.target.value})
    }
    return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option value="FR">FR</option>
        <option value="EN">EN</option>
      </select>
      <h1>You chose {this.state.selectedValue}</h1>
    </div>
    );
  }
}