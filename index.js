const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


let team = [];

const promptUser = () => {
    inquirer.prompt([
     {
        type: 'list', name: 'makeTeam', message: 'Would you like to make a team profile?',
        choices: [
            "yes",
            "no"
        ]
     }
    ])
    .then(function(data){
        if(data.makeTeam === 'yes'){
            addEmployee();
        }
        if(data.makeTeam === 'no'){
            return;
        }
    })
  }
  const addEmployee = () => {
    inquirer.prompt([
        {
           type: 'list', name: 'addEmployee', message: 'Would you like to add an employee?',
           choices: [
               "yes",
               "no, my team is complete"
           ]
        }
       ])
       .then(function(data){
           if(data.addEmployee === 'yes'){
             addTeamMember();
           }
           if(data.addEmployee === 'no, my team is complete'){
            const pageContent = generateHTML(team);
            console.log(pageContent);
            fs.writeFile('index.html', pageContent.join(""), (err) =>
           err ? console.log(err) : console.log('Successfully created a team profile page!'));
        }
       })
  }
  const addTeamMember = () => {
    inquirer.prompt([
         {
            type: 'list', name: 'role', message: 'What is the team members role',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ]
         }
       ])
       .then(function(data){
        if(data.role === 'Manager'){
            addManager();
        }
        if(data.role == 'Engineer'){
            addEngineer();
        }
        if(data.role === 'Intern'){
            addIntern();
        }
    })

    }

    const addManager = () => {
        inquirer.prompt([
            {
                type: 'input', name: 'name', message: 'What is the Managers name?',
            },
            {
              type: 'input', name: 'id', message: 'What is the Managers ID number',
            } ,       
            {
               type: 'input', name: 'email', message: 'What is the Managers email address?',
            },
            {
               type: 'input', name: 'officeNum', message: 'Please enter your managers phone number'
            }
        ])
        .then(function(data){
            console.log(`Managers name is ${data.name} id is ${data.id} email ${data.email} Phone number is ${data.officeNum}`);
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const officeNum = data.officeNum;
            const member = new Manager(name, id, email, officeNum);
            team.push(member);
            addEmployee();
        })
    }

    const addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input', name: 'name', message: 'What is the Engineers name?',
            },
            {
                type: 'input', name: 'id', message: 'What is the Engineers ID number?',
            } ,       
            {
                type: 'input', name: 'email', message: 'What is the Engineers email address?',
            },
            {
                type: 'input', name: 'github', message: 'Please enter the Engineers github username'
            }
        ])
        .then(function(data){
            console.log(`Engineers name is ${data.name} id is ${data.id} email ${data.email} GitHub is github.com/${data.github}`);
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const member = new Engineer(name, id, email, github);
            team.push(member);
            addEmployee();
        })
    }

    const addIntern = () => {
        inquirer.prompt([
            {
                type: 'input', name: 'name', message: 'What is the Interns name?',
            },
            {
                type: 'input', name: 'id', message: 'What is the Interns ID number?',
            } ,       
            {
                type: 'input', name: 'email', message: 'What is the Interns email address?',
            },
            {
                type: 'input', name: 'school', message: 'Please enter what school the Intern is attending'
            }
        ])
        .then(function(data){
            console.log(`Interns name is ${data.ame} id is ${data.id} email ${data.email} is attending ${data.school}`);
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const member = new Intern(name, id, email, school);
            team.push(member);
            addEmployee();
        })
    }

  const init = () => {
    promptUser()
  }
  
  init()