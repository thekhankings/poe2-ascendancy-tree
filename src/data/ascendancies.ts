import { BaseClass } from '../types/ascendancy';
import { generateNodesForSubClass } from '../utils/loadNodes';

export const baseClasses: BaseClass[] = [
  {
    name: "Mercenary",
    icon: "Sword",
    ascendancies: [
      {
        name: "Witchhunter",
        nodes: generateNodesForSubClass("Witchhunter")
      },
      {
        name: "Gemling Legionnaire",
        nodes: generateNodesForSubClass("GemlingLegionnaire")
      },
      {
        name: "Tactician",
        nodes: generateNodesForSubClass("Tactician")
      }
    ]
  },
  {
    name: "Monk",
    icon: "Hand",
    ascendancies: [
      {
        name: "Invoker",
        nodes: generateNodesForSubClass("Invoker")
      },
      {
        name: "Chayula",
        nodes: generateNodesForSubClass("Chayula")
      }
    ]
  },
  {
    name: "Ranger",
    icon: "Target",
    ascendancies: [
      {
        name: "Deadeye",
        nodes: generateNodesForSubClass("Deadeye")
      },
      {
        name: "Pathfinder",
        nodes: generateNodesForSubClass("Pathfinder")
      }
    ]
  },
  {
    name: "Sorceress",
    icon: "Wand",
    ascendancies: [
      {
        name: "Stormweaver",
        nodes: generateNodesForSubClass("Stormweaver")
      },
      {
        name: "Chronomancer",
        nodes: generateNodesForSubClass("Chronomancer")
      }
    ]
  },
  {
    name: "Warrior",
    icon: "Shield",
    ascendancies: [
      {
        name: "Warbringer",
        nodes: generateNodesForSubClass("Warbringer")
      },
      {
        name: "Titan",
        nodes: generateNodesForSubClass("Titan")
      },
      {
        name: "Smith Of Kitava",
        nodes: generateNodesForSubClass("SmithOfKitava")
      }
    ]
  },
  {
    name: "Witch",
    icon: "Skull",
    ascendancies: [
      {
        name: "Blood Mage",
        nodes: generateNodesForSubClass("Bloodmage")
      },
      {
        name: "Infernalist",
        nodes: generateNodesForSubClass("Infernalist")
      },
      {
        name: "Lich",
        nodes: generateNodesForSubClass("Lich")
      }
    ]
  },
  {
    name: "Huntress",
    icon: "Bow",
    ascendancies: [
      {
        name: "Ritualist",
        nodes: generateNodesForSubClass("Ritualist")
      },
      {
        name: "Amazon",
        nodes: generateNodesForSubClass("Amazon")
      }
    ]
  }
];
