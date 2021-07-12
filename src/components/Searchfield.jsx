import React from "react";
import { useState, useEffect } from "react";

const Searchfield = ({ employeeList }) => {
  let [query, setQuery] = useState("");

  /*
  useEffect(() => {
    checkQuery(employeeList);
  }, [query]);
  
  const checkQuery = employeeList => {
    let name = JSON.stringify(
      employeeList.map(e => {
        e.name.first;
      })
    );
    console.log(name);
  };*/

  const searchChange = event => {
    setQuery(event.target.value);
    console.log(query);
  };
  return (
    <div>
      <input type="text" onChange={searchChange} />
    </div>
  );
};

export default Searchfield;
