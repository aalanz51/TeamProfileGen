const Intern = require("../lib/intern");

describe("Intern class constructor", () => {
  it("New intern creation", () => {
    const teamMember = new Intern("Alex", "1", "austinalexanderlanz@gmail.com", "Coastal Carolina");
    expect(teamMember.name).toEqual("Alex");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("austinalexanderlanz@gmail.com");
    expect(teamMember.internSchool).toEqual("Coastal Carolina");
  }),
    it("getName Function", () => {
      const teamMember = new Intern(
        "Alex",
        "1",
        "austinalexanderlanz@gmail.com",
      );
      expect(teamMember.getName()).toEqual("Alex");
    });
});