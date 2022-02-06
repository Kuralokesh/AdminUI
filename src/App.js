import React, { useState } from "react";

import "./App.css";
import data from "./geektrust.json";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const App = () => {
  const [contacts, setContacts] = useState(data);

  const pageHandler = (pageNumber) => {
    setPerpage(data.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search by name,email or role"
          className="form-control p-1 m-3"
        />
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name </th>
            <th>Email </th>
            <th>Role </th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody className="table table-success table-striped">
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{contact.name} </td>
              <td>{contact.email} </td>
              <td>{contact.role} </td>
              <td>
                <AiFillEdit className="icon-button" />
                <AiFillDelete className="icon-button" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-evenly">
        <button className="delete-button">Delete selected</button>
      </div>
    </div>
  );
};

export default App;
