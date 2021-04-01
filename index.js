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
            addTeamMember();
        }
        if(data.makeTeam === 'no'){
            return;
        }
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