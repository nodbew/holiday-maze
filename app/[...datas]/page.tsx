import { parseCurrentState } from "@/lib/parser";
import { cards } from "@/cards";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { hasProperty } from "@/lib/typeUtils";
import Link from "next/link";

export default function Page({
  params: { datas },
}: {
  params: { datas: string[] };
}) {
  try {
    const { cardId, inventory } = parseCurrentState(datas);
    const { question, options } = cards[cardId];

    return (
      <div className="flex flex-col justify-center">
        <h4 className="self-start w-3/4 mt-2 p-2">{question}</h4>
        <ul className="self-end w-3/4 space-y-4">
          {options.map(({ option, next, selectable, callback }, idx) => (
            <li key={idx} className="w-full">
              <Button
                className="w-full"
                disabled={!selectable(inventory)}
                onClick={() => callback(inventory)}
                asChild
              >
                <Link
                  href={`/${next}/${inventory.join("/")}`}
                  className={
                    /*selectable(inventory) ? "pointer-events-none" :*/ undefined
                  }
                >
                  {option}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (e) {
    if (hasProperty(e, "message")) {
      redirect(`/error/${e.message}`);
    } else {
      redirect("/error");
    }
  }
}
