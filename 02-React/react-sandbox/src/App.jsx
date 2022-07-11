import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Login from "./containers/Login";


const App = () => {
  
  return (
    <Router>
      <section className={styles.nav}>
      <NavBar />
      </section>
        <Route path='/' exact component={Home} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound} />
    </Router>
  );
}

export default App;
