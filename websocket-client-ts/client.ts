// https://www.npmjs.org/package/ws
// starts a websocket client and connects to a server
import WebSocket from "ws";

const ws = new WebSocket('ws://localhost:8000')

ws.on('open', () => {
    console.log('Connected to server');
    ws.send('Hi Server!');
});

ws.on('message', (message: string) => {
    console.log('Received a message from the server: ${message}');
});

ws.on('close', () => {
    console.log('Disconnected from server');
});