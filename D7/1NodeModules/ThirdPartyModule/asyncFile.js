const fs = require('fs');

// write file asynchronously
fs.writeFile('AsynFile.txt', 'Hello, World! My First message.', (err,result) => {
    if(err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully.');
});

// read file
fs.readFile('AsynFile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// append to file asynchronously
fs.appendFile('AsynFile.txt', '\n helloo', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('File appended successfully.');
});

// append to file asynchronously
fs.appendFile('AsynFile.txt', '\n its A NEW LINE', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('File appended successfully.');
});
