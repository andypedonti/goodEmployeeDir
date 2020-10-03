import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
//import EmployeeTable from "./components/EmployeeTable";
import Card from "./components/Card";
import Header from "./components/Header"
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';

import API from './utils/API';


class App extends React.Component {

  state = {
    employees: [],
    filteredEmployees: [],
    isFetching: true,
  }

  async componentDidMount() {
    const responce = await API.getUsers();
    console.log(responce);
    this.setState({
      employees: responce.data.results,
      filteredEmployees: responce.data.results,
      isFetching: true,
    })

  }

  handleSearch = (event) => {
    const value = event.target.value;
    const employees = this.state.employees.filter((employee) => {
      return employee.name.last.toLowerCase().startsWith(value);
    });
    this.setState({ filteredEmployees: employees })
  }
  handleSort = () => {
    const employees = this.state.employees.sort((employee1, employee2) => {
      return this.state.order ? employee1.name.last.localeCompare(employee2.name.last) : employee2.name.last.localeCompare(employee1.name.last)

    });
    this.setState({ filteredEmployees: employees })
    this.setState({ order: !this.state.order })
  }


  // filterGender() {
  //   console.log('filterGender', this.state.employees)
  //   let filterResults = this.state.filteredEmployees.filter(employee => employee.gender === "female")
  //   this.setState({ filteredEmployees: filterResults })
  // }

  render() {
    console.log(this.state)
    return (




      <div className="App" >
        <Header />
        <SearchBox handleSearch={this.handleSearch} handleSort={this.handleSort} />
        {/* <EmployeeTable employeeData={this.state.employees} /> */}
        {this.state.filteredEmployees.map(employee => <Card data={employee} />)}
        {/* <Card employeeData={this.state.employees} /> */}
        {/* <button onClick={this.filterGender()}>Filter Gender</button> */}
        <Footer />
      </div>
    );
  }

}

export default App;
