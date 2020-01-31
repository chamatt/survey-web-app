import React from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import themes from "./themes";
import "materialize-css/dist/css/materialize.min.css";
import Surveys from "./pages/Surveys";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Router>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/" component={Surveys} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
