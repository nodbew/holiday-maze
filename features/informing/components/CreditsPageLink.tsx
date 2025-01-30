import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";

export default function CreditsPageLink(props: ButtonProps) {
  const propsWithDefaults = { asChild: true, ...props };
  return (
    <Button {...propsWithDefaults}>
      <Link href="/credits">Credits</Link>
    </Button>
  );
}
