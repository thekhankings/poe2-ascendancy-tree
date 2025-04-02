import React, { useState } from 'react';
import { DragNodeEditor } from './DragNodeEditor';
import { backgroundImages } from './SkillTree';
import { SubClass } from '../types/ascendancy';
import { SkillTree } from './SkillTree';

interface ComparisonViewProps {
  leftClass?: SubClass;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ leftClass }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-[750px] h-[700px] bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden">
        {leftClass && (
          <button
            className="absolute top-2 right-2 bg-amber-600 hover:bg-amber-500 text-white text-sm px-3 py-1 rounded z-20"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'View Mode' : 'Edit Mode'}
          </button>
        )}

        <div className="absolute inset-0 w-full h-full">
          {leftClass ? (
            editMode ? (
              <div className="relative w-full h-full">
                <DragNodeEditor
                  background={backgroundImages[leftClass.name]}
                  nodes={leftClass.nodes}
                  onSave={(updatedNodes) => {
                    console.log("Updated nodes:", updatedNodes);
                  }}
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <SkillTree subClass={leftClass} />
              </div>
            )
          ) : (
            <div className="h-full w-full flex items-center justify-center text-slate-500">
              Select an ascendancy class
            </div>
          )}
        </div>
      </div>
    </div>
  );
};