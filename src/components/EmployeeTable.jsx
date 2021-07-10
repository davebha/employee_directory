import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = ({ emp }) => {
  useEffect(() => {
    //console.log("Employee from Employee.js", emp);
    console.log("Employee from Employee.js", emp);
  }, [emp]);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {
          //if(emp.length > 0){...} equivalent
          emp.length > 0 &&
            emp.map((e, index) => (
              <tr>
                <td>{e.name.first}</td>
                <td key={index}>{e.email}</td>
                <td key={index}>{e.phone}</td>
                <td key={index}>Table cell {e.dob.date}</td>
              </tr>
            ))
        }
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
