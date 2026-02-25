import { useCallback, useState } from 'react';

import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow
} from 'reactflow';
import 'reactflow/dist/style.css';

import TextNode from './nodes/Textnode';
import NodesPanel from './components/NodesPanel';
import SettingsPanel from './components/SettingsPanel';

const nodeTypes = {
  textNode: TextNode
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const selectedNode = nodes.find(node => node.id === selectedNodeId);

  const { project } = useReactFlow();

  // Node click handler
  const onNodeClick = (event, node) => {
  setSelectedNodeId(node.id);
};

  // Restrict one outgoing edge per source
  const onConnect = useCallback((params) => {
    const sourceHasEdge = edges.some(
      (edge) => edge.source === params.source
    );

    if (sourceHasEdge) {
      alert("Source already connected!");
      return;
    }

    setEdges((eds) => addEdge(params, eds));
  }, [edges]);

  // Drag over
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // Drop new node
  const onDrop = useCallback((event) => {
  event.preventDefault();

  const type = event.dataTransfer.getData('application/reactflow');
  if (!type) return;

  const bounds = event.currentTarget.getBoundingClientRect();

  const position = project({
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top,
  });

  const newNode = {
    id: `${+new Date()}`,
    type,
    position,
    data: { label: 'Text Message' },
  };

  console.log("Dropped!");

  setNodes((nds) => nds.concat(newNode));
}, [project]);

  // Save validation
  const handleSave = () => {
    if (nodes.length <= 1) {
      alert("Flow Saved!");
      return;
    }

    const nodesWithoutIncoming = nodes.filter((node) =>
      !edges.some((edge) => edge.target === node.id)
    );

    if (nodesWithoutIncoming.length > 1) {
      alert("Error: More than one node has empty target handles");
    } else {
      alert("Flow Saved Successfully!");
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>

      {selectedNode ? (
        
        <SettingsPanel
        selectedNode={selectedNode}
        setNodes={setNodes}
        setSelectedNodeId={setSelectedNodeId}
      />
      ) : (
        <NodesPanel />
      )}

      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeClick={onNodeClick}
        >
          <Background />
        </ReactFlow>

        <button
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '8px 16px',
          cursor: 'pointer'
        }}
        onClick={handleSave}
      >
        Save Flow
      </button>
      </div>
    </div>
  );
}

export default App;