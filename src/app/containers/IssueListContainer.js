import { connect } from "react-redux";
import { IssueList } from "../components/IssueList";

const mapStateToProps = (state, { name, id }) => {
    return {
        name,
        issues: state.issues.filter((issue) => issue.group === id),
    };
};

export const IssueListContainer = connect(mapStateToProps)(IssueList);
