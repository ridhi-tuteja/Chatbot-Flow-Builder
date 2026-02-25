function NodesPanel() {
  const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

  return (
    <div style={{
      padding: 10,
      borderRight: '1px solid #ccc',
      width: 200
    }}>
      <div
        onDragStart={(event) => onDragStart(event, 'textNode')}
        draggable
        style={{
          padding: 10,
          border: '1px solid black',
          borderRadius: 5,
          cursor: 'grab'
        }}
      >
        Message Node
      </div>
    </div>
  );
}

export default NodesPanel;