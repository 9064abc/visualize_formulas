import React from 'react';
import { Handle, Position } from 'reactflow';
import { InlineMath } from 'react-katex';

function CustomNode({ data }) {
  
  // App.js から渡された表示タイプを取得
  const { label, formula, nodeContentType } = data;

  return (
    <div className="custom-node-content">
      <Handle type="target" position={Position.Top} />
      {nodeContentType === 'label' && (
        <div className="node-label-only">{label}</div>
      )}

      {nodeContentType === 'formula' && formula && (
        <div className="node-formula-only">
          <InlineMath math={formula} />
        </div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CustomNode;