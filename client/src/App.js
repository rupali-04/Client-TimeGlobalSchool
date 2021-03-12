
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar"
import StudentList from "./components/studentlist";
import EditStudent from "./components/editstudent";
import CreateStudent from "./components/createstudent";

function App() {
  return (
      <Router>
    <div className="container-fluid">
    <Navbar />
<br/>
<Route path="/" exact component={StudentList} />
<Route path="/edit" component={EditStudent} />
<Route path="/create" component={CreateStudent} />

   </div>
   </Router>
  );
}

export default App;
