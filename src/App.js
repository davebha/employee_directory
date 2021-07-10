import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import Searchfield from "./components/Searchfield";
import EmployeeTable from "./components/EmployeeTable";
function App() {
  // let [employees, getEmployees] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // let res = "123";
    fetchEmployees();
    // getEmployees(res);
  }, []); //componentDidMount

  //componentDidUpdate
  let fetchEmployees = async () => {
    let response = await axios.get("https://randomuser.me/api/?results=100");
    setEmployees(response.data.results);
    // console.log("Employee from app.js", response.data.results);
  };

  return (
    <div className="App">
      <NavBar />
      <Searchfield />
      <EmployeeTable emp={employees} />
    </div>
  );
}

export default App;
