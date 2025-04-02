import React, { useState } from 'react';
import { SubClass, SkillNode } from '../types/ascendancy';

// Import backgrounds
import Amazon from "../assets/Amazon.png";
import Bloodmage from "../assets/Bloodmage.png";
import CHAYULA from "../assets/CHAYULA.png";
import Chronomancer from "../assets/Chronomancer.png";
import DEADEYE from "../assets/DEADEYE.png";
import GemlingLegionnaire from "../assets/GemlingLegionnaire.png";
import INFERNALIST from "../assets/INFERNALIST.png";
import INVOKER from "../assets/INVOKER.png";
import Lich from "../assets/Lich.png";
import PATHFINDER from "../assets/PATHFINDER.png";
import Ritualist from "../assets/Ritualist.png";
import SmithOfKitava from "../assets/SmithofKitava.png";
import Stormweaver from "../assets/Stormweaver.png";
import Tactician from "../assets/Tactician.png";
import Titan from "../assets/Titan.png";
import Warbringer from "../assets/Warbringer.png";
import Witchhunter from "../assets/Witchhunter.png";

export const backgroundImages: Record<string, string> = {
  Amazon,
  "Blood Mage": Bloodmage,
  Chayula: CHAYULA,
  Chronomancer,
  Deadeye: DEADEYE,
  "Gemling Legionnaire": GemlingLegionnaire,
  Infernalist: INFERNALIST,
  Invoker: INVOKER,
  Lich,
  Pathfinder: PATHFINDER,
  Ritualist,
  "Smith Of Kitava": SmithOfKitava,
  Stormweaver,
  Tactician,
  Titan,
  Warbringer,
  Witchhunter,
};

interface SkillTreeProps {
  subClass: SubClass;
}

export const SkillTree: React.FC<SkillTreeProps> = ({ subClass }) => {
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);

  const getNodeImage = (subClassName: string, nodeName: string): string => {
    const folder = subClassName.replace(/\s+/g, '');
    const file = nodeName.replace(/\s+/g, '') + '.png';
    try {
      return new URL(`../assets/nodes/${folder}/${file}`, import.meta.url).href;
    } catch {
      return '';
    }
  };

  return (
<div className="relative w-full max-w-[750px] h-auto md:h-[700px] bg-cover bg-center rounded-lg border border-slate-800 overflow-visible"
  style={{ backgroundImage: `url(${backgroundImages[subClass.name]})` }}>

      <div className="absolute inset-0 bg-black/10 rounded-lg" />

      <div className="relative z-10 w-full h-full">
        <h2 className="text-2xl font-bold text-amber-500 absolute top-4 left-4">
          {subClass.name}
        </h2>

        {subClass.nodes.map((node) => (
          <div
            key={node.id}
            className="absolute w-7 h-7 rounded-full bg-transparent border-2 border-amber-500 cursor-pointer hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition-all"
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
          />
        ))}

        {hoveredNode && (
          <div
            className="absolute z-20"
            style={{
              left: `${hoveredNode.position.x + 5}%`,
              top: `${hoveredNode.position.y}%`,
            }}
          >
            <img
              src={getNodeImage(subClass.name, hoveredNode.name)}
              alt={hoveredNode.name}
              className="max-w-[200px] h-auto rounded-lg shadow-xl border border-slate-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};
