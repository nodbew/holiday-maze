import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
  return (
    <div className="flex flex-col h-full relative">
      <h1 className="self-start w-full mt-5 p-2 font-bold text-center text-9xl">
        TITLE
      </h1>
      <div className="absolute top-1/2 left-0 w-full">
        <div className="relative">
          <div className="absolute w-1/3 left-1/3 top-0 flex justify-center align-center">
            <Button className="self-end w-1/2 h-10 mb-2 p-2" asChild>
              <Link href="/dungeon">Start</Link>
            </Button>
          </div>
          <div className="bg-primary w-1/3 h-0.5 absolute left-0 top-5" />
          <div className="bg-primary w-1/3 h-0.5 absolute right-0 top-5" />
        </div>
      </div>
      <div className="flex flex-row mb-4 mt-auto h-[12%]">
        <Dialog>
          <DialogTrigger className="ml-40 mr-auto w-1/12 h-full bg-primary text-accent rounded-full">
            info
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center text-3xl border-b-2 border-primary pb-1 mb-3">
                Story
              </DialogTitle>
              <DialogDescription className="whitespace-pre-line text-primary text-lg">
                {`One morning, you woke up in a dungeon...
              A single wrong decision will trap you in forever.
              Choose the right actions to escape!
              
              N.B. 
              Items in your inventory might help...`}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button className="mr-40 ml-auto w-1/12 h-full bg-primary text-accent rounded-full" asChild>
          <Link href="/credits">Credits</Link>
        </Button>
      </div>
    </div>
  );
}
