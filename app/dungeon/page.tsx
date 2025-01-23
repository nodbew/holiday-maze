"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Inventory, SituationHistory } from "../types/situation";
import { SITUATIONS } from "../constants/mazeData";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Home } from "lucide-react";

export default function Page() {
  const [situationHistory, setSituationHistory] = useState<SituationHistory>([
    "スタート",
  ]);
  const [inventory, setInventory] = useState<Inventory>([]);
  // An element of situationHistory can't be removed, and since situationHistory already has an element, it must have one element
  const { description, possibleActions } = SITUATIONS[situationHistory.at(-1)!];

  return (
    <div className="flex flex-col h-full">
      <Button className="fixed left-5 top-5 p-5" asChild>
        <Link href="/">
          <Home />
          Reset
        </Link>
      </Button>
      <Command className="fixed right-10 top-20 w-2/12 h-2/3 border-black border-2 rounded-md">
        <h2 className="text-bold text-5xl p-5">Inventory</h2>
        <CommandList>
          {inventory.map((item, idx) =>
            item.show ? <CommandItem key={idx}>{item.name}</CommandItem> : null
          )}
        </CommandList>
      </Command>
      <h4 className="text-center self-center w-2/3 mt-10 p-2 text-5xl">
        {description}
      </h4>
      <Command className="mb-10 mt-auto w-2/3 h-fit self-center border-black border-2 rounded-md">
        <CommandList className="max-h-none w-full">
          {possibleActions.map(({ description, callback }, idx) => (
            <CommandItem key={idx} className="text-2xl">
              <Button
                className="bg-transparent w-full h-full justify-start text-black text-3xl hover:bg-transparent shadow-none border-none rounded-none p-0"
                onClick={() =>
                  callback(
                    inventory,
                    setInventory,
                    situationHistory,
                    setSituationHistory
                  )
                }
              >
                {description}
              </Button>
            </CommandItem>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}
