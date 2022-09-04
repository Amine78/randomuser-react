import React from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';;

export default class UserDetail extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=12&nat=FR&&seed=abc`)

      .then(res => {
        console.log(res);
        const persons = res.data.results;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
     
      <section className="containerList">
        <Container>
           <h1>liste de 12 utilistateur par order alphabetique de nationilté Française</h1>
        <Table variant="dark" responsive hover size="xs">
          <thead>
            <tr>
              <th>nom</th>
              <th>telephone</th>
              <th>email</th>
              <th>ville</th>
              <th>photo</th>
            </tr>
          </thead>
          <tbody>
          { this.state.persons.map(person => 
          <tr key={person.id.value}>
            <td key={person.name.first}> {person.name.first}</td>
            <td> {person.phone}</td>
            <td> {person.email}</td>
            <td> {person.location.city}</td>
            <td> <img src={`${person.picture.thumbnail}`} alt=''/></td>
            </tr>
          )} 
            
          </tbody>
        </Table>
        </Container>
      </section>
    )
  }
}


// const userList = axios.get("https://randomuser.me/api/?results=12&nat=FR").then((response) =>console.log('dede'),
// //this.setState({ response.data.results }),
//   // response.data.results.map((user) => ({
//   //   name: `${user.name.first} ${user.name.last}`,
//   //   username: `${user.login.username}`,
//   //   email: `${user.email}`,
//   //   image: `${user.picture.thumbnail}`
//   // }))
// );console.log('test');
// console.log(userList);

// const UserDetail = () => {
//         return (
//             <div>
                   
         
//             </div>
//         )
// }
// export default UserDetail;