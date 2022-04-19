from typing import List
from typing_extensions import Protocol

from node import Properties

HostNode = int

class HostTree(Protocol):
    def begin_frame(self):
        ...

    def end_frame(self):
        ...

    def create_node(self, kind: str) -> HostNode:
        ...

    def destroy_node(self, node: HostNode):
        ...

    def update_node_properties(self, node: HostNode, props: Properties):
        ...

    def remove_child_at(self, node: HostNode, index: int):
        ...

    def insert_child_at(self, parent: HostNode, child: HostNode, index: int):
        ...

    def get_children(self, parent: HostNode) -> List[HostNode]:
        ...

    def trigger_event(self):
        ...
