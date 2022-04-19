import {Peer} from './rpc';

const SPECIAL_ATTRIBUTES = new Set([
  'textContent',
]);

const HANDLER_ATTRIBUTES = new Set([
  'onclick',
  'oninput',
  'onload',
]);

export function createDocumentServer(peer: Peer) {
  let elements: Map<number, HTMLElement> = new Map();
  elements.set(-1, document.body);

  peer.setHandler('createNode', async ({ kind, id }: { kind: string, id: number }) => {
    const elem = document.createElement(kind);
    elem.id = `${id}`;
    elements.set(id, elem);
  });

  peer.setHandler('destroyNode', async ({ id }: { id: number }) => {
    elements.delete(id);
  });

  peer.setHandler('updateNodeProperties', async ({ id, properties }: { id: number, properties: { [key: string]: string | null } }) => {
    const elem = elements.get(id);
    if (elem) {
      Object.keys(properties).forEach(k => {
        const val = properties[k]

        if (SPECIAL_ATTRIBUTES.has(k)) {
          // @ts-ignore
          elem[k] = val;
          return;
        }

        if (HANDLER_ATTRIBUTES.has(k)) {
          const kind = k.substring(2);
          elem.addEventListener(kind, (event: Event) => {
            console.log(`handling event: ${kind}; ${event}`);
            const evt = {
              ...extractObject(event),
              // @ts-ignore
              targetValue: event.target.value,
            };
            peer.notify('handleEvent', { kind, target: id, event: evt });
          });
          return;
        }

        if (val == null) {
          elem.removeAttribute(k);
        } else {
          console.log(`setAttribute: ${k}`);
          elem.setAttribute(k, val);
        }
      });
    }
  });

  peer.setHandler('removeChildAt', async ({ parentId, index }: { parentId: number, index: number }) => {
    const elemParent = elements.get(parentId);
    elemParent && elemParent.removeChild(elemParent.children.item(index)!)
  });

  peer.setHandler('insertChildAt', async ({ parentId, childId, index }: { parentId: number, childId: number, index: number }) => {
    const elemParent = elements.get(parentId);
    const elemChild = elements.get(childId);
    elemParent && elemChild && elemParent.insertBefore(elemChild, elemParent.children.item(index+1));
  });

  peer.setHandler('alert', async ({ message }: { message: string }) => {
    alert(message);
  });
}

function extractObject(objc: Object, depth=0, maxDepth=2) {
  // change max_depth to see more levels, for a touch event, 2 is good
  if (depth > maxDepth)
    return 'Object';

  const obj = {};
  for (let key in objc) {
    // @ts-ignore
    let value = objc[key];
    if (value instanceof Node)
      value = 'Node'
    else if (value instanceof Window)
      value = 'Window';
    else if (value instanceof Object)
      value = extractObject(value, depth+1, maxDepth);

    // @ts-ignore
    obj[key] = value;
  }

  return obj
}
