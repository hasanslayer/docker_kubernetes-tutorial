const http = require('http'),
        fs = require('fs');

const handler = (req, res) => {
    fs.readFile('/etc/config/enemies.cheat.level', 'utf8', (err, fileData) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("'ENEMIES' (from env variable): " + process.env.ENEMIES + "<br/>");
            res.write("'enemies.cheat.level' (from volume): " + fileData);
            res.end();
        }
    });
};

const www = http.createServer(handler);
www.listen(9000);