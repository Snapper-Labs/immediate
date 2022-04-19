from __future__ import annotations

from typing import TypeVar, Generic, Optional, List, Dict, Any
from dataclasses import dataclass

from mypy_utils import unwrap

T = TypeVar('T')

class Node(Generic[T]):
    def __init__(self, value: T):
        self.data = value
        self.first_child: Optional[Node[T]] = None
        self.next_sibling: Optional[Node[T]] = None

    def children(self) -> List[Node[T]]:
        r = []
        curr = self.first_child
        while curr is not None:
            r.append(curr)
            curr = curr.next_sibling

        return r

    def remove_child_at(self, index: int):
        children = self.children()
        if index < 0 or index >= len(children):
            raise IndexError

        if index == 0:
            self.first_child = unwrap(self.first_child).next_sibling
        else:
            children[index-1].next_sibling = children[index].next_sibling

    def insert_child_at(self, child: Node[T], index: int):
        children = self.children()

        if index < 0 or index > len(children):
            raise IndexError

        if index == 0:
            child.next_sibling = self.first_child
            self.first_child = child
        else:
            child.next_sibling = children[index-1].next_sibling
            children[index-1].next_sibling = child

    def append_child(self, child: Node[T]):
        last_child = self.last_child()
        if last_child is None:
            self.first_child = child
        else:
            last_child.next_sibling = child

    def has_child(self, node: Node[T]) -> bool:
        children = self.children()
        return any([child == node for child in children])

    def last_child(self) -> Optional[Node[T]]:
        if self.first_child is None:
            return None

        curr = self.first_child
        while curr is not None:
            if curr.next_sibling is None:
                return curr

            curr = curr.next_sibling


Properties = Dict[str, Any]

@dataclass
class RenderNodeData:
    key: str
    kind: str
    properties: Properties

RenderNode = Node[RenderNodeData]

ShadowNodeData = RenderNodeData
ShadowNode = Node[ShadowNodeData]

def create_shadow_node_for_render_node(render_node: RenderNode):
    return ShadowNode(
            ShadowNodeData(
                key=render_node.data.key,
                kind=render_node.data.kind,
                properties=render_node.data.properties,
            )
    )
