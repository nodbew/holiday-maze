import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ reason: string }>;
}) {
  const reason = decodeURIComponent((await params).reason);
  return (
    <div className="flex flex-col align-center h-full">
      <h2 className="font-bold p-5 text-center text-6xl">You Died!</h2>
      <h4 className="font-medium text-center text-lg whitespace-pre-line p-2">
        {reason}
      </h4>
      <Button className="mb-10 mt-auto w-1/3 self-center" asChild>
        <Link href="/">Restart</Link>
      </Button>
    </div>
  );
}
