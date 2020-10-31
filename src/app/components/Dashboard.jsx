import React from "react";
import { Link } from "react-router-dom";
import { IssueListContainer } from "../containers/IssueListContainer";

export const Dashboard = ({ groups }) => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <Link to="/new">
          <button className="btn btn-primary btn-block mt-2">New issue</button>
        </Link>
      </div>
    </div>
    <div className="row">
      {groups.map((group) => (
        <IssueListContainer key={group.id} {...group} />
      ))}
    </div>
  </div>
);
