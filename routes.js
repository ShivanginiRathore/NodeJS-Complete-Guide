const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        const fileData = fs.readFileSync('./message.txt', 'utf8');
        res.write(fileData);
        res.write("He");
        res.write('<head><title>Custom Response</title></head>');
        res.write('<body><form action="/mes" method="POST"><input type="text" name="message"></input><button type = "submit">SEND</button></form></body>')
        res.write('</html>')
        return res.end();
    }   

    if(url === '/mes' && method === 'POST'){
        const body = [];
        req.on('data', (chunkOfData) => {
            body.push(chunkOfData);
        });
        return req.on('end',()=> {
            const parsedBody = Buffer.concat(body).toString();
            let message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                res.write('<html><body> message here</body> </html>');
                return res.end();
            });
        })
    }
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body>Welcome home</body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'some text';

exports.handler = requestHandler;
exports.someText = 'some text';