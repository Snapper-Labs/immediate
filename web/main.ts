import {Peer, createWebSocketTransport} from './rpc';
import {createDocumentServer} from './server';

function serveWebSocket(ws: WebSocket): () => void {
  const peer = new Peer(createWebSocketTransport(ws));
  const cleanup = createDocumentServer(peer);
  peer.start();

  return cleanup;
}

function setup(endpoint: string, onOpen: () => void, backoffTime: number) {
  const socket = new WebSocket(endpoint);
  let currCleanup = onOpen;

  socket.addEventListener('open', function() {
    console.log(`open WS`);
    onOpen();
    currCleanup = serveWebSocket(socket);
  });

  socket.addEventListener('close', function(event) {
    console.log(`currCleanup: ${currCleanup}`);
    setTimeout(() => {
      setup(endpoint, currCleanup, Math.min(1000 * 10, backoffTime * 2));
    }, backoffTime);
    console.log(`close: ${event}`);
  });

  socket.addEventListener('error', function(event) {
    console.log(`error: ${event}`);
  });
}

setup('ws://localhost:8080/ws', () => {}, 100);
