import React, { Component } from "react";
import API from "./utils/API"
import TableRow from "./components/TableRow"

class App extends Component {

  state = {
    employees: [],
    isLastAlphabetized: false,
    isFirstAlphabetized: false,
    filterGender: "all",
    initialEmployees: []
  };

  componentDidMount() {
    
    API.getRandomUsers()
    .then(res => this.setState({employees: res.data.results, initialEmployees: res.data.results}))
    .catch(err => console.log(err))
  }
  
  orderFirstName = () => {
    const newList = [...this.state.employees]
    if(this.state.isFirstAlphabetized) {
      newList.sort((a, b) => a.name.first > b.name.first? -1:1)
      this.setState({employees: newList,isFirstAlphabetized: false})
    } 
    else
    {
      newList.sort((a, b) => a.name.first > b.name.first? 1:-1)
      this.setState({employees: newList,isFirstAlphabetized: true})
    }
  }

  orderLastName = () => {
    const newList = [...this.state.employees]
    if(this.state.isLastAlphabetized) {
      newList.sort((a, b) => a.name.last > b.name.last? -1:1)
      this.setState({employees: newList,isLastAlphabetized: false})
    } else
    {
      newList.sort((a, b) => a.name.last > b.name.last? 1:-1)
      this.setState({employees: newList,isLastAlphabetized: true})
    }
  }

  filterGender = () => {

    if (this.state.filterGender === "all") {
      const maleArray = this.state.initialEmployees.filter(employee => employee.gender === "male")
      this.setState({employees: maleArray, filterGender: "male"})
    } else if (this.state.filterGender === "male") {
      const femaleArray = this.state.initialEmployees.filter(employee => employee.gender === "female")
      this.setState({employees: femaleArray, filterGender: "female"})
    } else if (this.state.filterGender === "female") {
      const allArray = this.state.initialEmployees.filter(employee => employee.gender === "male" || employee.gender === "female")
      this.setState({employees: allArray, filterGender: "all"})
    }
  }

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col" onClick={this.orderFirstName}>First</th>
              <th scope="col" onClick={this.orderLastName}>Last</th>
              <th scope="col">Email</th>
              <th scope="col" onClick={this.filterGender}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, i) => (
              <TableRow
                key={i}
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
