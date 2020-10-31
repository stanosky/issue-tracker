import { Link } from "react-router-dom";
import React from "react";

export const IssueListItem = ({ id, name }) => (
  <Link to={`/issue/${id}`}>
    <div className="card p-2 mt-2">
      <span>{name}</span>
    </div>
  </Link>
);
