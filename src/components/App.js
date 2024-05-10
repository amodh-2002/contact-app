import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addContactHandler = (contact) => {
    console.log(contacts);
    setContacts([...contacts, contact]);
  };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // };

  useEffect(() => {
    const retriveContact = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (retriveContact !== null) setContacts(JSON.parse(retriveContact));
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Route path="/add" Component={AddContact} />
        <Route path="/" Component={ContactList} />
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} /> */}
      </Router>
    </div>
  );
}

export default App;
