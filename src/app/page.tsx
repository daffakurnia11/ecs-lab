import Typography from "@/components/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Typography.Heading level={1} className="text-7xl" weight="font-bold">
          Level 0
        </Typography.Heading>
        <Typography.Heading level={1}>Level 1</Typography.Heading>
        <Typography.Heading level={2}>Level 2</Typography.Heading>
        <Typography.Heading level={3}>Level 3</Typography.Heading>
        <Typography.Heading level={4}>Level 4</Typography.Heading>
        <Typography.Heading level={5}>Level 5</Typography.Heading>
        <Typography.Heading level={6}>Level 6</Typography.Heading>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Typography.Paragraph size="lg" weight="font-semibold">
          Paragraph Large
        </Typography.Paragraph>
        <Typography.Paragraph size="base" weight="font-semibold">
          Paragraph Base
        </Typography.Paragraph>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Typography.Small size="base" weight="font-semibold">
          Small Base
        </Typography.Small>
        <Typography.Small size="xs" weight="font-semibold">
          Small
        </Typography.Small>
      </div>
    </main>
  );
}
