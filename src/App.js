import React, { Component } from "react";
import API from "./utils/API"
import TableRow from "./components/TableRow"

class App extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.fillEmployeesArray()
  }

  fillEmployeesArray = () => {
    let filledArray = []
    for (var i = 0; i < 10; i++) {
      API.getRandomUser()
        .then(res => filledArray.push(res.data.results))
        .catch(err => console.log(err))
    }
    console.log("filled array")
    console.log(filledArray)
    this.setState({ employees: filledArray })
    console.log(this.state.employees)
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
            <tr>
              <td>image</td>
              <td>first name</td>
              <td>last name</td>
              <td>my email</td>
              <td>gender</td>
            </tr>
            {this.state.employees.map(employee => (
              <TableRow
                firstName={employee.name.first}
                lastName={employee.name.last}
                email={employee.email}
                picture={employee.picture.thumbnail}
                gender={employee.gender}
              />
            ))}
          </tbody>
        </table>


        {/* {this.state.employees.map(employee => (
        <TableRow 
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          picture={employee.picture.thumbnail}
          gender={employee.gender}
        />
      ))} */}
      </div>
    );
  }
}

export default App;
