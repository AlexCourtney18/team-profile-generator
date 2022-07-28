const generateManager = manager => {
    return `
    <p>${manager.name}
    `
}

const passToPage = (employeeData) => {
    return `
    a bunch of html
    <main>
    ${returnCards(employeeData)}
    <main>
    `
}

module.exports = passToPage;