import React from "react";
import { ThemeProvider } from "styled-components";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import themes from "./themes";
import "materialize-css/dist/css/materialize.min.css";
import Surveys from "./pages/Surveys";
import SignUp from "./pages/SignUp/SignUp";
import Survey from "./pages/Survey";
import CreateSurvey from "./pages/CreateSurvey";
import "materialize-css";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Router basename="/">
        <Switch>
          <Route path="/create" component={CreateSurvey} />
          <Route exact path="/survey/:surveyId/complete" component={Survey} />
          <Route exact path="/survey/:surveyId" component={Survey} />
          <Route
            exact
            path="/survey/:surveyId/questions/:questionId"
            component={Survey}
          />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/" component={Surveys} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
