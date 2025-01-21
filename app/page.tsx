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
    <div className="flex flex-col justify-center">
      <h1 className="self-start w-full mt-5 p-2 font-bold text-center text-9xl">
        TITLE
      </h1>
      <div className="absolute top-1/2 left-0 w-full">
        <div className="relative">
          <div className="bg-white absolute w-1/3 left-1/3 top-0 z-10 flex justify-center align-center">
            <Button className="self-end w-1/2 h-10 mb-2 p-2 " asChild>
              <Link href="/dungeon">Start</Link>
            </Button>
          </div>
          <div className="bg-black w-full h-0.5 absolute left-0 top-5" />
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="absolute bottom-0 left-0 w-1/4 h-9 bg-black text-white rounded-md">
          info
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-3xl border-b-2 border-black pb-1 mb-3">
              Story
            </DialogTitle>
            <DialogDescription className="whitespace-pre-line text-black">
              {`One morning, you woke up in a dungeon...
              If you make a wrong decision, you will be trapped forever.
              Select the right options to escape!
              
              N.B. 
              Items in your inventory might help...`}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button className="absolute bottom-0 right-0 w-1/4 h-9" asChild>
        <Link href="/credits">Credits</Link>
      </Button>
    </div>
  );
}
