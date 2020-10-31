import { IssueDetail } from "../components/IssueDetail";
import { requestIssueUpdate } from "../store/actions";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;

  return {
    issue: state.issues.find((issue) => issue.id === id),
    groups: state.groups,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  let id = ownProps.match.params.id;
  return {
    onUpdateIssue: ({ group, name, desc }) =>
      dispatch(requestIssueUpdate({ id, group, name, desc })),
  };
}

export const UpdateIssueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueDetail);
