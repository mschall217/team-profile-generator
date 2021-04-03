const inquirer = require('inquirer');

class Employee{
    constructor(name, id, email, role){
        this.name = name; 
        this.id = id;
        this.email = email;
        this.role = 'employee';
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role
    }
}

module.exports = Employee;