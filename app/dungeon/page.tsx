"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Inventory, SituationHistory } from "../types/situation";
import { SITUATIONS } from "../constants/mazeData";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Home } from "lucide-react";
import { redirect } from "next/navigation";

export default function Page() {
  const [situationHistory, setSituationHistory] = useState<SituationHistory>([
    "Start",
  ]);
  const [inventory, setInventory] = useState<Inventory>([]);
  const mostRecentSituationName = situationHistory.at(-1)!;
  let description, possibleActions;
  if (mostRecentSituationName in SITUATIONS) {
    const situation = SITUATIONS[mostRecentSituationName];
    description = situation.description;
    possibleActions = situation.possibleActions;
  } else {
    redirect(
      `/result/error/${encodeURIComponent(
        "Internal Error : Failed to parse history"
      )}`
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Button className="fixed left-5 top-5 p-5" asChild>
        <Link href="/">
          <Home />
          Reset
        </Link>
      </Button>
      <Command className="fixed right-10 top-20 w-2/12 h-2/3 border-black border-2 rounded-md">
        <h2 className="text-bold text-5xl md:text-3xl sm:text-lg p-5 md:p-3 sm:p-1">
          Inventory
        </h2>
        <CommandList>
          {inventory.map((item, idx) =>
            item.show ? (
              <CommandItem key={idx} className="text-bold">
                {item.name}
              </CommandItem>
            ) : null
          )}
        </CommandList>
      </Command>
      <h4 className="text-center self-center w-2/3 mt-10 p-2 text-5xl">
        {description}
      </h4>
      <Command className="mb-10 mt-auto w-2/3 h-fit self-center border-black border-2 rounded-md">
        <CommandList className="max-h-none w-full">
          {possibleActions.map(({ component }, idx) => (
            <CommandItem key={idx} className="text-2xl">
              {component({
                inventory,
                setInventory,
                situationHistory,
                setSituationHistory,
              })}
            </CommandItem>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}
