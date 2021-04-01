const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = 'Intern'
        this.school = school;
    }
    //getRole(){;return 'Intern';}
    getOfficeNum(){
        return this.school;
    }
}

module.exports = Intern;