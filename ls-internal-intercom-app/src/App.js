import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/structural/Footer";
import Header from "./components/structural/Header";
// import AppDirectory from "./components/structural/AppDirectory";  re import for app directory
import SendEmailContainer from "./components/sendEmail/SendEmailContainer";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import ForgotPassword from "./components/authentication/ForgotPassword";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <div>
          {/* Re enable this route once there are more apps */}
          {/* <PrivateRoute exact path="/" component={AppDirectory} />  */}
          <PrivateRoute exact path="/" component={SendEmailContainer} />
          <PrivateRoute
            exact
            path="/sendEmail"
            component={SendEmailContainer}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
        </div>
      </Router>
      <Footer />
    </AuthProvider>
  );
};

export default App;
