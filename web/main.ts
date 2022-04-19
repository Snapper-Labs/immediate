import {Peer, createWebSocketTransport} from './rpc';
import {createDocumentServer} from './server';

function serveWebSocket(ws: WebSocket): void {
  const peer = new Peer(createWebSocketTransport(ws));
  createDocumentServer(peer);
  peer.start();
}

function setup(endpoint: string) {
  const socket = new WebSocket(endpoint);
  socket.addEventListener('open', function() {
    serveWebSocket(socket);
  });
}

setup('ws://localhost:8080/ws');
