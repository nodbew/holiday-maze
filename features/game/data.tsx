import { Item } from "./types/inventory";
import { createSituation, NAVIGATION_TARGET } from "@/features/game/lib/situationUtils";
import { Situation } from "./types/situation";

export type ItemNames = "タケコプター";
export const ITEMS = {
  タケコプター: { name: "タケコプター", show: true, stackable: true },
} as const satisfies Record<ItemNames, Item<ItemNames>>;

export type SituationNames = "Start" | "Ending";
export const SITUATIONS = {
  Start: createSituation("You woke up! Which path will you take?", [
    {
      type: "next",
      description: "Left",
      navigate: "Ending",
      addItems: [{ name: "タケコプター", show: true, stackable: false }],
    },
    {
      type: "end",
      message: "You made it!",
      description: "Right",
      navigate: NAVIGATION_TARGET.SUCCESS,
      //addItems: [{ name: "どこでもドア", show: true, stackable: false }],
    },
  ]),
  Ending: createSituation(
    "You advance, and you find three paths. which one will you take?",
    [
      {
        type: "next",
        description: "Left",
        requiredItems: ["タケコプター"],
        navigate: "Start",
      },
      {
        type: "end",
        description: "Middle",
        message: "Well done!",
        navigate: NAVIGATION_TARGET.SUCCESS,
      },
      {
        type: "end",
        description: "Right",
        message: "Oops... You fell into a trap!",
        navigate: NAVIGATION_TARGET.FAILURE,
      },
    ]
  ),
} as const satisfies Record<SituationNames, Situation>;
