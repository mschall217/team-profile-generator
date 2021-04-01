const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        let role = 'engineer';
        return role;
    }
    getOfficeNum(){
        return this.github;
    }
}

module.exports = Engineer;