import React from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Child from './Child'


export default class UserAll extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      personsall: [],
      nat: "",
    }
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=24&seed=abc&nat=fr,us`)

      .then(rest => {
        const personsall = rest.data.results;
        this.setState({ personsall });
        console.log(personsall);
      })
  }
  handleCallback = (childData) =>{
    this.setState({nat: childData})
  }
  render() {
    const {nat} = this.state;

    return (
     <section className="containerList all">
      <Child parentCallback = {this.handleCallback}/> 
        <Container>
        <h1>liste de 24 utilistateur par order alphabetique</h1>
        <Table className="white-color" responsive size="xs">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Ville</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody className="tableau">
        { this.state.personsall.map(personall => 
          <tr key={personall.id.value} data-nat={personall.nat} className={personall.nat === `${nat}` ? `${personall.nat} Active`  : "Inactive" }  >
            
            <td > {personall.name.first}</td>
            <td > {personall.phone}</td>
            <td > {personall.email}</td>
            <td > {personall.location.city}</td>
            <td > <img src={`${personall.picture.thumbnail}`} alt=''/></td>
            </tr>
          )} 
            
          </tbody>
        </Table>
        </Container>
      </section>
    )
  }
}
