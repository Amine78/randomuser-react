import React , { useState }from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 


export default class UserAll extends React.Component {
  state = {
    personsall: []
  }
  

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=24&seed=abc&nat=fr,us`)

      .then(rest => {
        const personsall = rest.data.results;
        this.setState({ personsall });
        console.log(personsall);
      })
  }
  



  render() {
    return (
     
      <section className="containerList all">
        
        <CustomSelect/>
        <Container>
           <h1>liste de 24 utilistateur par order alphabetique</h1>

           
        <Table variant="dark" responsive hover size="xs">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Ville</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
        { this.state.personsall.map(personall => 
          <tr data-nat={personall.nat} key={personall.id.value}>
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
