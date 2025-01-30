import ResultMessage from "@/features/result/components/ResultMessage";

export default async function Page({
  params,
}: {
  params: Promise<{ message: string }>;
}) {
  const description = decodeURIComponent((await params).message);
  return (
    <ResultMessage
      title="Oops!"
      description={`Something went wrong...
        Error: ${description}`}
    />
  );
}
