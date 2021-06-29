import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Searchfield from "./components/Searchfield";
import EmployeeTable from "./components/EmployeeTable";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Searchfield />
      <EmployeeTable />
    </div>
  );
}

export default App;
