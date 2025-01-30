import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResultMessage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col align-center h-full">
      <h2 className="font-bold p-5 text-center text-6xl">{title}</h2>
      <h4 className="font-medium text-center text-lg whitespace-pre-line p-2">
        {description}
      </h4>
      <Button className="mb-10 mt-auto w-1/3 self-center" asChild>
        <Link href="/">Reset</Link>
      </Button>
    </div>
  );
}
