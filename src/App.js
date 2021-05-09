import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import "mdbootstrap/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} /> 
      <Route path="/work" component={Work} /> 
      <Route path="/contact" component={Contact} />       
    </BrowserRouter>
  );
}

export default App;
