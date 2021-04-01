const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getRole(){
        let role = 'intern';
        return role;
    }
    getOfficeNum(){
        return this.school;
    }
}

module.exports = Intern;