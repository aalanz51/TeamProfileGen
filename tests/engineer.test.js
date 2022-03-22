const Engineer = require("../lib/engineer");

describe("Engineer class constructor", () => {
  it("New engineer creation", () => {
    const teamMember = new Engineer(
      "Alex",
      "1",
      "austinalexanderlanz@gmail.com",
      "aalanz51"
    );
    expect(teamMember.name).toEqual("Alex");
    expect(teamMember.id).toEqual("1");
  }),
    it("getName Function", () => {
      const teamMember = new Engineer(
        "Alex",
        "1",
        "austinalexanderlanz@gmail.com",
      );
      expect(teamMember.getName()).toEqual("Alex");
    });
});