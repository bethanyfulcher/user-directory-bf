import React, { Component } from "react";
import API from "./utils/API"
import TableRow from "./components/TableRow"

class App extends Component {

  state = {
    employees: []
  };

  componentDidMount() {
    API.getRandomUsers()
      .then(res => this.setState({employees: res.data.results}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <TableRow
                key={employee.id.value}
                firstName={employee.name.first}
                lastName={employee.name.last}
                email={employee.email}
                picture={employee.picture.thumbnail}
                gender={employee.gender}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
