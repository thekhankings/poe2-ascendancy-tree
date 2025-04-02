import { useState } from 'react';
import { baseClasses } from './data/ascendancies';
import { AscendancyGrid } from './components/AscendancyGrid';
import { ComparisonView } from './components/ComparisonView';
import { BaseClass, SubClass } from './types/ascendancy';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [selectedBaseClass, setSelectedBaseClass] = useState<BaseClass | null>(null);
  const [selectedClass, setSelectedClass] = useState<SubClass | null>(null);

  const handleSelectClass = (baseClass: BaseClass) => {
    setSelectedBaseClass(baseClass);
  };

  const handleSelectSubClass = (subClass: SubClass) => {
    setSelectedClass(subClass);
    setSelectedBaseClass(null);
  };

  const handleBack = () => {
    setSelectedBaseClass(null);
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {(selectedBaseClass || selectedClass) && (
              <button
                onClick={handleBack}
                className="flex items-center text-slate-300 hover:text-white mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            )}
            <h1 className="text-2xl font-bold text-amber-500">
              Path of Exile 2 Ascendancy Explorer
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        {!selectedBaseClass && !selectedClass ? (
          <AscendancyGrid
            baseClasses={baseClasses}
            onSelectClass={handleSelectClass}
          />
        ) : (
          <div>
            {selectedBaseClass && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-amber-500 mb-4">Choose Ascendancy</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {selectedBaseClass.ascendancies.map((subClass) => (
                    <button
                      key={`${selectedBaseClass.name}-${subClass.name}`}
                      onClick={() => handleSelectSubClass(subClass)}
                      className="p-4 rounded-lg text-center transition-colors bg-slate-800 hover:bg-slate-700 text-white"
                    >
                      <div className="font-semibold">{subClass.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {selectedClass && (
              <ComparisonView leftClass={selectedClass} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
