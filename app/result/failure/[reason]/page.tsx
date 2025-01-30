import ResultMessage from "@/features/result/components/ResultMessage";

export default async function Page({
  params,
}: {
  params: Promise<{ reason: string }>;
}) {
  const description = decodeURIComponent((await params).reason);
  return <ResultMessage title="You died..." description={description} />;
}
