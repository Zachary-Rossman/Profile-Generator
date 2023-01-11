// Enter the team manager's name, employee ID, email address, and office number
// Menu to add engineer/inter/or finish building team
// Select Engineer: Prompt to enter engineer's name, ID, email, and Github username, 
// and I am taken back to the menu
// Select intern: Enter intern's name, ID, email, and school
//Select Finish
// Generate HTML files
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ managerName, managerID, managerEmail, managerNumber}) =>
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
  <div>${managerName}</div>
  <div>${managerID}</div>
  <div>${managerEmail}</div>
  <div>${managerNumber}</div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is your team manager's name?",
    },
    {
      type: 'input',
      name: 'managerID',
      message: "What is your manager's employee ID?",
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is your manager's email address?",
    },
    {
      type: 'input',
      name: 'managerNumber',
      message: "What is your manager's office phone number?",
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
    );
  });