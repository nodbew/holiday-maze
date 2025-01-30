"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import type { Inventory } from "@/features/game/types/inventory";
import type { SituationHistory } from "@/features/game/types/situation";
import { SITUATIONS } from "@/features/game/data";
import ResetButton from "@/features/game/components/ResetButton";
import InventoryBox from "@/features/game/components/InventoryBox";
import Actions from "@/features/game/components/Actions";

export default function Page() {
  // States to manage the situation to show
  const [situationHistory, setSituationHistory] = useState<SituationHistory>([
    "Start",
  ]);
  const [inventory, setInventory] = useState<Inventory>([]);

  // Get current state
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
      <ResetButton className="fixed left-5 top-5 p-5" />
      <InventoryBox
        className="fixed right-10 top-20 w-2/12 h-2/3 border-primary border-2 rounded-md"
        inventory={inventory}
      />

      <h4 className="text-center self-center w-2/3 mt-10 p-2 text-5xl">
        {description}
      </h4>
      <Actions
        className="mb-10 mt-auto w-2/3 h-fit self-center border-primary border-2 rounded-md"
        actions={possibleActions}
        variables={{
          inventory,
          setInventory,
          situationHistory,
          setSituationHistory,
        }}
      />
    </div>
  );
}
