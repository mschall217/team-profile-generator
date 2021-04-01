const inquirer = require('inquirer');
//what we use to get the data
const fs = require('fs');
//allows us to write files

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter your name!',
      },
    ])
  }
  
  const init = () => {
    promptUser()
    .then((answers) => {
      fs.writeFile('index.html', generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Successfully created a team profile page!')
      );
    });
  }
  
  init()