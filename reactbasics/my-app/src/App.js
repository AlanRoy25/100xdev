import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Addcontact from "./components/Addcontact.js";
import Contactlist from "./components/Contactlist.js";


function App() {

  const contacts = [ 
    {
      id: "1",
      
    }
  ]
  return (
    <div className=" ui container">
      <Header />
      <Addcontact />
      <Contactlist />  

    </div>
  );
}

export default App;
