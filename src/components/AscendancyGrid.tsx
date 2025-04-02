import React from 'react';
import { BaseClass } from '../types/ascendancy';
import * as Icons from 'lucide-react';

interface AscendancyGridProps {
  baseClasses: BaseClass[];
  onSelectClass: (baseClass: BaseClass) => void;
}

export const AscendancyGrid: React.FC<AscendancyGridProps> = ({ baseClasses, onSelectClass }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {baseClasses.map((baseClass) => {
        const IconComponent = Icons[baseClass.icon as keyof typeof Icons] || Icons.X;
        
        return (
          <button
            key={baseClass.name}
            onClick={() => onSelectClass(baseClass)}
            className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600 group"
          >
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-4 group-hover:bg-slate-600">
              <IconComponent className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-amber-500">{baseClass.name}</h3>
            <div className="mt-2 space-y-1">
              {baseClass.ascendancies.map((ascendancy) => (
                <p key={ascendancy.name} className="text-slate-300 text-sm">
                  {ascendancy.name}
                </p>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
};