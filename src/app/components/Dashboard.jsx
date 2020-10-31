import React from "react";
import {IssueListContainer} from '../containers/IssueListContainer';

export const Dashboard = ({ groups }) => (
    <div>
        <div className="row">
            {groups.map((group) => (
                <IssueListContainer key={group.id} {...group} />
            ))}
        </div>
    </div>
);
