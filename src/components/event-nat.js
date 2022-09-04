import React from 'react';
import Child from './Child'
class EventList extends React.Component{
      
       state = {
        name: "",
       }
  
    handleCallback = (childData) =>{
        this.setState({name: childData})
    }
  
    render(){
        const {name} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}/>
                {name}
            </div>
        )
    }
}
export default EventList