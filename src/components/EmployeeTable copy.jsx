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
        {Array.from({ length: 10 }).map((_, index) => (
          <tr>
            <td>{index + 1}</td>
            <td key={index}>Table cell {index}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
