import unittest

from node import RenderNode, RenderNodeData, ShadowNode, ShadowNodeData
from renderer import Renderer
from inmem_host_tree import InmemHostTree
from update import update

class TestImmpy(unittest.TestCase):
    def test_simple(self):
        def render(ui: Renderer):
            ui.render(RenderNode(
                RenderNodeData(key="div",kind="div",properties={ "hello":
                    "world" })))

        host_tree = InmemHostTree()
        host_root = host_tree.create_node("root")
        shadow_root = ShadowNode(ShadowNodeData(key="root",kind="root",properties={}))

        update(host_tree, host_root, shadow_root, render)

        self.assertEqual(len(host_tree.get_children(host_root)), 1)


if __name__ == '__main__':
    unittest.main()
