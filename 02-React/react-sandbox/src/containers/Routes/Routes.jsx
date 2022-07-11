import React from 'react';
import { Router } from "@reach/router";

import Home from "../Home";
import Favourites from "../Favourites";
import Login from "../Login";

import NotFound from "../../components/NotFound";


const Routes = () => {
  return (
    <Router>
      <NotFound default/>
      <Home path="/" />
      <Favourites path="favourites"/>
      <Login path="login" />
    </Router>
  )
}

export default Routes