import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import UserForm from "./components/pages/UserForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/user-form" component={UserForm}/>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login-up" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
