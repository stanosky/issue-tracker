import React from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { DashboardContainer } from "./containers/DashboardContainer";
import { IssueDetailContainer } from "./containers/IssueDetailContainer";
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
                    path="/new"
                    render={renderRoute(IssueDetailContainer)}
                />
            </div>
        </Provider>
    </Router>
);
