const Manager = require("../lib/manager");

describe("Manager class constructor", () => {
  it("New manager creation", () => {
    const teamMember = new Manager("Alex", "1", "austinalexanderlanz@gmail.com", "2151");
    expect(teamMember.name).toEqual("Alex");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("austinalexanderlanz@gmail.com");
    expect(teamMember.officeNumber).toEqual("2151");
  }),
    it("getName Function", () => {
      const teamMember = new Manager(
          "Alex", 
          "1", 
          "austinalexanderlanz@gmail.com", 
          "2151");
      expect(teamMember.getName()).toEqual("Alex");
    });
});