(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // rpc.ts
  var Peer = class {
    constructor(transport) {
      this._transport = transport;
      this._nextId = 0;
      this._pending = /* @__PURE__ */ new Map();
      this._handlers = /* @__PURE__ */ new Map();
    }
    start() {
      this._transport.onMessage((msg) => this._handleWireMessage(msg));
    }
    request(method, params) {
      const id = this._getNextId();
      const message = {
        id,
        method,
        params
      };
      const promise = new Promise((resolve, reject) => {
        this._pending.set(id, [resolve, reject]);
        this._transport.sendMessage(message);
      });
      return promise;
    }
    notify(method, params) {
      return __async(this, null, function* () {
        const message = {
          id: null,
          method,
          params
        };
        this._transport.sendMessage(message);
      });
    }
    setHandler(method, handler) {
      this._handlers.set(method, handler);
    }
    _handleWireMessage(incoming) {
      return __async(this, null, function* () {
        const isBatch = Array.isArray(incoming);
        const messages = isBatch ? incoming : [incoming];
        const responses = (yield Promise.all(messages.map((msg) => this._handleProtocolMessage(msg)))).filter((x) => x !== null);
        const outgoing = isBatch ? responses : responses[0];
        outgoing && this._transport.sendMessage(outgoing);
      });
    }
    _handleProtocolMessage(msg) {
      return __async(this, null, function* () {
        if (!!msg.method) {
          const { id, method, params } = msg;
          const handler = this._handlers.get(method);
          if (!handler) {
            return id != null ? {
              id,
              result: null,
              error: {
                code: 0,
                message: `No handler for method ${method}`,
                data: null
              }
            } : null;
          }
          const result = yield handler(params, this);
          return id != null ? {
            id,
            result,
            error: null
          } : null;
        } else {
          const { id, result, error } = msg;
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
      });
    }
    _getNextId() {
      const id = this._nextId;
      this._nextId += 1;
      return id;
    }
  };
  function createWebSocketTransport(ws) {
    return {
      sendMessage: (msg) => {
        ws.send(JSON.stringify(msg));
      },
      onMessage: (cb) => {
        ws.addEventListener("message", (event) => {
          cb(JSON.parse(event.data));
        });
      }
    };
  }

  // server.ts
  var SPECIAL_ATTRIBUTES = /* @__PURE__ */ new Set([
    "textContent",
    "value"
  ]);
  function createDocumentServer(peer) {
    let elements = /* @__PURE__ */ new Map();
    elements.set(-1, document.body);
    peer.setHandler("createNode", (_0) => __async(this, [_0], function* ({ kind, id }) {
      const elem = document.createElement(kind);
      elem.id = `${id}`;
      elements.set(id, elem);
    }));
    peer.setHandler("destroyNode", (_0) => __async(this, [_0], function* ({ id }) {
      elements.delete(id);
    }));
    peer.setHandler("updateNodeProperties", (_0) => __async(this, [_0], function* ({ id, propertiesUpdate }) {
      const elem = elements.get(id);
      if (elem) {
        propertiesUpdate.newAttributes.forEach((kv) => {
          const k = kv.key;
          const val = kv.value;
          if (SPECIAL_ATTRIBUTES.has(k)) {
            elem[k] = val;
            return;
          }
          elem.setAttribute(k, val);
        });
        propertiesUpdate.removedAttributes.forEach((k) => {
          elem.removeAttribute(k);
        });
        propertiesUpdate.newEventHandlers.forEach((kind) => {
          const evtListener = (event) => {
            const evt = __spreadValues({}, extractObject(event));
            peer.notify("handleEvent", { kind, target: id, event: evt });
          };
          elem.addEventListener(kind, evtListener);
          elem._immediate_evtListener = evtListener;
        });
        propertiesUpdate.removedEventHandlers.forEach((kind) => {
          const evtListener = elem._immediate_evtListener;
          if (evtListener) {
            elem.removeEventListener(kind, evtListener);
          }
        });
      }
    }));
    peer.setHandler("removeChildAt", (_0) => __async(this, [_0], function* ({ parentId, index }) {
      const elemParent = elements.get(parentId);
      elemParent && elemParent.removeChild(elemParent.children.item(index));
    }));
    peer.setHandler("insertChildAt", (_0) => __async(this, [_0], function* ({ parentId, childId, index }) {
      const elemParent = elements.get(parentId);
      const elemChild = elements.get(childId);
      elemParent && elemChild && elemParent.insertBefore(elemChild, elemParent.children.item(index + 1));
    }));
    peer.setHandler("alert", (_0) => __async(this, [_0], function* ({ message }) {
      alert(message);
    }));
  }
  function extractObject(objc, depth = 0, maxDepth = 2) {
    if (depth > maxDepth)
      return "Object";
    const obj = {};
    for (let key in objc) {
      let value = objc[key];
      if (value instanceof Node) {
        obj[`${key}Value`] = value.value;
        value = "Node";
      } else if (value instanceof Window)
        value = "Window";
      else if (value instanceof Object)
        value = extractObject(value, depth + 1, maxDepth);
      obj[key] = value;
    }
    return obj;
  }

  // main.ts
  function serveWebSocket(ws) {
    const peer = new Peer(createWebSocketTransport(ws));
    createDocumentServer(peer);
    peer.start();
  }
  function setup(endpoint) {
    const socket = new WebSocket(endpoint);
    socket.addEventListener("open", function() {
      serveWebSocket(socket);
    });
  }
  setup("ws://localhost:8080/ws");
})();
