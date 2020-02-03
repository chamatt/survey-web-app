import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AuthContext from "./contexts/auth";
import SignIn from "./pages/SignIn/SignIn";
import themes from "./themes";
import "materialize-css/dist/css/materialize.min.css";
import Surveys from "./pages/Surveys";
import SignUp from "./pages/SignUp/SignUp";
import Survey from "./pages/Survey";
import CreateSurvey from "./pages/CreateSurvey";
import AdminRoute from "./components/ProtectedRoutes/adminProtected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "materialize-css";

function App() {
  const [user, setUser] = useState({ isLoggedIn: false });
  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      userStorage = JSON.parse(userStorage);
      setUser(userStorage);
    }
  }, []);

  return (
    <ThemeProvider theme={themes}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router basename="/">
          <Switch>
            <AdminRoute path="/create" component={CreateSurvey} />
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
        <ToastContainer />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
