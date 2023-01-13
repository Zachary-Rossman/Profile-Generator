// Enter the team manager's name, employee ID, email address, and office number
// Menu to add engineer/inter/or finish building team
// Select Engineer: Prompt to enter engineer's name, ID, email, and Github username, 
// and I am taken back to the menu
// Select intern: Enter intern's name, ID, email, and school
//Select Finish
// Generate HTML files
const inquirer = require('inquirer');
const fs = require('fs');
const { createInterface } = require('readline');
const team = [];

// Create manager
function createManager(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your team manager's name?",
    },

    {
      type: "input",
      name: "managerID",
      message: "What is your manager's employee ID?",
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email address?",
    },

    {
      type: "input",
      name: "managerNumber",
      message: "What is your manager's office phone number?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Create a new manager object from the manager class

    // Push manager onto team array
    createTeam();
  });
};

// Create Engineer
function createEngineer(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
    },

    {
      type: "input",
      name: "engineeerID",
      message: "What is your engineer's employee ID?",
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email address?",
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What is your engineer's Github?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Create a new engineer object from the manager class

    // Push egineer onto team array
    createTeam();


  });
};

// Create Engineer
function createIntern(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
    },

    {
      type: "input",
      name: "internID",
      message: "What is your intern's employee ID?",
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email address?",
    },

    {
      type: "input",
      name: "internSchool",
      message: "What is your intern's school?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Create a new engineer object from the manager class

    // Push egineer onto team array
    createTeam();


  });
};

function createTeam(){
  inquirer
  .prompt([
    {
        type: "list",
        name: "mainMenu",
        message: "Add an engineer, intern, or finish",
        choices: ["engineer", "intern", "finish"], 
      },
  ])
  .then((answers) => {
    console.log(answers);
    if (answers.mainMenu === "engineer") {
      createEngineer();
    }else if (answers.mainMenu === "inter"){
      createIntern();;
    }else{
      const parseHTML = generateHTML(team);

      // Write to file
      fs.writeFile('team.html', parseHTML, (err) =>
        err ? console.log(err) : console.log('Successfully created team.html!')
      );
    }
  });
};

const generateHTML = (team) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Team Profile Builder</title>
</head>
<body>
  <header>
  <h5>Manager Name:</h5> <p>${managerName}</p>
  <h5>Manager ID:</h5> <p>${managerID}</p>
  <h5>Manager Email Address:</h5> <p>${managerEmail}</p>
  <h5>Manager Office Number:</h5> <p>${managerNumber}</p>
  </header>
</body>
</html>`;
// Ask questions to populate HTML

createManager();
createEngineer();
createIntern();