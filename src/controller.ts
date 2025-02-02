// Access the data store (store.json)
import fs from 'fs';
import path from 'path';

// Handle requests and responses
import { ServerResponse, IncomingMessage } from 'http';

// Access the Task structure
import { Task } from './ITask';

const getTasks = (req: IncomingMessage, res: ServerResponse) => {
    return fs.readFile(
        path.join(__dirname, 'db.json'),
        'utf8',
        (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(
                    JSON.stringify({ 
                        success: true, message: JSON.parse(data)
                    })
                );
            }
        }
    );
};

export { getTasks };
