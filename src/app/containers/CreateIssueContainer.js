import { IssueDetail } from "../components/IssueDetail";
import { requestIssueCreation } from "../store/actions";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        issue: {
            name: "New issue",
            group: "open",
            desc: "",
        },
        groups: state.groups,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onUpdateIssue: ({ group, name, desc }) =>
            dispatch(requestIssueCreation({ group, name, desc })),
    };
}

export const CreateIssueContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueDetail);
