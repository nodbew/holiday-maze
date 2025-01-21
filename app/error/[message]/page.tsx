import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({
  params: { message },
}: {
  params: { message: string | Array<string> | undefined };
}) {
  if (typeof message === "string") {
  } else if (message == undefined) {
    message = "Unknown error";
  } else {
    message = message.join(",");
  }
  return (
    <div className="flex flex-col justify-center">
      <h2 className="font-bold mt-4">Oops! Something went wrong!</h2>
      <h4>There was an error: {message}</h4>
      <Button className="self-end w-1/4 " asChild>
        <Link href="/" className="w-full">
          Reset
        </Link>
      </Button>
    </div>
  );
}
