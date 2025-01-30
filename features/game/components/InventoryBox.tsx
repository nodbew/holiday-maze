import { Inventory } from "@/features/game/types/inventory";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { ComponentProps } from "react";

export default function InventoryBox(
  props: ComponentProps<typeof Command> & { inventory: Inventory }
) {
  const { inventory, ...others } = props;
  return (
    <Command {...others}>
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
  );
}
