import { Handle, Position } from 'reactflow';

function TextNode({ data }) {
  return (
    <div style={{
      width: 200,
      borderRadius: 8,
      overflow: 'hidden',
      background: '#ffffff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      
      {/* Header */}
      <div style={{
        backgroundColor: '#5fd1c2',
        padding: '6px 10px',
        fontWeight: 'bold',
        fontSize: 13
      }}>
        Send Message
      </div>

      {/* Body */}
      <div style={{
        padding: 10,
        fontSize: 14
      }}>
        {data.label}
      </div>

      {/* Handles */}
      <Handle
        type="target"
        position={Position.Top}
      />

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}

export default TextNode;