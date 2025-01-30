import { Button, ButtonProps } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function ResetButton(props: ButtonProps) {
  const propsWithDefault = {
    asChild: true,
    ...props,
  };
  return (
    <Button {...propsWithDefault}>
      <Link href="/">
        <Home />
        Reset
      </Link>
    </Button>
  );
}
