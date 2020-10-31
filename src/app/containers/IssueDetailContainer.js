import { IssueDetail } from "../components/IssueDetail";
import { requestTaskCreation } from "../store/actions";
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
        onUpdateTask: ({ group, name, desc }) =>
            dispatch(requestTaskCreation({ group, name, desc })),
    };
}

export const IssueDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueDetail);
