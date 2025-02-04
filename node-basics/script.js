const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello from Node.js', function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created successfully');
// });

fs.appendFileSync('hello.txt', '  Mai to achha hu!', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Data appended successfully');
});

fs.rename('hello.txt', 'hello-world.txt', function(err) {
    if (err) {
        console.error(err);
    }
    console.log('File renamed successfully');
});

fs.copyFile('hello-world.txt', './copy/hello-world-copy.txt', function(err) {
    if (err) {
        console.error(err);
    }
    console.log('File copied successfully');
});

// fs.unlink('hello-world-copy.txt', function(err) {
//     if (err) {
//         console.error(err);
//     }
//     console.log('File deleted successfully');
// });
 
// fs.rmdir('./copy', function(err) {
//     if (err) {
//         console.error(err);
//     }
//     console.log('Directory deleted successfully');
// });

fs.rm('./copy', {recursive: true}, function(err) {
    if (err) {
        console.error(err);
    }
    console.log('File deleted successfully');
});

fs.mkdir('./newfolder', function(err) {
    if(err) {
        console.error(err);
    }
    console.log('Directory created successfully');
});