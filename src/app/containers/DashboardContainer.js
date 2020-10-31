import { connect } from "react-redux";
import { Dashboard } from "../components/Dashboard";

const mapStateToProps = ({ groups }) => ({ groups });

export const DashboardContainer = connect(mapStateToProps)(Dashboard);
