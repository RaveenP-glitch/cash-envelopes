const fs = require('fs');

fs.writeFile("hey.txt", "Hello World! from Raveen", function(err) {
    if(err) {
        console.error(err);
    } else {
        console.log("done");
    }
});

fs.appendFile("hey.txt", "How are you?", function(err) {
    if(err) {
        console.error(err);
    } else {
        console.log("done");
    }
});

fs.rename("hey.txt", "hello.txt", function(err) {
    if(err) {
        console.error(err);
    } else {
        console.log("done");
    }
});

fs.copyFile("hello.txt", "./copy/copy.txt", function(err) {
    if(err) {
        console.error(err);
    } else {
        console.log("done");
    }
});