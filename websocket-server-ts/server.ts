// https://www.npmjs.com/package/ws
// start a websocket server.
import { WebSocketServer, WebSocket } from "ws";

const wss = new  WebSocketServer({ port: 8000 });

wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    ws.on('message', (message: string) => {
        console.log('Received message: ${message}');
        wss.clients.forEach((client) => {
            client.send('server received message: ${message}');
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});