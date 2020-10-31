import React from "react";
import { Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { DashboardContainer } from "./containers/DashboardContainer";
import { store } from "./store";
import { history } from "./store/history";

export const App = () => (
    <Router history={history}>
        <Provider store={store}>
            <div className="container mt-3">
                <Route
                    exact
                    path="/dashboard"
                    render={({ match }) => <DashboardContainer match={match} />}
                />
            </div>
        </Provider>
    </Router>
);
