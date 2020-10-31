export const defaultState = {
  groups: [
    {
      name: "Open",
      id: "open",
      transitions: ["pending", "closed"],
    },
    {
      name: "Pending",
      id: "pending",
      transitions: ["closed"],
    },
    {
      name: "Closed",
      id: "closed",
      transitions: [],
    },
  ],
  issues: [
    {
      name: "Issue 1",
      desc: "Description",
      id: "I1",
      group: "open",
    },
    {
      name: "Issue 2",
      desc: "Description",
      id: "I2",
      group: "open",
    },
    {
      name: "Issue 3",
      desc: "Description",
      id: "T3",
      group: "pending",
    },
    {
      name: "Issue 4",
      desc: "Description",
      id: "T4",
      group: "pending",
    },
    {
      name: "Issue 5",
      desc: "Description",
      id: "T5",
      group: "closed",
    },
  ],
};
