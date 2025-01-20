import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="self-start w-full mt-2 p-2">TITLE</h2>
      <Button className="self-end w-1/2 mb-2 p-2" asChild>
        <Link href="/0" className="w-full">
          Start
        </Link>
      </Button>
    </div>
  );
}
