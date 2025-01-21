import { Card, createCard } from "@/lib/cardUtils";

test("Correct card create successfully", () => {
  expect(createCard("QUESTION", [])).toStrictEqual<Card>({
    question: "QUESTION",
    options: [],
  });
  expect(
    createCard("Q", [
      { option: "O", next: "Q", requiredItems: [], callback: () => {} },
    ])
  ).toStrictEqual<Card>({
    question: "Q",
    options: [
      { option: "O", next: "Q", selectable: (_) => true, callback: () => {} },
    ],
  });
});
