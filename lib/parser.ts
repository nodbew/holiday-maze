import { CardCollection } from "./cardUtils";

/**
 * Takes an aarray of string and returns the card id and the inventory.
 * @param datas An array of string.
 * @returns { cardId: keyof CardCollection, inventory: Array<string> }
 */
export function parseCurrentState(datas: Array<string>): {
  cardId: keyof CardCollection;
  inventory: Array<string>;
} {
  // Essentially: [infer cardId, ...infer inventory] + error handling
  const cardId = datas.splice(0, 1)[0];
  if (cardId == undefined) {
    throw new Error("Invalid card id");
  } else {
    return { cardId, inventory: datas };
  }
}
