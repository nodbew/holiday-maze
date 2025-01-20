export type Card = {
  question: string;
  options: Array<{
    option: string;
    next: keyof CardCollection;
    selectable: (inventory: Array<string>) => boolean;
    callback: (inventory: Array<string>) => void;
  }>;
};
export type CardCollection = Record<string, Card>;

/**
 * A utility function to create a card.
 * @param question @type {string} The question to display. Example: "You found a small light. Do you want to use it?"
 * @param options @type {{option: string, next: number, requiredItems: Array<string>}}
 *  - option: A string that represents the option. Example: "Use the light"
 *  - next: The
 * @returns A Card object.
 */
export function createCard(
  question: string,
  options: Array<{
    option: string;
    next: keyof CardCollection;
    requiredItems: Array<string>;
    callback: (inventory: Array<string>) => void;
  }>
): Card {
  return {
    question,
    options: options.map(({ option, next, requiredItems, callback }) => ({
      option,
      next,
      callback,
      selectable: (inventory: Array<string>) =>
        requiredItems.every((item) =>
          inventory.includes(item)
        ) /* Check if the required item is in the inventory */,
    })),
  };
}
