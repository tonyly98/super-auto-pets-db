import { Ability, Pet, Trigger } from "..";
import { getPetIdentifiers } from "../database";

export const cricketSummoned: Pet = {
  ...getPetIdentifiers("Zombie Cricket"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F997}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
};

function cricketAbility(level: number): Ability {
  return {
    description: `Faint: Summon a ${level}/${level} Cricket`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...cricketSummoned,
        baseAttack: level,
        baseHealth: level,
      },
      team: "Friendly",
    },
  };
}

export const cricket: Pet = {
  ...getPetIdentifiers("Cricket"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F997}",
  },
  tier: 1,
  baseAttack: 1,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: cricketAbility(1),
  level2Ability: cricketAbility(2),
  level3Ability: cricketAbility(3),
};