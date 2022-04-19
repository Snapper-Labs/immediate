type RequestMessage = {
  id: number | null; // null: notification
  method: string;
  params: any;
}

type ResponseMessage = {
  id: number;
  result: any;
  error: {
    code: number;
    message: string;
    data: any;
  } | null;
}


/**
 * `ProtocolMessage` is one of the two kinds of messages defined in the
 * protocol.
 */
type ProtocolMessage = RequestMessage | ResponseMessage;

/**
 * `WireMessage` is what actually goes over the wire; either a single protocol
 * message, or a batch of them.
 */
type WireMessage = ProtocolMessage | Array<ProtocolMessage>

/**
 * `Transport` represents any messaging medium that permits peers to exchange
 * `WireMessage`s.
 */
interface Transport {
  onMessage(cb: (msg: WireMessage) => void): void;
  sendMessage(msg: WireMessage): void;
}

/**
 * `Handler` is an implementation of a method.
 */
type Handler<Params, Result> = (params: Params, peer: Peer) => Promise<Result>

type PromiseFunctions = [(r: any) => void, (e: Error) => void];

/**
 * `Peer` represents one end of the protocol. It can act both as a server
 * (responding to requests) and a client (issuing requests).
 */
export class Peer {
  constructor(transport: Transport) {
    this._transport = transport;
    this._nextId = 0;
    this._pending = new Map();
    this._handlers = new Map();
  }

  start() {
    this._transport.onMessage(msg => this._handleWireMessage(msg));
  }

  request<Params, Result>(method: string, params: Params): Promise<Result> {
    const id = this._getNextId();
    const message = {
      id,
      method,
      params,
    }

    const promise = new Promise<Result>((resolve, reject) => {
      this._pending.set(id, [resolve, reject]);
      this._transport.sendMessage(message);
    });

    return promise;
  }

  async notify<Params>(method: string, params: Params): Promise<void> {
    const message = {
      id: null,
      method,
      params,
    }

    this._transport.sendMessage(message);
  }

  setHandler<Params, Result>(method: string, handler: Handler<Params, Result>) {
    this._handlers.set(method, handler);
  }

  private async _handleWireMessage(incoming: WireMessage): Promise<void> {
    const isBatch = Array.isArray(incoming);
    // @ts-ignore
    const messages: Array<ProtocolMessage> = isBatch ? incoming : [incoming];

    const responses = (await Promise.all(messages.map(msg => this._handleProtocolMessage(msg)))).filter(x => x !== null);
    const outgoing = isBatch ? responses : responses[0];

    outgoing && this._transport.sendMessage(outgoing as WireMessage);
  }

  private async _handleProtocolMessage(msg: ProtocolMessage): Promise<ProtocolMessage | null> {
    // @ts-ignore
    if (!!msg.method) {
      // Request
      const { id, method, params } = msg as RequestMessage;
      const handler = this._handlers.get(method);
      if (!handler) {
        return id != null ? {
          id,
          result: null,
          error: {
            code: 0,
            message: `No handler for method ${method}`,
            data: null,
          }
        } : null;
      }

      const result = await handler(params, this);
      return id != null ? {
        id,
        result,
        error: null,
      } : null;
    } else {
      // Response
      const { id, result, error } = msg as ResponseMessage;
      const funcs = this._pending.get(id);
      if (funcs) {
        if (error !== null) {
          funcs[1](new Error(error.message));
        } else {
          funcs[0](result);
        }
      }

      return null;
    }
  }


  private _getNextId(): number {
    const id = this._nextId;
    this._nextId += 1;
    return id;
  }

  private _transport: Transport;
  private _nextId: number;
  private _pending: Map<number, PromiseFunctions>;
  private _handlers: Map<string, Handler<any,any>>;
}

export function createWebSocketTransport(ws: WebSocket): Transport {
  return {
    sendMessage: (msg: WireMessage) => {
      ws.send(JSON.stringify(msg));
    },
    onMessage: (cb: (msg: WireMessage) => void) => {
      ws.addEventListener('message', event => {
        cb(JSON.parse(event.data));
      });
    },
  };
}
