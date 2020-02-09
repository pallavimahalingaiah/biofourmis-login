import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./../components/layout";
import LoginPage from "./../pages/loginPage";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/login"
          render={() => (
            <React.Fragment>
              <LoginPage></LoginPage>
            </React.Fragment>
          )}
        />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
