import React from "react";
import { Link } from "react-router-dom";

export class IssueDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            group: props.issue.group,
            name: props.issue.name,
            desc: props.issue.desc,
        };
        this.setTaskGroup = this.setTaskGroup.bind(this);
        this.setTaskName = this.setTaskName.bind(this);
        this.setTaskDesc = this.setTaskDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setTaskGroup(e) {
        this.setState({ group: e.target.value });
    }

    setTaskName(e) {
        this.setState({ name: e.target.value });
    }

    setTaskDesc(e) {
        this.setState({ desc: e.target.value });
    }

    onSubmit() {
        this.props.onUpdateTask(this.state);
    }

    render() {
        const { groups, issue } = this.props;
        return (
            <div className="card p-3 col-6">
                <div>
                    <span className="mr-4">Title:</span>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.setTaskName}
                        className="form-control form-control-lg"
                    />
                </div>
                <div>
                    <span className="mr-4">Description:</span>
                    <textarea
                        onChange={this.setTaskDesc}
                        defaultValue={this.state.desc}
                        className="form-control form-control-lg"
                    />
                </div>

                <span className="mr-4">Status: </span>
                <select onChange={this.setTaskGroup} className="form-control">
                    {groups.map((group) => (
                        <option
                            key={group.id}
                            value={group.id}
                            defaultValue={issue.group === group.id}
                            disabled={group.transitions.includes(issue.group)}
                        >
                            {group.name}
                        </option>
                    ))}
                </select>

                <div>
                    <button onClick={this.onSubmit} className="btn btn-primary mt-2">
                        Save
                    </button>
                    <Link to="/dashboard">
                        <button className="btn mt-2">Cancel</button>
                    </Link>
                </div>
            </div>
        );
    }
}
