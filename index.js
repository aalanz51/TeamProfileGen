const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/pageTemplate');


const team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the team managers name?',
        },
        {
            type:'input',
            name:'id',
            message:'What is the team managers id?',
        },
        {
            type:'input',
            name:'email',
            message:'What is the team managers email?',
        },
        {
            type:'input',
            name:'officeNumber',
            message:'What is the team managers office number?',
        },
        {
            type:'list',
            name:'addMember',
            message:'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the engineers name?',
        },
        {
            type:'input',
            name:'id',
            message:'What is the engineers id?',
        },
        {
            type:'input',
            name:'email',
            message:'What is the engineers email address?',
        },
        {
            type:'input',
            name:'github',
            message:'What is the engineers GitHub username?',
        },
        {
            type:'list',
            name:'addMember',
            message:'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the interns name?'
        },
        {
            type:'input',
            name:'id',
            message:'What is the interns id?'
        },
        {
            type:'input',
            name:'email',
            message:'What is the interns email address?'
        },
        {
            type:'input',
            name:'school',
            message:'What is the interns school?'
        },
        {
            type:'list',
            name:'addMember',
            message:'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
}

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};