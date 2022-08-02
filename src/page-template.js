const generateManager = managerArr => {
    return `
    ${managerArr
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, role, officeNumber }) => {
        return `
        <p>Name: ${name}</p>
        <p>ID#: ${id}</p>
        <p>Email Address: <a href="mailto:${email}">${email}</a></p>
        <p>Role: ${role}</p>
        <p>Office Number: ${officeNumber}</p>
        `
    })}
    `;
};

const generateEngineer = engineerText => {
    return `
    <div class="card-deck">
    ${engineerText
        .filter(({ github }) => github)
        .map(({ name, id, email, role, github }) => {
        return `
        <div class="card" style="max-width: 18rem;">
        <div class="card-body" style="background-color: #4a525a; color: aliceblue">
        <h5 class="card-title">Engineer</h5>
        <p>Name: ${name}</p>
        <p>ID#: ${id}</p>
        <p>Email Address: <a href="mailto:${email}">${email}</a></p>
        <p>Role: ${role}</p>
        <p>GitHub Profile: <a href="https:github.com/${github}" target="_blank">GitHub</a></p>
        </div>
        </div>
        `;
    }).join('')}
    </div>
    `;
};

const generateIntern = internText => {
    return `
    <div class="card-deck">
    ${internText
        .filter(({ school }) => school)
        .map(({ name, id, email, role, school }) => {
        return `
        <div class="card" style="max-width: 18rem;">
        <div class="card-body" style="background-color: #4a525a; color: aliceblue">
        <h5 class="card-title">Intern</h5>
        <p>Name: ${name}</p>
        <p>ID#: ${id}</p>
        <p>Email Address: <a href="mailto:${email}">${email}</a></p>
        <p>Role: ${role}</p>
        <p>School: ${school}</p>
        </div>
        </div>
        `;
    }).join('')}
    </div>
    `;
};

// const passToPage = employeeData => {
//     return `
//     ${employeeData.map(({ managerName, managerID, managerEmail, managerOffice }) => {
//         return `
//         <p>${managerName}</p>
//         <p>${managerID}</p>
//         <p>${managerEmail}</p>
//         <p>${managerOffice}</p>
//         `;
//     })
// }

//     `
//     // a bunch of html
//     // <main>
//     // ${returnCards(employeeData)}
//     // <main>
// }

module.exports = employeeData => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Employee Contact Sheet</title>
    </head>

    <body>
        <header>
            <h1>Employee Contact Sheet</h1>
        </header>
            <main>
                <div class="jumbtotron jumbotron-fluid">
                    <div class="container">
                <h1 class="display-4" style="background-color: #4a525a; color: aliceblue">${generateManager(employeeData)}</h1>
                    </div>
                </div>
                ${generateEngineer(employeeData)}
                
                ${generateIntern(employeeData)}
                
            </main>
    </body>
    </html>

    `;

};