import React from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { DashboardContainer } from "./containers/DashboardContainer";
import { CreateIssueContainer } from "./containers/CreateIssueContainer";
import { UpdateIssueContainer } from "./containers/UpdateIssueContainer";
import { store } from "./store";
import { history } from "./store/history";

const renderRoute = (Component) => ({ match }) => <Component match={match} />;

export const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <div className="container mt-3">
        <Route
          exact
          path="/dashboard"
          render={renderRoute(DashboardContainer)}
        />
        <Route
          exact
          path="/issue/:id"
          render={renderRoute(UpdateIssueContainer)}
        />
        <Route exact path="/new" render={renderRoute(CreateIssueContainer)} />
      </div>
    </Provider>
  </Router>
);
