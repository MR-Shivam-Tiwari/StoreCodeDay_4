import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      {/* <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register  />
        </Route>
        <Route path="/otp">
          <Otp  />
        </Route>
        <Route path="/password-change">
          <PasswordChanged  />
        </Route>
        <Route path="/forgot-password">
          <Forgot  />
        </Route>
        <Route path="/new-password">
          <NewPassword  />
        </Route>
      </Switch> */}
      <Home />
    </Router>
  );
};

export default App;
