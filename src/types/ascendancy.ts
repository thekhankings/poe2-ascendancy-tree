export type AscendancyClass = {
  name: string;
  subclasses: SubClass[];
};

export type SubClass = {
  name: string;
  nodes: SkillNode[];
  baseClassName?: string; // Added to track which base class an ascendancy belongs to
};

export type SkillNode = {
  id: string;
  name: string;
  description: string[];
  position: { x: number; y: number };
  connections: string[];
};

export type BaseClass = {
  name: string;
  icon: string;
  ascendancies: SubClass[];
};