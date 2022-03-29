const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.internSchool = school;        
    }
    getSchool() {
        return this.internSchool;
    }
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;