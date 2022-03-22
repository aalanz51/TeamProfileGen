const Employee = require("../lib/employee");

describe("Employee class constructor", () => {
  it("New employee creation", () => {
    const teamMember = new Employee("Alex", "1", "austinalexanderlanz@gmail.com");
    expect(teamMember.name).toEqual("Alex");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("austinalexanderlanz@gmail.com");
  }),
    it("getName Function", () => {
      const teamMember = new Employee("Alex", "1", "austinalexanderlanz@gmail.com");
      expect(teamMember.getName()).toEqual("Alex");
    });
});