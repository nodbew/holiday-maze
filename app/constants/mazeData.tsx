import { Item, Situation } from "../types/situation";
import { createSituation, NAVIGATION_TARGET } from "@/lib/situationUtils";

export const ITEMS = {
  タケコプター: { name: "タケコプター", show: true, stackable: true },
} as const satisfies Record<string, Item>;

export type SituationNames = "Start";
export const SITUATIONS = {
  Start: createSituation("You woke up! Which path will you take?", [
    {
      type: "next",
      description: "Left",
      navigate: "Start",
      addItems: [{ name: "タケコプター", show: true, stackable: true }],
    },
    {
      type: "end",
      message: "You made it!",
      description: "Right",
      navigate: NAVIGATION_TARGET.SUCCESS,
      addItems: [{ name: "どこでもドア", show: true, stackable: false }],
    },
  ]),
} as const satisfies Record<SituationNames, Situation>;
