import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartBoard from "../pages/CartBoard";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart" exact>
        <CartBoard />
      </Route>
    </Switch>
  );
}

export default Routes;
