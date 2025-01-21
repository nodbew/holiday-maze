import { Item, Situation } from "../types/situation";

export const ITEMS: Record<string, Item> = {
  タケコプター: { name: "タケコプター", show: true },
} as const;

export const SITUATIONS: Record<string, Situation> = {
  スタート: {
    description: "You woke up! Which path will you take?",
    possibleActions: [
      {
        description: "Left",
        callback: (_, __, ___, setSituationHistory) =>{console.log("LEFT")
          setSituationHistory((prev) => [...prev, "スタート"])},
      },
      {
        description: "Right",
        callback: (_, __, ___, setSituationHistory) =>
          setSituationHistory((prev) => [...prev, "スタート"]),
      },
    ],
  },
};
