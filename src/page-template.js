const generateManager = managerText => {
    return `
    <p>${managerText}</p>
    `;
};

// const generateEngineer = engineer => {
//     return `
//     <p>${engineer.name}
//     `
// };

// const generateIntern = intern => {
//     return `
//     <p>${intern.name}
//     `
// };

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

    //let { name, engineer, intern } = employeeInfo;
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
                <p>Test</p>
                <p>Test</p>
            </main>
            <footer>
            </footer>
    </body>
    </html>

    `;

};