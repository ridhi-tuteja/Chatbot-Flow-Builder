function SettingsPanel({ selectedNode, setNodes, setSelectedNodeId }) {

  const handleChange = (event) => {
    const value = event.target.value;

    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, label: value } }
          : node
      )
    );
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => setSelectedNodeId(null)}
        style={{
          marginBottom: 20,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 14,
          color: '#4f46e5'
        }}
      >
        ← Back
      </button>

      <h3 style={{ marginBottom: 15 }}>Message</h3>

      <label
        style={{
          fontSize: 13,
          color: '#6b7280',
          marginBottom: 6,
          display: 'block'
        }}
      >
        Text
      </label>

      <input
        type="text"
        value={selectedNode.data.label}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '8px 10px',
          borderRadius: 6,
          border: '1px solid #d1d5db',
          outline: 'none'
        }}
      />
    </div>
  );
}

export default SettingsPanel;