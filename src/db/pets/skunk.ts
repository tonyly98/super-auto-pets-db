import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function skunkAbility(level: number): Ability {
  const percentage = level == 3 ? 100 : level * 33;
  return {
    description: `Start of battle: Reduce the highest Health enemy by ${percentage}%.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "None",
    },
    effect: {
      kind: "ReduceHealth",
      target: {
        kind: "HighestHealthEnemy",
      },
      percentage,
    },
  };
}

export const skunk: Pet = {
  ...getPetIdentifiers("Skunk"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F9A8}",
  },
  tier: 4,
  baseAttack: 3,
  baseHealth: 5,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: skunkAbility(1),
  level2Ability: skunkAbility(2),
  level3Ability: skunkAbility(3),
};