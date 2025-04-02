import React, { useState, useEffect } from "react";
import { SkillNode } from "../types/ascendancy";

interface DragNodeEditorProps {
  background: string;
  nodes: SkillNode[];
  onSave: (nodes: SkillNode[]) => void;
}

export const DragNodeEditor: React.FC<DragNodeEditorProps> = ({ background, nodes, onSave }) => {
  const [localNodes, setLocalNodes] = useState(nodes);
  const [imageSizes, setImageSizes] = useState<Record<string, number>>({});

  useEffect(() => {
    nodes.forEach((node) => {
      const img = new Image();
      const nodeName = node.name.replace(/\s+/g, "");
      img.src = new URL(`../assets/nodes/${node.id.split("-")[0]}/${nodeName}.png`, import.meta.url).href;
      img.onload = () => {
        setImageSizes((prev) => ({ ...prev, [node.id]: img.width }));
      };
    });
  }, [nodes]);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    const container = e.currentTarget.offsetParent as HTMLDivElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
const offsetX = e.clientX - rect.left;
const offsetY = e.clientY - rect.top;

// Adjust for the center of the button (assuming width = height)

const x = ((offsetX) / rect.width) * 100;
const y = ((offsetY) / rect.height) * 100;


    setLocalNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, position: { x, y } } : n))
    );
  };

  return (
<div
  className="relative w-full max-w-[750px] h-auto md:h-[700px] bg-cover bg-center rounded-lg border border-slate-800 overflow-visible"
  style={{ backgroundImage: `url(${background})` }}
>


      {localNodes.map((node) => {
        const baseSize = 24; // smaller node buttons
        const width = imageSizes[node.id] || baseSize;
        const scale = Math.min(1.5, Math.max(0.8, baseSize / width));
        const size = baseSize * scale;

        return (
          <div
            key={node.id}
            className="absolute bg-amber-500 rounded-full border border-amber-400 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20 transition-all"
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
              transform: "translate(-50%, -50%)",
              width: `${size}px`,
              height: `${size}px`,
              zIndex: 10,
            }}
            draggable
            onDragEnd={(e) => handleDrag(e, node.id)}
            title={`${node.name} (${node.position.x.toFixed(1)}%, ${node.position.y.toFixed(1)}%)`}
          ></div>
        );
      })}

      <div className="absolute bottom-4 left-4 p-4 bg-slate-900/80 rounded-lg z-20">
        <button
          onClick={() => {
            console.log("Updated Node Data:", localNodes);
            navigator.clipboard.writeText(JSON.stringify(localNodes, null, 2));
            alert("Copied node JSON to clipboard!");
            onSave(localNodes);
          }}
          className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded"
        >
          Copy Node JSON
        </button>
      </div>
    </div>
  );
};
