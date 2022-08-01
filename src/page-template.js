const generateManager = manager => {
    return `
    <p>${manager.name}
    `
};

const generateEngineer = engineer => {
    return `
    <p>${engineer.name}
    `
};

const generateIntern = intern => {
    return `
    <p>${intern.name}
    `
};

// const passToPage = (employeeData) => {
//     // return `
//     // a bunch of html
//     // <main>
//     // ${returnCards(employeeData)}
//     // <main>
//     // `
// }

module.exports = () => {
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
            <h1>Title</h1>
        </header>
            <main>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </main>
            <footer>
            </footer>
    </body>
    </html>

    `;

};