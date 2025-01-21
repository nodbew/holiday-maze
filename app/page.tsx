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
      <h2 className="self-start w-full mt-2 p-2">TITLE</h2>
      <div className="absolute top-1/2 left-0 w-full">
        <div className="relative">
          <div className="bg-opacity-100 absolute w-1/3 left-1/3 top-0 z-10 flex flex-col justify-center align-center">
            <Button className="self-end w-1/2 mb-2 p-2 border-r-4" asChild>
              <Link href="/dungeon">Start</Link>
            </Button>
          </div>
          <hr className="w-full absolute" />
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="absolute bottom-0 left-0 w-1/4 border-r-4">
          info
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Story</DialogTitle>
            <DialogDescription>
              One morning, you woke up in a dungeon... If you make a wrong
              decision, you will be trapped forever. Select the right options to
              escape! N.B. Items in your inventory might help...
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button className="absolute bottom-0 right-0 w-1/4 border-r-4" asChild>
        <Link href="/credits" className="w-full">
          Credits
        </Link>
      </Button>
    </div>
  );
}
