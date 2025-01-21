"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Inventory, SituationHistory } from "../types/situation";
import { SITUATIONS } from "../constants/staticData";
import { Command, CommandItem, CommandList } from "@/components/ui/command";

export default function Page() {
  const [situationHistory, setSituationHistory] = useState<SituationHistory>([
    "スタート",
  ]);
  const [inventory, setInventory] = useState<Inventory>([]);
  // An element of situationHistory can't be removed, and since situationHistory already has an element, it must have one element
  const { description, possibleActions } = SITUATIONS[situationHistory.at(-1)!];

  return (
    <div className="flex flex-col justify-center">
      <Button className="fixed left-10 top-10 border-r-4 p-10" asChild>
        <Link href="/" className="w-full">
          Reset
        </Link>
      </Button>
      <Command className="fixed left-10 top-20 w-1/4 h-2/3">
        <CommandList>
          {inventory.map((item) =>
            item.show ? <CommandItem>{item.name}</CommandItem> : null
          )}
        </CommandList>
      </Command>
      <h4 className="self-start w-3/4 mt-2 p-2">{description}</h4>
      <ul className="self-end w-3/4 space-y-4">
        {possibleActions.map(({ description, callback }, idx) => (
          <li key={idx} className="w-full">
            <Button
              onClick={() =>
                callback(
                  inventory,
                  setInventory,
                  situationHistory,
                  setSituationHistory
                )
              }
              className="w-full border-r-4"
            >
              {description}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
