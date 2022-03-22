const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')


function generateCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    switch(teamMember.getRole()) {
      case 'Manager':
        cards.push(generateManagerCard(teamMember));
        break;
      case 'Engineer':
        cards.push(generateEngineerCard(teamMember));
        break;
      case 'Intern':
        cards.push(generateInternCard(teamMember));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
  <div class="card m-1 shadow" style="width: 300px">
    <div class='card-header bg-dark text-light'>
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: ${Manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <div class="card m-1 shadow" style="width: 300px">
    <div class='card-header bg-dark text-light'>
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-laptop"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `
};

let generateInternCard = (Intern) => {
  return `
  <div class="card m-1 shadow" style="width: 300px">
    <div class='card-header bg-dark text-light'>
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: ${Intern.getEmail()}</li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function generateTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>Team Profiles</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-success">
  <div class="container">
    <h1 class="display-4 text-center text-light">Meet the Team!</h1>
  </div>
</div>
<div class="justify-content-center d-flex flex-row flex-wrap">
${generateCards(team)}
</div>
</body>
</html>
    `
}


module.exports = generateTeam;

