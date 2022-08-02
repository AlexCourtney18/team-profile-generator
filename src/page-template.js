const generateManager = managerArr => {
    return `
    ${managerArr
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, role, officeNumber }) => {
        return `
        <p>${name}</p>
        <p>${id}</p>
        <p>${email}</p>
        <p>${role}</p>
        <p>${officeNumber}</p>
        `
    })}
    `;
};

const generateEngineer = engineerText => {
    return `
    ${engineerText
        .filter(({ github }) => github)
        .map(({ name, id, email, role, github }) => {
        return `
        <p>${name}</p>
        <p>${id}</p>
        <p>${email}</p>
        <p>${role}</p>
        <p>${github}</p>
        `
    })}
    `;
};

const generateIntern = internText => {
    return `
    ${internText
        .filter(({ school }) => school)
        .map(({ name, id, email, role, school }) => {
        return `
        <p>${name}</p>
        <p>${id}</p>
        <p>${email}</p>
        <p>${role}</p>
        <p>${school}</p>
        `
    })}
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
        <title>Employee Contact Sheet</title>
    </head>

    <body>
        <header>
            <h1>Employee Contact Sheet</h1>
        </header>
            <main>
                ${generateManager(employeeData)}
                ${generateEngineer(employeeData)}
                ${generateIntern(employeeData)}
                
                <p>Test</p>
                <p>Test</p>
            </main>
            <footer>
            </footer>
    </body>
    </html>

    `;

};