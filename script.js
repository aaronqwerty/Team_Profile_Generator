const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const Manager = require("./library/manager");

const employees = [];

function addEmployee() {
    inquirer.prompt([
        {
        message: "Enter the Employee's Name",
        name: "Name"
        },
        {
        message: "What is the Emloyee's Role",
        type: "list",
        choices: ["Engineer", "Intern", "Manager"],
        name: "Role"
        },
        {
        message: "Enter the Employee ID",
        name: "Id",
        },
        {
        message: "What is the Employee's Email",
        name: "Email"
        }
]) 

.then(function({Name, Role, Id, Email}) {
    let RoleQuestion = "";
    if (Role === "Engineer") 
    {
        RoleQuestion = "GitHub Username";
    } else if (Role === "Intern") 
    {
        RoleQuestion = "School Name";
    } else
    {
        RoleQuestion = "Office Phone Number";
    }
    inquirer.prompt([{
        message: `Enter the Employee's ${RoleQuestion}`,
        name: "RoleAnswer"
    }, 
    { 
        message: "Would you like to add another Employee?",
        name: "empAddMore",
        type: "list",
        choices: ["Yes", "No"]
    }
]) 
.then(function({RoleAnswer, empAddMore}) {
    let addNewEmployee;
    if (Role === "Engineer") {
        addNewEmployee = new Engineer(Name, Id, Email, RoleAnswer);
    } else if (Role === "Intern") {
        addNewEmployee = new Intern(Name, Id, Email, RoleAnswer);
    } else {
        addNewEmployee = new Manager(Name, Id, Email, RoleAnswer);
    }
    employees.push(addNewEmployee);
    addHtml(addNewEmployee)
    .then(function() {
        if (empAddMore === "Yes") {
            addEmployee();
        } else {
            finishHtml();
        }
    });
});
});
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = employee.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding employee");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

function init() {
    startHtml();
    addEmployee();
}

init()