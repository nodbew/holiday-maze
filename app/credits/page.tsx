import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LICENSES } from "./licenses";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
  return (
    <>
      <h1 className="text-6xl p-4 pl-0">Credits</h1>
      <h5 className="mb-2">
        This project uses the following open source libraries:
      </h5>
      <Command className="h-fit max-h-4/5 mb-5">
        <CommandList className="overflow-auto max-h-none">
          {Object.entries(LICENSES)
            .toSorted(([n1, _], [n2, __]) => n1.localeCompare(n2))
            .map(([name, childNode]) => (
              <Dialog key={name}>
                <DialogTrigger className="flex flex-col">
                  <CommandItem>{name}</CommandItem>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>{name}</DialogTitle>
                  {childNode}
                </DialogContent>
              </Dialog>
            ))}
        </CommandList>
      </Command>
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
    </>
  );
}
