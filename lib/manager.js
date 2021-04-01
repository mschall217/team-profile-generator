const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getRole(){
        let role = 'manager';
        return role;
    }
    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager;