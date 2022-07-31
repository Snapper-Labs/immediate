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
    onOpen();
    currCleanup = serveWebSocket(socket);
  });

  socket.addEventListener('close', function() {
    setTimeout(() => {
      setup(endpoint, currCleanup, Math.min(1000 * 10, backoffTime * 2));
    }, backoffTime);
  });
}

function getWsEndpoint() {
  const loc = window.location;
  let endpoint = "";
  if (loc.protocol === "https:") {
    endpoint = "wss:";
  } else {
    endpoint = "ws:";
  }
  console.log("foo " + loc.pathname)
  endpoint += "//" + loc.host;
  endpoint += loc.pathname.substring(0, loc.pathname.length-1);
  endpoint += "/ws";

  return endpoint;
}
setup(getWsEndpoint(), () => {}, 100);
