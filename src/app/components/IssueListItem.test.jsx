import React from "react";
import { shallow } from "enzyme";
import { IssueListItem } from "./IssueListItem";

describe("IssueListItem", () => {
  it("should render without errors", () => {
      const props = {
          id: 'id',
          name: 'name',
      }
      const wrapper = shallow(<IssueListItem {...props} />);
      expect(wrapper).toMatchSnapshot();
  });
});
