const fs = require('fs');

const writeFile = pageContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style,css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copy created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };