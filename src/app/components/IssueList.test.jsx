import React from "react";
import { shallow } from "enzyme";
import { IssueList } from "./IssueList";

describe("IssueList", () => {
  it("should render without errors", () => {
      const props = {
          issues: [
              {
                  id: 'id 1',
                  name: 'name 1',
                  desc: 'desc 1',
                  group: 'group 1',
              },
              {
                  id: 'id 2',
                  name: 'name 2',
                  desc: 'desc 2',
                  group: 'group 1',
              }
          ],
          name: 'group 1'
      }
    const wrapper = shallow(<IssueList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
