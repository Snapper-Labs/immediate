from typing import Dict, List, Optional, TYPE_CHECKING, Callable
from dataclasses import dataclass

from mypy_utils import unwrap
from host_tree import HostNode
from node import Node, Properties

@dataclass
class InmemHostNodeData:
    kind: str
    properties: Properties

InmemHostNode = Node[InmemHostNodeData]

class InmemHostTree:
    def __init__(self):
        self.nodes: Dict[HostNode,InmemHostNode] = {}
        self.next_node_id = 0

    def begin_frame(self):
        pass

    def end_frame(self):
        pass

    def create_node(self, kind: str) -> HostNode:
        id = self._get_next_node_id()

        node = Node(InmemHostNodeData(kind=kind, properties={}))
        self.nodes[id] = node
        return id

    def destroy_node(self, node: HostNode):
        del self.nodes[node]

    def update_node_properties(self, node: HostNode, props: Properties):
        inmemnode = self.nodes[node]
        inmemnode.data.properties = props

    def remove_child_at(self, node: HostNode, index: int):
        inmemnode = self.nodes[node]
        inmemnode.remove_child_at(index)

    def insert_child_at(self, parent: HostNode, child: HostNode, index: int):
        inmemparent = self.nodes[parent]
        inmemchild = self.nodes[child]
        inmemparent.insert_child_at(inmemchild, index)

    def get_children(self, parent: HostNode) -> List[HostNode]:
        inmemparent = self.nodes[parent]
        inmem_children = inmemparent.children()
        return [unwrap(self._get_host_node(child)) for child in inmem_children]

    def trigger_event(self):
        pass

    def _get_host_node(self, child: InmemHostNode) -> Optional[HostNode]:
        for k in self.nodes:
            if self.nodes[k] == child:
                return k
        
        return None

    def _get_next_node_id(self) -> int:
        id = self.next_node_id
        self.next_node_id += 1

        return id


if TYPE_CHECKING:
    from host_tree import HostTree
    x: Callable[[],HostTree] = InmemHostTree

