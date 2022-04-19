from typing import Dict, List, Optional

from mypy_utils import unwrap
from host_tree import HostTree, HostNode
from node import (
        ShadowNode, RenderNode, RenderNodeData,
        create_shadow_node_for_render_node
)

class Renderer:
    def __init__(self, shadow_root: ShadowNode):
        self.shadow_stack: List[Optional[ShadowNode]] = [shadow_root]

        render_root = RenderNode(
                RenderNodeData(key="_root_", kind="_root_", properties={})
        )

        self.render_stack: List[Optional[RenderNode]] = [render_root]

        self.reconciliation_state: Dict[ShadowNode, Optional[RenderNode]] = {
                shadow_root: render_root
        }

    def render(self, render_node: RenderNode) -> Optional[ShadowNode]:
        shadow_parent = self.shadow_stack[-1]
        render_parent = self.render_stack[-1]

        unwrap(render_parent).append_child(render_node)

        if shadow_parent is None:
            return None
        else:
            match_index = self._match(shadow_parent, render_node)
            if match_index >= 0:
                shadow_child = shadow_parent.children()[match_index]
                self.reconciliation_state[shadow_child] = render_node
                return shadow_child

        return None

    def commit(self, host_tree: HostTree, host_node: HostNode):
        if len(self.shadow_stack) != 1 or len(self.render_stack) != 1:
            raise Exception

        shadow_root = unwrap(self.shadow_stack[-1])
        self._commit_at(shadow_root, host_node, host_tree)

    def _commit_at(self, shadow_node: ShadowNode, host_node: HostNode,
            host_tree: HostTree):
        render_node = self.reconciliation_state[shadow_node]
        if render_node is None:
            raise Exception

        shadow_node.data.properties = render_node.data.properties
        host_tree.update_node_properties(host_node, shadow_node.data.properties)

        shadow_children = shadow_node.children()
        for index, child in enumerate(shadow_children):
            match = self.reconciliation_state.get(child, None)
            if match is None:
                shadow_node.remove_child_at(index)
                host_tree.remove_child_at(host_node, index)
                host_tree.destroy_node(host_node)


        render_children = render_node.children()
        for index, child in enumerate(render_children):
            matched = self._get_match_for_render_node(child)
            if matched is None:
                new_shadow_node = create_shadow_node_for_render_node(child)

                self.reconciliation_state[new_shadow_node] = child
                shadow_node.insert_child_at(new_shadow_node, index)

                new_host_node = host_tree.create_node(child.data.kind)
                host_tree.insert_child_at(host_node, new_host_node, index)


        shadow_children = shadow_node.children()
        host_children = host_tree.get_children(host_node)
        if len(shadow_children) != len(host_children):
            raise Exception

        for index, child in enumerate(shadow_children):
            self._commit_at(child, host_children[index], host_tree)

    def _get_match_for_render_node(self, node: RenderNode) -> Optional[ShadowNode]:
        for k in self.reconciliation_state:
            if self.reconciliation_state[k] == node:
                return k

        return None

    def _match(self, shadow_parent: ShadowNode, render_node: RenderNode) -> int:
        children = shadow_parent.children()
        for index, child in enumerate(children):
            match = self.reconciliation_state.get(child, None)
            if match is None and child.data.key == render_node.data.key:
                return index

        return -1
