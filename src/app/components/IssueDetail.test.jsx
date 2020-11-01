import React from "react";
import { shallow } from "enzyme";
import { IssueDetail } from "./IssueDetail";

describe("IssueDetail", () => {
  const commonProps = {
    issue: {
      group: "g1",
      name: "name",
      desc: "desc",
    },
    groups: [
      {
        name: "test 1",
        id: "g1",
        transitions: ["g2"],
      },
      {
        name: "test 2",
        id: "g2",
        transitions: [],
      },
    ],
    onUpdateIssue: () => {},
  };
  it("should render without errors", () => {
    const wrapper = shallow(<IssueDetail {...commonProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onUpdateIssue method when button clicked", () => {
    const onUpdateIssue = jest.fn();
    const props = { ...commonProps, onUpdateIssue };
    const wrapper = shallow(<IssueDetail {...props} />);
    wrapper.find(".btn-primary").simulate("click");
    expect(onUpdateIssue).toHaveBeenCalledWith({
      group: "g1",
      name: "name",
      desc: "desc",
    });
  });

  it("should call onUpdateIssue method with correct params when status has been changed", () => {
    const onUpdateIssue = jest.fn();
    const props = { ...commonProps, onUpdateIssue };
    const wrapper = shallow(<IssueDetail {...props} />);
    wrapper.find("select").simulate("change", { target: { value: "g2" } });
    wrapper.find(".btn-primary").simulate("click");
    expect(onUpdateIssue).toHaveBeenCalledWith({
      group: "g2",
      name: "name",
      desc: "desc",
    });
  });
});
