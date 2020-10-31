import React from "react";
import { IssueListItem } from "./IssueListItem";

export const IssueList = ({ issues, name }) => (
    <div>
        <h2>{name}</h2>
        <div>
            {issues.map((issue) => (
                <IssueListItem {...issue} key={issue.id} />
            ))}
        </div>
    </div>
);
