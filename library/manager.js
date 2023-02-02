const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.officeNumber = this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager