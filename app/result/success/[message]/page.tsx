import Confetti from "../../../../features/result/components/Confetti";
import ResultMessage from "@/features/result/components/ResultMessage";

export default async function Page({
  params,
}: {
  params: Promise<{ message: string }>;
}) {
  const description = decodeURIComponent((await params).message);
  return (
    <>
      <ResultMessage title="You made it!" description={description} />
      <Confetti />
    </>
  );
}
