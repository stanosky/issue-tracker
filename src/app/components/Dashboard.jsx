import React from "react";

export const Dashboard = ({ groups }) => (
    <div>
        <div>
            {groups.map((group) => (
                <div>{group.id}</div>
            ))}
        </div>
    </div>
);
