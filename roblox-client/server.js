const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9808;
// Feel free to change this with almost anything, just dont forget to change the value on server side

const server = http.createServer((req, res) => {
  console.log('Received headers:', req.headers); 

  const FILE_PATH = path.join(__dirname,'\\files\\', req.headers['file']+'.txt');
    // Requires 'file' header with file name value when requesting
     // All files should be located in {PATH_TO_PROJECT}/files folder 
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error: Could not read '+ req.headers['file']+'.txt');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

