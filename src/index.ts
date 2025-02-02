const { createServer, IncomingMessage, ServerResponse } = require('http');
const { getTasks } = require('./controller.ts');

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method == 'GET' && req.url == '/api/tasks') {
        return getTasks(req, res);
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000.\nGo to http://localhost:3000/');
});

// myServer.close();
