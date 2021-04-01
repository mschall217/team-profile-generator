const inquirer = require('inquirer');
//what we use to get the data
const fs = require('fs');
//allows us to write files
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


let team = [];

const promptUser = () => {
    inquirer.prompt([
     {
        type: 'list',
        name: 'makeTeam',
        message: 'Would you like to make a team profile?',
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
           type: 'list',
           name: 'addEmployee',
           message: 'Would you like to add an employee?',
           choices: [
               "yes",
               "no"
           ]
        }
       ])
       .then(function(data){
           if(data.addEmployee === 'yes'){
             addTeamMember();
           }
           if(data.addEmployee === 'no'){
               return;
           }
       })
  }
  const addTeamMember = () => {
    inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: 'What is the team members name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team members ID number',
         } ,       
         {
            type: 'input',
            name: 'email',
            message: 'What is the team members email address?',
         },
         {
            type: 'list',
            name: 'role',
            message: 'What is the team members role',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ]
         }
       ])
       .then(function(data){
        if(data.role === 'Manager'){
            addManager(data.name, data.id, data.email);
        }
        if(data.role == 'Engineer'){
            addEngineer(data.name, data.id, data.email);
        }
        if(data.role === 'Intern'){
            addIntern(data.name, data.id, data.email);
        }
    })

    }

    const addManager = (name, id, email) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'officeNum',
                message: 'Please enter your managers number'
            }
        ])
        .then(function(data){
            console.log(`Managers name is ${name} id is ${id} email ${email} Phone number is ${data.officeNum}`);
            addEmployee();
        })
    }

    const addEngineer = (name, id, email) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your github username'
            }
        ])
        .then(function(data){
            console.log(`Engineers name is ${name} id is ${id} email ${email} GitHub is github.com/${data.github}`);
            addEmployee();
        })
    }

    const addIntern = (name, id, email) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Please enter what school you are attending'
            }
        ])
        .then(function(data){
            console.log(`Interns name is ${name} id is ${id} email ${email} is attending ${data.school}`);
            addEmployee();
        })
    }


  const init = () => {
    promptUser()
    // .then((answers) => {
    //   fs.writeFile('index.html', generateMarkdown(answers), (err) =>
    //     err ? console.log(err) : console.log('Successfully created a team profile page!')
    //   );
    // });
  }
  
  init()