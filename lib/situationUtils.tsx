import { SituationNames } from "@/app/constants/mazeData";
import { Action, Item, Situation } from "@/app/types/situation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export const NAVIGATION_TARGET = {
  SUCCESS: Symbol("Success"),
  FAILURE: Symbol("Failure"),
} as const satisfies Record<string, symbol>;

/* Utility function for creating situation objects */
export function createSituation(
  description: string,
  options: Array<
    { description: string } & (
      | {
          type: "next";
          navigate: SituationNames | number;
          requiredItems?: Array<Item>;
          addItems?: Array<Item>;
        }
      | {
          type: "end";
          navigate: (typeof NAVIGATION_TARGET)[keyof typeof NAVIGATION_TARGET];
          message: string;
          requiredItems?: Array<Item>;
          addItems?: Array<Item>;
        }
      | {
          type: "raw";
          component: NonNullable<Action["component"]>;
        }
    )
  >
): Situation {
  const possibleActions: Situation["possibleActions"] = [];
  for (const option of options) {
    switch (option.type) {
      // Automatically generate a button component
      case "next": {
        const component: Action["component"] = ({
          inventory,
          setInventory,
          situationHistory,
          setSituationHistory,
        }) => {
          const { description, navigate, requiredItems, addItems } = option;
          // Check if there are necessary items for selecting the option
          const disabled = !(
            requiredItems?.every((item) =>
              inventory.some((item2) => item.name === item2.name)
            ) ?? true
          );
          // Callback to call when the option is selected
          const handleClick = () => {
            // Add items to inventory
            const itemsToAdd =
              addItems?.filter(
                (item) =>
                  item.stackable ||
                  !inventory.some((item2) => item.name === item2.name)
              ) ?? []; // Filter out items that are not stackable and is already in inventory
            setInventory((prev) => [...prev, ...itemsToAdd]);
            // Redirect to the next situation
            if (typeof navigate === "number") {
              if (navigate <= situationHistory.length) {
                redirect(
                  `/result/error/${encodeURIComponent(
                    "Internal Error: Failed to navigate to a previous page"
                  )}`
                );
              } else {
                setSituationHistory((prev) => [
                  ...prev,
                  situationHistory.at(-navigate)!,
                ]);
              }
            } else {
              setSituationHistory((prev) => [...prev, navigate]);
            }
          };

          return (
            <Button
              className="bg-transparent w-full h-full justify-start text-black text-3xl hover:bg-transparent shadow-none border-none rounded-none p-0"
              onClick={() => handleClick()}
              disabled={disabled}
            >
              {description}
            </Button>
          );
        };
        possibleActions.push({ description, component });
        break;
      }
      case "end": {
        const { description, navigate, requiredItems, addItems, message } =
          option;
        const component: Action["component"] = ({ inventory }) => {
          // Check if there are necessary items for selecting the option
          const disabled = !(
            requiredItems?.every((item) =>
              inventory.some((item2) => item.name === item2.name)
            ) ?? true
          );
          let href;
          switch (navigate.description) {
            case "Success":
              href = `result/success/${encodeURIComponent(message)}`;
              break;
            case "Failure":
              href = `result/failure/${encodeURIComponent(message)}`;
              break;
            default:
              href = `result/error/${encodeURIComponent(
                "Internal error: Failed to parse the exiting option"
              )}`;
          }
          return disabled ? (
            <p className="text-gray-400">{description}</p>
          ) : (
            <Link href={href}>{description}</Link>
          );
        };
        possibleActions.push({ description, component });
        break;
      }
      case "raw":
        possibleActions.push(option);
        break;
    }
  }
  return { description, possibleActions };
}
