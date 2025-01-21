import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";

const LICENSES: Record<string, ReactNode> = {
  React: (
    <Link href="https://github.com/facebook/react">Link to the license</Link>
  ),
};

export default function Page() {
  return (
    <>
      <h2>Credits</h2>
      <h5>This project uses the following open source libraries:</h5>
      <Command className="overflow-auto">
        <CommandList>
          {Object.entries(LICENSES)
            .toSorted(([n1, _], [n2, __]) => n1.localeCompare(n2))
            .map(([name, childNode]) => (
              <CommandItem key={name}>{childNode}</CommandItem>
            ))}
        </CommandList>
      </Command>
      <Button className="absolute left-10 bottom-10" asChild>
        <Link href="/">Home</Link>
      </Button>
    </>
  );
}
