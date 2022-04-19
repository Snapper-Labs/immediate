from typing import Callable

from renderer import Renderer
from host_tree import HostTree, HostNode
from node import ShadowNode

RenderFunc = Callable[[Renderer], None]

def update(host_tree: HostTree, host_node: HostNode, shadow_node: ShadowNode,
        render: RenderFunc):
    host_tree.trigger_event()

    renderer = Renderer(shadow_node)
    render(renderer)
    
    host_tree.begin_frame()
    renderer.commit(host_tree, host_node)
    host_tree.end_frame()
