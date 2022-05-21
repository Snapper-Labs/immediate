import {Peer} from './rpc';

const SPECIAL_ATTRIBUTES = new Set([
  'textContent',
  'value',
]);

type PropertiesUpdate = {
  newAttributes: Array<{key: string, value: string}>;
  removedAttributes: Array<string>;
  newEventHandlers: Array<string>;
  removedEventHandlers: Array<string>;
}

// returns a "cleanup" function.
export function createDocumentServer(peer: Peer): () => void {
  let elements: Map<number, HTMLElement> = new Map();
  const root = document.createElement('div');
  document.body.appendChild(root);
  elements.set(-1, root);

  const cleanup = () => {
    console.log(`CLEANING UP!!!`);
    document.body.removeChild(root)
  };

  peer.setHandler('createNode', async ({ kind, id }: { kind: string, id: number }) => {
    const elem = document.createElement(kind);
    elem.id = `${id}`;
    elements.set(id, elem);
  });

  peer.setHandler('destroyNode', async ({ id }: { id: number }) => {
    elements.delete(id);
  });

  peer.setHandler('updateNodeProperties', async ({ id, propertiesUpdate }: { id: number, propertiesUpdate: PropertiesUpdate }) => {
    const elem = elements.get(id);
    if (elem) {
      propertiesUpdate.newAttributes.forEach(kv => {
        const k = kv.key;
        const val = kv.value;

        if (SPECIAL_ATTRIBUTES.has(k)) {
          // @ts-ignore
          elem[k] = val;
          return;
        }

        elem.setAttribute(k, val);
      })

      propertiesUpdate.removedAttributes.forEach(k => {
        elem.removeAttribute(k)
      });

      propertiesUpdate.newEventHandlers.forEach(kind => {
        const evtListener = (event: Event) => {
          const evt = {
            ...extractObject(event),
          };
          peer.notify('handleEvent', { kind, target: id, event: evt });
        }

        elem.addEventListener(kind, evtListener);
        // @ts-ignore
        elem._immediate_evtListener = evtListener
      });

      propertiesUpdate.removedEventHandlers.forEach(kind => {
        // @ts-ignore
        const evtListener = elem._immediate_evtListener;
        if (evtListener) {
          elem.removeEventListener(kind, evtListener);
        }
      });
    }
  });

  peer.setHandler('removeChildAt', async ({ parentId, index }: { parentId: number, index: number }) => {
    const elemParent = elements.get(parentId);
    if (elemParent) {
      elemParent && elemParent.removeChild(elemParent.children.item(index)!)
    }
  });

  peer.setHandler('insertChildAt', async ({ parentId, childId, index }: { parentId: number, childId: number, index: number }) => {
    const elemParent = elements.get(parentId);
    const elemChild = elements.get(childId);
    if (elemParent && elemChild) {
      elemParent.insertBefore(elemChild, elemParent.children.item(index));
    }
  });

  peer.setHandler('alert', async ({ message }: { message: string }) => {
    alert(message);
  });

  return cleanup;
}

function extractObject(objc: Object, depth=0, maxDepth=2) {
  // change max_depth to see more levels, for a touch event, 2 is good
  if (depth > maxDepth)
    return 'Object';

  const obj = {};
  for (let key in objc) {
    // @ts-ignore
    let value = objc[key];
    if (value instanceof Node) {
      // @ts-ignore
      obj[`${key}Value`] = value.value;

      value = 'Node'
    }
    else if (value instanceof Window)
      value = 'Window';
    else if (value instanceof Object)
      value = extractObject(value, depth+1, maxDepth);

    // @ts-ignore
    obj[key] = value;
  }

  return obj
}
