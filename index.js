// const { validate } = require('@babel/types');
const inquirer = require('inquirer');
// const { choices } = require('yargs');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the team manager's name. (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else console.log("Please enter the team manager's name.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter the team manager's employee ID. (Required)",
            validate: managerIDInput => {
                if (managerIDInput) {
                    return true;
                } else console.log("Please enter the team manager's employee ID.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the team manager's email address. (Required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else console.log("Please enter the team manager's email address.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Please enter the team manager's office number. (Required)",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else console.log("Please enter the team manager's office number.");
                    return false;
            }
        },
    ]);
};

const promptEmployees = employeeData => {
    // if (!employeeData.info) {
    //     employeeData.info = [];
    // }
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: "Would you like to add an employee? If not, select 'Finish'.",
            choices: ['Engineer', 'Intern', 'Finish'],
            
        },
    ])
        .then(employeeType => {
            console.log(employeeType.addEmployee, "CHOICES!")
            if (employeeType.addEmployee === 'Engineer') {
                return promptEngineer(employeeData);
            } else if (employeeType.addEmployee === 'Intern') {
                return promptIntern(employeeData);
            } else return employeeData;
        }); 
};

const promptEngineer = (engineerData) => {
    if (!engineerData.info) {
        engineerData.info = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name. (Required)",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else console.log("Please enter the engineer's name.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter the engineer's employee ID. (Required)",
            validate: engineerIDInput => {
                if (engineerIDInput) {
                    return true;
                } else console.log("Please enter the engineer's employee ID.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter the engineer's email address. (Required)",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else console.log("Please enter the engineer's email address.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the engineer's GitHub username. (Required)",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else console.log("Please enter the engineer's GitHub username.");
                    return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        } 
    ])
        .then(employeeData => {
            if (employeeData.confirmAddEmployee) {
                return promptEmployees(employeeData);
            } else {
                return employeeData;
            }
        });
};

const promptIntern = (internData) => {
    if (!internData.info) {
        internData.info = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the intern's name. (Required)",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else console.log("Please enter the intern's name.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter the intern's employee ID. (Required)",
            validate: internIDInput => {
                if (internIDInput) {
                    return true;
                } else console.log("Please enter the intern's employee ID.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter the intern's email address. (Required)",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else console.log("Please enter the intern's email address.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter the intern's School. (Required)",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else console.log("Please enter the intern's School.");
                    return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        } 
    ])
        .then(employeeData => {
            if (employeeData.confirmAddEmployee) {
                return promptEmployees(employeeData);
            } else {
                return employeeData;
            }
        });
};

promptUser()
    .then(promptEmployees)